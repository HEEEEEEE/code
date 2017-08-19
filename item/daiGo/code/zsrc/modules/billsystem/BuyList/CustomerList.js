/**
 * 预购清单页面,买家分类列表
 * props:
 * data => obj, 数据
 * deletePanel => function, 删除面板
 * deleteTableRow => function, 删除表格数据(单个订单)
 * setNum => function, 修改数量
 * setRemark => function, 修改备注
 * goodsDetails => function, 跳转商品编辑页面
 * address => function, 跳转地址信息页面
 * addOrder => function, 跳转加单页面
 * orderDetails => function, 跳转订单详情页面
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    ListView,
    TouchableOpacity,
    Dimensions,
    Alert,
    DeviceEventEmitter
} from 'react-native';
import { SwipeListView } from '../../../component/SwipeListView';

import { colors,fonts,tableStyle } from '../../../styles';
import CustomerTogglePanel from './CustomerTogglePanel';
import SearchInput from '../../../component/SearchInput';

import { Btn,BtnAnnular } from '../../../component/Btn';

export default class CustomerList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
        this.serchValue = '';
        this.goodsNum = null; // 存放买家购买的商品数量
        this.searchData = this.props.data;
        this.listScrollEnabled = true;
    }

    normalListDs = new ListView.DataSource({//这是定义结构
        rowHasChanged: (row1, row2) => row1 !== row2
    });

    componentDidMount() {
        let data = this.dealDataByCustomer(this.props.data);
        this.setState({data})
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.data) {
            let data = this.dealDataByCustomer(nextProps.data);
            if(this.serchValue != '') {
                this.search(this.serchValue);
            }else {
                this.setState({
                    data: data
                })
            }
        }
    }

    /**************************************
     **功能说明：返回一个按照买家分组的对象
     **参数说明
     **      **data：订单信息列表
     **************************************/
    dealDataByCustomer(data){
        let dataBlob = {},
            goodsNum = {};
        for(let order of data) {
            let key = order.nickname + "_" + order.cid;
            if (!dataBlob[key]) {
                dataBlob[key] = [];
                goodsNum[key] = 0;  // 记录该买家购买的商品数量
            }
            dataBlob[key].push(order);
            goodsNum[key] += order.quantity;
        }
        this.goodsNum = goodsNum;
        this.dataBlob = dataBlob;
        this.searchData = dataBlob;
        return dataBlob;
    }

    // 删除单个订单
    deleteOrder(order) {
        let nickname = `${order.nickname}_${order.cid}`;
        let { data } = this.state;
        if(this.searchData[nickname]){
            let index = this.searchData[nickname].indexOf(order);
            this.searchData[nickname].splice(index,1);
        }
        this.goodsNum[nickname] -= order.quantity;
        if(this.goodsNum[nickname] == 0) {
            delete this.goodsNum[nickname];
            delete data[nickname];
            delete this.searchData[nickname];
        }
        this.setState({data});
    }

    // 删除多个订单
    deleteOrders(value,key,id) {
        let { data } = this.state,
            { searchData, goodsNum } = this;
        if(key == 'nickname') {
            let nickname = `${value}_${id}`;
            delete goodsNum[nickname];
            delete data[nickname];
            delete searchData[nickname];
        }else{
            for(let nickname in searchData) {
                for(let i = 0; i < searchData[nickname].length; i++) {
                    let order = searchData[nickname][i];
                    if(order[key] == value && order.product_id == id) {
                        goodsNum[nickname] -= order.quantity;
                        searchData[nickname].splice(i,1);
                        i--;
                    }
                }
                if(goodsNum[nickname] == 0){
                    delete goodsNum[nickname];
                    delete data[nickname];
                    delete searchData[nickname];
                }
            }
        }
        this.setState({data});
    }

    /**************************************
     **功能说明：渲染listview列表内容的方法，渲染买家分类面板
     **************************************/
    renderCustomerRow = (rowData,sectionId,rowId) => { // 买家分类
        let addOrderData = {
            nickname: rowData[0].nickname,
            cid: rowData[0].cid
        };
        let num = this.goodsNum[rowId];
        return (
            <CustomerTogglePanel
                data={rowData}
                num={num}
                navigator={this.props.navigator}
                titleOnPress={ _ => this.props.customerDetails && this.props.customerDetails(addOrderData.cid,addOrderData.nickname)}
                addressOnPress={ _ => this.props.address && this.props.address(rowData) }
                deletePanel={ _ => this.props.deletePanel && this.props.deletePanel(rowData[0].nickname,'nickname',rowData,rowData[0].cid) }
                addOrderOnPress={ _ => this.props.addOrder && this.props.addOrder(addOrderData) }
                deleteTableRow={this.props.deleteTableRow}
                orderDetails={this.props.orderDetails}
                goodsDetails={this.props.goodsDetails}
                setNum={this.props.setNum}
                setRemark={this.props.setRemark}
                goodsNum={this.goodsNum}
                setListScroll={this.setListScroll}
            />
        )
    }

    search(text) {
        this.serchValue = text;
        if(text != ''){
            let data = {};
            for(let nickname in this.searchData) {
                if(nickname.toLowerCase().search(text.toLowerCase()) != -1) { // 买家名
                    data[nickname] = this.searchData[nickname];
                }
            }
            this.setState({data});
        }else{
            this.setState({data:this.searchData})
        }
    }

    closeRowAndTableRow() {
        this._list.closeRowAndTableRow();
    }

    scrollTo(obj) {
        this._list.scrollTo(obj);
    }

    blur() {
        this._searchInput.blur();
    }

    setListScroll = (enable) => {
        if(this.listScrollEnabled == false) return;
        this._list.setScrollEnabled(enable)
    }

    render(){
        let { data } = this.state;
        let hasOrder = JSON.stringify(data) != '{}';
        return (
            <View style={{flex:1}}>
                {
                    !hasOrder ?
                        <View style={styles.tip}>
                            <Text>当前没有订单哟</Text>
                            <Text style={{fontSize:fonts.h1}}>⇩</Text>
                        </View> : null
                }
                <SwipeListView
                    dataSource={this.normalListDs.cloneWithRows(data)}
                    renderRow={this.renderCustomerRow}
                    renderHeader={ _ =>
                        <SearchInput
                            label="搜买家"
                            onChangeText={ t => this.search(t) }
                            ref={ e => this._searchInput = e }
                        />
                    }
                    pageSize={1}
                    initialListSize={7}
                    ref={ e => this._list = e }
                    keyboardShouldPersistTaps="handled"
                    keyboardDismissMode="on-drag"
                    listScrollEnabled={ enable => this.listScrollEnabled = enable}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    btnView:{
        flex:1,
        alignSelf:'stretch',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent'
    },
    tip: {
        position:'absolute',
        top:0,left:0,right:0,bottom:0,
        justifyContent:'center',
        alignItems:'center'
    }
});