/**
 * 预购清单页面,商品分类列表
 * props:
 * data => obj, 数据
 * buyAll => function, 全部买到
 * deletePanel => function, 删除面板
 * setNum => function, 修改数量
 * setRemark => function, 修改备注
 * deleteTableRow => function, 删除表格数据(单个订单)
 * bought => function, 单个订单买到
 * goodsDetails => function, 跳转商品编辑页面
 * addOrder => function, 跳转加单加单
 * orderDetails => function, 跳转订单详情页面
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    ListView,
    PixelRatio,
    Platform
} from 'react-native';
import { SwipeListView } from '../../../component/SwipeListView';

import { Btn,BtnAnnular } from '../../../component/Btn';
import GoodsTogglePanel from './GoodsTogglePanel';
import SearchInput from '../../../component/SearchInput';
import { colors,fonts,tableStyle,lines } from '../../../styles';

export default class GoodsList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
        this.searchValue = '';
        this.searchData = this.props.data;
        this.goodsNum = null; // 存放该商品购买的数量
        this.cateNames = []; // 存放分类
        this.goodsCateNames = {}; // 存放商品的分类信息
        this.length = 0; // 商品品种的总数量
        this.listScrollEnabled = true;
    }

    sectionListDs = new ListView.DataSource({//这是定义结构
        rowHasChanged           : (row1, row2) => row1 !== row2,
        sectionHeaderHasChanged : (s1, s2) => s1 !== s2
    });

    componentDidMount() {
        let data = this.dealDataByArea(this.props.data);
        this.setState({data})

    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.data) {
            let data = this.dealDataByArea(nextProps.data);
            if(this.searchValue != '') {
                this.search(this.searchValue);
            }else {
                this.setState({
                    data: data
                })
            }
        }
    }

    componentDidUpdate() {
        this.props.setTabTips(this.length,0);
    }

    /**************************************
     **功能说明：返回一个按照地区分组的对象
     **参数说明
     **      **data：订单信息列表
     **************************************/
    dealDataByArea(data) {
        let dataBlob = {},
            goodsNum = {}, // 商品数量
            goods = {}; // 商品分类信息
        this.length = 0;

        for (let order of data) {
            let productName = `${order.product_name}_${order.product_id}`;

            if (!goods[productName]) { // 没有本商品
                goods[productName] = [order.cate_name]; // 记录本商品分类信息

                if (!dataBlob[order.cate_name]) { // 没有此分类
                    dataBlob[order.cate_name] = {};
                    goodsNum[order.cate_name] = {};
                }

                if (!dataBlob[order.cate_name][productName]) { // 分类中没有本商品
                    dataBlob[order.cate_name][productName] = [];
                    goodsNum[order.cate_name][productName] = 0; // 记录商品数量
                    this.length ++;
                }

                goodsNum[order.cate_name][productName] += order.quantity;
                dataBlob[order.cate_name][productName].push(order);
            }else{ // 有本商品
                let cateName = goods[productName][0];
                order.cate_name = cateName;
                goodsNum[cateName][productName] += order.quantity;
                dataBlob[cateName][productName].push(order);
            }
            if(this.cateNames.indexOf(order.cate_name) < 0) {
                this.cateNames.push(order.cate_name);
            }
        }
        this.goodsNum = goodsNum;
        this.goodsCateNames = goods;
        this.searchData = dataBlob;
        return dataBlob;
    }

    // 删除单个订单
    deleteOrder(order) {
        let cateName = order.cate_name;
        let productName = `${order.product_name}_${order.product_id}`;
        let { data } = this.state;

        this.searchData[cateName][productName].splice(
            this.searchData[cateName][productName].indexOf(order),1);
        this.goodsNum[cateName][productName] -= order.quantity;

        this.deleteCateNameAndProduct(cateName,productName);

        this.setState({data});
    }

    // 删除空分类，空商品数组
    deleteCateNameAndProduct(cateName,productName) {
        let { data } = this.state,
            { searchData,goodsNum,goodsCateNames } = this;

        if(goodsNum[cateName][productName] == 0) {
            delete goodsNum[cateName][productName];
            delete goodsCateNames[productName];
            data[cateName] && delete data[cateName][productName];
            searchData[cateName] && delete searchData[cateName][productName];
            this.length --;
        }

        if(JSON.stringify(goodsNum[cateName]) === '{}') {
            delete goodsNum[cateName];
            delete data[cateName];
            delete searchData[cateName];
        }
    }

    // 删除多个订单
    deleteOrders(value,key,id) {
        let { data } = this.state,
            { searchData,goodsNum,goodsCateNames } = this;
        if(key == 'product_name') { // 删除商品
            this.length --;
            let productName = `${value}_${id}`;
            let cateName = goodsCateNames[productName][0];

            delete goodsNum[cateName][productName];
            delete goodsCateNames[productName];
            data[cateName] && delete data[cateName][productName];
            searchData[cateName] && delete searchData[cateName][productName];

            if(JSON.stringify(this.goodsNum[cateName]) === '{}') {
                delete goodsNum[cateName];
                delete data[cateName];
                delete searchData[cateName];
            }

        }else{ // 删除买家
            for(let cateName in searchData) { // 分类

                for(let productName in searchData[cateName]) { // 商品

                    for(let i = 0; i < searchData[cateName][productName].length; i++) { // 遍历商品下所有订单

                        let order = searchData[cateName][productName][i]; // 订单

                        if(order[key] == value && order.cid == id) { // 是此买家
                            goodsNum[cateName][productName] -= order.quantity;
                            searchData[cateName][productName].splice(i,1);
                            i--;
                        }
                    }
                    this.deleteCateNameAndProduct(cateName,productName);
                }
            }
        }
        this.setState({data});
    }

    /**************************************
     **功能说明：渲染listview头部的方法，定义地区分类列表的头部
     **************************************/
    renderSectionHeader = (sectionData, sectionID) => {
        return (
            <View style={styles.section}>
                <Text style={styles.sectionText}>{sectionID}</Text>
            </View>
        );
    }

    /**************************************
     **功能说明：渲染listview列表内容的方法，渲染商品分类面板
     **************************************/
    renderGoodsRow = (rowData,sectionId,rowId) => { // 商品分类
        let addOrderData = {
            product_name: rowData[0].product_name,
            product_id: rowData[0].product_id,
            cate_name: rowData[0].cate_name,
        };
        let num = this.goodsNum[sectionId][rowId];
        return (
            <GoodsTogglePanel
                data={rowData}
                num={num}
                titleOnPress={ _ => this.props.goodsDetails && this.props.goodsDetails(addOrderData.product_id,addOrderData.product_name,rowData[0].room_id)}
                buyAllOnPress={ _ => this.props.buyAll && this.props.buyAll(rowData[0].product_name,'product_name',rowData,rowData[0].product_id) }
                addOrderOnPress={ _ => this.props.addOrder && this.props.addOrder(addOrderData)}
                deletePanel={ _ => this.props.deletePanel && this.props.deletePanel(rowData[0].product_name,'product_name',rowData,rowData[0].product_id) }
                deleteTableRow={this.props.deleteTableRow}
                orderDetails={this.props.orderDetails}
                customerDetails={this.props.customerDetails}
                shiftOnPress={ _ => this.props.shift && this.props.shift(rowData[0].cate_name,this.cateNames,rowData)}
                setNum={this.props.setNum}
                setRemark={this.props.setRemark}
                bought={this.props.bought}
                goodsNum={this.goodsNum}
                setListScroll={this.setListScroll}
            />
        )
    }

    // 修改分类
    setCate(productName,newCate,oldCate) {
        // this.searchData = this.props.data; // { cate_name:{ product_name:[] } }
        // this.goodsNum = null; // 存放该商品购买的数量 { cate_name:{ product_name: 123 } }
        // this.goodsCateNames = {}; // 存放商品的分类信息 { product_name:[cate_name] }

        if(Platform.OS == 'ios') {
            let data = this.dealDataByArea(this.props.data);
            if(this.searchValue != '') {
                this.search(this.searchValue);
            }else {
                this.setState({
                    data: data
                })
            }
        }else{
            let { data } = this.state,
                { searchData, goodsNum, goodsCateNames } = this;
            let goods = data[oldCate][productName];
            let productNum = goodsNum[oldCate][productName];

            delete data[oldCate][productName]; // 删除旧分类下的商品
            delete searchData[oldCate][productName]; // 删除旧分类下的商品
            delete goodsNum[oldCate][productName]; // 删除旧分类下的商品数量
            goodsCateNames[productName] = [newCate]; // 商品分类修改

            if(this.cateNames.indexOf(newCate) < 0) {
                this.cateNames.push(newCate);
            }

            this.addNewCate(goodsNum,newCate,productName,productNum);
            this.addNewCate(data,newCate,productName,goods);
            this.addNewCate(searchData,newCate,productName,goods);

            this.deleteCateNameAndProduct(oldCate,productName);

            this.setState({data})
        }
    }

    addNewCate(obj,key1,key2,value) {
        if(obj[key1]) {
            obj[key1][key2] = value;
        }else{
            obj[key1] = {};
            obj[key1][key2] = value;
        }
    }

    search(text) {
        this.searchValue = text;
        if(text != ''){
            let data = {};
            for(let cateName in this.searchData) {
                if(cateName.toLowerCase().search(text.toLowerCase()) != -1) { // 地区名
                    data[cateName] = this.searchData[cateName];
                }else{
                    for(let productName in this.searchData[cateName]) {
                        if(productName.toLowerCase().search(text.toLowerCase()) != -1) {  // 商品名
                            if(!data[cateName]) {
                                data[cateName] = {};
                            }
                            data[cateName][productName] = this.searchData[cateName][productName];
                        }
                    }
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

    render() {
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
                    dataSource={this.sectionListDs.cloneWithRowsAndSections(data)}
                    renderRow={this.renderGoodsRow}
                    renderSectionHeader={this.renderSectionHeader}
                    renderHeader={ _ =>
                        <SearchInput
                            label="搜分类或商品"
                            onChangeText={ t => this.search(t) }
                            ref={ e => this._searchInput = e }
                            viewStyle={ hasOrder ? styles.borderBottom : styles.noneBorderBottom}
                        />
                    }
                    renderSeparator={ _ => <View style={styles.line}/>}
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
    borderBottom: {
        borderColor: colors.LightGray,
        borderBottomWidth: 1 / PixelRatio.get(),
    },
    noneBorderBottom: {
        borderBottomWidth: 0,
    },
    section: {
        backgroundColor: colors.BackgroundGray,
        borderColor: colors.LightGray,
        // borderTopWidth: 1 / PixelRatio.get(),
        justifyContent: "center",
        padding: 8,
        paddingLeft: 15,
    },
    sectionText: {
        color: colors.LightBlack,
        fontSize: fonts.base,
        fontWeight: 'bold',
    },
    btnView:{
        flex:1,
        alignSelf:'stretch',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent'
    },
    line: {
        borderColor: lines.color,
        borderTopWidth: lines.smallest,
    },
    tip: {
        position:'absolute',
        top:0,left:0,right:0,bottom:0,
        justifyContent:'center',
        alignItems:'center'
    }
});