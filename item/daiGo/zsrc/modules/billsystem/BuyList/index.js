/**
 * 预购列表页面
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    Alert,
    DeviceEventEmitter,
    Platform,
    InteractionManager,
    NetInfo
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ScrollableTabView from 'react-native-scrollable-tab-view';

import { colors,fonts } from '../../../styles';

import httpService from '../../../service/httpService';
import util from '../../../service/utilService';

import CustomerList from './CustomerList';
import GoodsList from './GoodsList';

import { TabBarBottom } from '../../../component/TabBar';
import { Btn } from '../../../component/Btn';
import AddOrder from '../AddOrder';
import GoodsDetails from '../../goodslibrary/GoodsDetails';
import BuyerAddress from '../BuyerAddress';
import OrderDetails from '../OrderDetails';
import CustomerDetails from '../../Customer/CustomerDetails';


import Picker from 'react-native-picker';

const WINDOW_WIDTH = Dimensions.get('window').width;

export default class BuyList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataSource:null,
        };
        this.cateType = 0; // 当前页面
    }

    // 是否有此买家或者此商品的订单
    hasCustomerOrGood(id,key){
        let { dataSource } = this.state;
        for(let i = 0, length = dataSource.length; i < length; i++ ) {
            if(dataSource[i][key] == id) {
                return true;
            }
        }
        return false;
    }

    getData = (id,key) => {
        if(id && key){
            let canGet = this.hasCustomerOrGood(id,key);
            if(!canGet) return;
        }
        if(this.props.cateType() != 0) {
            this.setState({dataSource:null})
        }
        httpService.getBillList(1).then((response)=>{
            if(response.ok) {
                let data = JSON.parse(response._bodyInit).data;
                util.saveStorage('buyList',data);
                InteractionManager.runAfterInteractions(() => {
                    setTimeout( _ => {
                        this.setState({
                            dataSource:data
                        })
                    },100)
                });
            }
        },(error)=>{
            util.getStorage('buyList').then( data => {
                if(data) {
                    InteractionManager.runAfterInteractions(() => {
                        setTimeout( _ => {
                            this.setState({
                                dataSource: data
                            })
                        },100)
                    });
                }
            })
        });
    }

    componentDidMount(){
        this.getData();
        this.props.dealCustomerLength && this.props.dealCustomerLength();
        // 订单买到后通知收款发货页面重新获取数据
        this.subscriptions = [
            DeviceEventEmitter.addListener('addToBuyList',this.getData),
            DeviceEventEmitter.addListener('saveBuyList',this.saveLocal)
        ];
    }

    // 保存列表到本地
    saveLocal = () => {
        let { dataSource } = this.state;
        util.saveStorage('buyList',dataSource);
    }

    componentWillUnmount() {
        // 移除
        this.subscriptions.forEach((sub) => sub.remove());
    }

    componentDidUpdate() {
        if(this._goodsList){
            this.props.setTabTips(this._goodsList.length,0);
        }
    }

    /**************************************
     **功能说明：显示数量选择器
     **      **defaultValue: 显示默认数据
     **      **rowData: 需要修改的数据
     **************************************/
    showNumPicker(defaultValue,rowData) {
        this.props.pickerModal().show({
            selectedValue: [defaultValue],
            onPickerConfirm: (pickedValue, pickedIndex) => { // 选中的pickedValue是一个字符串的数组
                httpService.setQuantity(pickedValue[0],rowData.oid).then((response)=>{
                    rowData.quantity = parseInt(pickedValue[0]);
                    rowData.updatePanel();
                    this.saveLocal();
                })
            },
        });
    }

    showSetText(data) {
        this.props.setTextModal().show(data.remark,(t) => {
            httpService.setRemark(t,data.oid).then((response)=>{
                data.remark = t;
                data.updatePanel();
                this.saveLocal();
            });
        })
    }

    showSetCate(defaultValue,pickerData,data) {
        let oids = data.map( item => item.oid );
        let oldCate = data[0].cate_name;
        this.props.setCateModal().show(defaultValue,pickerData, (value) => {
            if(value != '' && value != data[0].cate_name){
                httpService.setCate(oids.join(','),value).then((response)=>{
                    data.map( item => item.cate_name = value )
                    this._goodsList.setCate(`${data[0].product_name}_${data[0].product_id}`,value,oldCate);
                    this.saveLocal();
                })
            }
        })
    }

    /**************************************
     **功能说明：确认买到 删除表格本条信息
     **参数说明
     **      **data: 该条数据
     **************************************/
    bought(data){ // 买到
        httpService.updateOrderStatus(data.oid,2).then((response)=>{
            if(response.ok) {
                this.deleteTableRow(data);
                this.props.dealCustomerLength();
                // 调用收款发货页面的通知
                DeviceEventEmitter.emit('addToPayAndSend');
            }
        });
    }
    deleteOrder(data) {
        httpService.updateOrderStatus(data.oid,0).then((response)=>{
            if(response.ok) {
                this.deleteTableRow(data);
            }
        });
    }
    deleteTableRow(data){ // 删除表格数据
        this._goodsList && this._goodsList.deleteOrder(data);
        this._customerList && this._customerList.deleteOrder(data);

        let { dataSource } = this.state,
            index = dataSource.indexOf(data);
        dataSource.splice(index,1);

        this.saveLocal();
    }

    /**************************************
     **功能说明：确认全部买到 删除面板
     **参数说明
     **      **key: 确认后删除state.dataSource的keyName对应内容
     **      **keyName：确认后删除state.dataSource的keyName
     **      **data: 该面板下所有数据
     **************************************/
    buyAll(value,key,data,id){ // 全部买到
        let oids = data.map( item => item.oid);
        httpService.updateOrderStatus(oids.join(','),2).then((response)=>{
            if(response.ok) {
                this.deletePanel(value,key,id);
                this.props.dealCustomerLength();
                // 调用收款发货页面的通知
                DeviceEventEmitter.emit('addToPayAndSend');
            }
        });
    }
    deleteOrders(value,key,data,id) {
        let oids = data.map( item => item.oid);
        httpService.updateOrderStatus(oids.join(','),0).then((response)=>{
            if(response.ok) {
                this.deletePanel(value,key,id)
            }
        });
    }
    deletePanel(value,key,id){ // 删除面板
        this._goodsList && this._goodsList.deleteOrders(value,key,id);
        this._customerList && this._customerList.deleteOrders(value,key,id);

        let { dataSource } = this.state;
        for(var i = 0; i < dataSource.length; i++ ){
            if(key == 'nickname') {
                if(dataSource[i][key] == value && dataSource[i].cid == id){
                    dataSource.splice(i,1);
                    i--;
                }
            }else{
                if(dataSource[i][key] == value && dataSource[i].product_id == id){
                    dataSource.splice(i,1);
                    i--;
                }
            }
        }

        this.saveLocal();
    }

    /**************************************
     **功能说明：跳转到加单页面
     **参数说明
     **      **data：传递data到加单页面
     **************************************/
    jumpAddOrder = (data) => {
        this.closeRowAndTableRow();
        let { ...key } = data;
        this.props.navigator.push({
            name:'AddOrder',
            component:AddOrder,
            type: 'bottom',
            params:{
                ...key,
                goodsCateNames: this._goodsList.goodsCateNames
            }
        })
    }

    /**************************************
     **功能说明：跳转到订单详情页面
     **参数说明
     **      **data：订单信息
     **************************************/
    jumpOrderDetails = (data) => {
        this.closeRowAndTableRow();
        this.props.navigator.push({
            name:'OrderDetails',
            component:OrderDetails,
            params:{
                data: data,
            }
        })
    }

    /**************************************
     **功能说明：跳转到商品编辑页面
     **参数说明
     **      **productName：商品名
     **************************************/
    jumpGoodsDetails = (id,productName,roomId) => {
        this.closeRowAndTableRow();
        this.props.navigator.push({
            name:'GoodsDetails',
            component:GoodsDetails,
            params:{
                product_id: id,
                product_name:productName,
                room_id: roomId
            }
        })
    }

    // 跳转到买家详情页面
    jumpCustomerDetails = (cid,nickname) => {
        this.closeRowAndTableRow();
        this.props.navigator.push({
            name:'CustomerDetails',
            component:CustomerDetails,
            params:{
                cid:cid,
                nickname:nickname
            }
        })
    }

    /**************************************
     **功能说明：跳转到买家订单地址页面
     **参数说明
     **      **data：买家订单信息
     **************************************/
    jumpAddress = (data) => {
        this.closeRowAndTableRow();
        this.props.navigator.push({
            name:'BuyerAddress',
            component:BuyerAddress,
            params:{
                data:data
            }
        })
    }

    // 关闭所有打开的左划
    closeRowAndTableRow() {
        this._goodsList &&  this._goodsList.closeRowAndTableRow();
        this._customerList && this._customerList.closeRowAndTableRow();
    }

    // 跳转到第一页
    goToFirstPage() {
        this._tabBar && this._tabBar.goToPage(0);
    }

    // 所有列表滚回顶部
    scrollToTop() {
        this._goodsList && this._goodsList.scrollTo({y: 0, animated: true});
        this._customerList && this._customerList.scrollTo({y: 0, animated: true});
    }

    // 点击底部当前页面的tab,当前页面列表滚回顶部
    activeTabOnPress(i) {
        if(i == 0) this._goodsList && this._goodsList.scrollTo({y: 0, animated: true});
        if(i == 1) this._customerList && this._customerList.scrollTo({y: 0, animated: true});
    }

    blur() {
        this._goodsList && this._goodsList.blur();
        this._customerList && this._customerList.blur();
    }

    render(){
        let { dataSource } = this.state;
        if( dataSource == null ){
            return (
                <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
                    <Text>正在加载中···</Text>
                </View>
            )
        }
        return (
            <View style={styles.container}>
                <ScrollableTabView
                    renderTabBar={() =>
                    <TabBarBottom
                        tabNames={['按商品分类','按买家分类']}
                        keyboardDidShow={() => this.keyboardDidShow()}
                        keyboardDidHide={() => this.keyboardDidHide()}
                        activeTabOnPress={(i)=> this.activeTabOnPress(i)}
                    />
                    }
                    tabBarPosition="bottom"
                    locked={true}
                    onChangeTab={(obj)=>{
                        this.cateType = obj.i;
                        this.closeRowAndTableRow();
                    }}
                    ref={ e => this._tabBar = e }
                >
                    <View style={{flex:1}} tabLabel="按商品分类">
                        <GoodsList
                            navigator={this.props.navigator}
                            data={dataSource}
                            goodsDetails={ this.jumpGoodsDetails }
                            customerDetails={ this.jumpCustomerDetails }
                            buyAll={ (value,key,data,id) => { this.closeRowAndTableRow(); util.alertPrompt('确认全部买到?', _ => this.buyAll(value,key,data,id)) } }
                            addOrder={ this.jumpAddOrder }
                            orderDetails={ this.jumpOrderDetails }
                            deletePanel={ (value,key,data,id) => util.alertPrompt('确认全部删除?', _ => this.deleteOrders(value,key,data,id)) }
                            setNum={ (data) => this.showNumPicker(data.quantity,data) }
                            setRemark={ (data) => this.showSetText(data) }
                            bought={ (data) => util.alertPrompt('确认买到?', _ => this.bought(data)) }
                            deleteTableRow={ (data) => util.alertPrompt('确认删除?', _ => this.deleteOrder(data)) }
                            shift={ (defaultValue,pickerData,data) => this.showSetCate(defaultValue,pickerData,data) }
                            setTabTips={this.props.setTabTips}
                            ref={ e => this._goodsList = e }
                        />
                    </View>

                    <View style={{flex:1}} tabLabel="按买家分类">
                        <CustomerList
                            navigator={this.props.navigator}
                            data={dataSource}
                            customerDetails={ this.jumpCustomerDetails }
                            address={ this.jumpAddress }
                            addOrder={ this.jumpAddOrder }
                            goodsDetails={ this.jumpGoodsDetails }
                            orderDetails={ this.jumpOrderDetails }
                            deletePanel={ (value,key,data,id) => util.alertPrompt('确认全部删除?', _ => this.deleteOrders(value,key,data,id))}
                            setNum={ (data) => this.showNumPicker(data.quantity,data)}
                            setRemark={ (data) => this.showSetText(data) }
                            deleteTableRow={ (data) => util.alertPrompt('确认删除?', _ => this.deleteOrder(data)) }
                            ref={ e => this._customerList = e }
                        />
                    </View>
                </ScrollableTabView>

                <Btn style={styles.btn_Add} onPress={ _ => this.jumpAddOrder()}>
                    <View style={styles.add_circle} ref="addBtn">
                        <Icon name="ios-add" color='#ffffff' size={50} />
                    </View>
                </Btn>
            </View>
        );
    }

    keyboardDidShow(){
        this.refs.addBtn.setNativeProps({style:{height:0,opacity:0}})
    }

    keyboardDidHide(){
        this.refs.addBtn.setNativeProps({style:{height:45,opacity:1}})
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    btn_Add:{
        position:'absolute',
        left:WINDOW_WIDTH/2-22.5,
        height:45,
        bottom:17.5,
    },
    add_circle: {
        width: 45,
        height: 45,
        borderRadius:22.5,
        backgroundColor: colors.Red,
        overflow:'hidden',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: Platform.OS == 'ios' ? 5 : 0,
    },
});