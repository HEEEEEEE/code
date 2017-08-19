/**
 * 预购清单页面下的商品分类面板
 * props:
 * data => obj, 数据
 * titleOnPress => function, 点击标题
 * buyAllOnPress => function, 全部买到
 * addOrderOnPress => function, 加单
 * deletePanel => function, 删除面板
 * deleteTableRow => function, 删除表格内单个订单
 * shiftOnPress => function, 切换分类
 * renderTableRow => function, 渲染表格
 * orderDetails => function, 跳转订单详情页面
 */
import React, { Component,PureComponent } from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import TogglePanel from '../../../component/TogglePanel';
import PanelTable from './PanelTable';
import { Btn,BtnAnnular } from '../../../component/Btn';

import { colors,fonts,btnStyle,tableStyle } from '../../../styles';

const renderTitle = (name,num) => {
    name = name.length > 14 ? name.substring(0,14) + '...' : name;
    return(
        <Text>
            <Text style={{fontSize:fonts.small,color:colors.Gray}}>商品：</Text>{name} x {num+''}
        </Text>
    )
}

export default class GoodsTogglePanel extends Component { // 商品分类面板
    constructor(props) {
        super(props);
        this.num = props.num;
        this.shouldUpdate = true;
    }
    dealNum() {
        let { data } = this.props;
        if(this.shouldUpdate){
            this.num = this.props.num;
        }else{
            let num = 0;
            data.map( item => {
                num += item.quantity;
            })
            this.num = num;
        }
    }
    shouldComponentUpdate(nextProps) {
        let newData = nextProps.data,
            oldData = this.props.data;
        if(newData != oldData) {
            this.shouldUpdate = true;
            return true;
        }else{
            if(
                `${newData[0].product_name}${newData[0].product_id}` != `${oldData[0].product_name}${oldData[0].product_id}` ||
                nextProps.num != this.num
            ){
                this.shouldUpdate = true;
                return true;
            }
            return false;
        }
    }
    componentDidUpdate() {
        this.shouldUpdate = false;
    }
    // 面板左划关闭
    closeRow() {
        this._panel.closeRow();
        this._table.closeRow();
    }
    // 关闭面板
    close() {
        this._panel.close();
    }
    // 关闭表格内打开的行
    closeTableRow() {
        this._table.closeRow();
    }

    renderTableRow = (rowData,secId,rowId) => {
        rowData.updateGoodsPanel = () => {
            this.shouldUpdate = false;
            this.forceUpdate();
            this._table && this._table.update();
        }
        rowData.updatePanel = function() {
            rowData.updateGoodsPanel && rowData.updateGoodsPanel();
            rowData.updateCustomerPanel && rowData.updateCustomerPanel();
        }
        return (
            <View>
                <Btn
                    title={rowData.nickname}
                    style={styles.btnView}
                    textStyle={tableStyle.date_Text}
                    onPress={() => this.props.customerDetails && this.props.customerDetails(rowData.cid,rowData.nickname)}
                />
                <Btn
                    title={rowData.quantity}
                    style={styles.btnView}
                    textStyle={tableStyle.date_Text}
                    onPress={() => this.props.setNum && this.props.setNum(rowData)}
                />
                <Btn
                    title={rowData.remark}
                    style={styles.btnView}
                    textStyle={tableStyle.date_Text}
                    onPress={() => this.props.setRemark && this.props.setRemark(rowData)}
                />
                <BtnAnnular
                    btnViewStyle={styles.btnView}
                    onPress={() => this.props.bought && this.props.bought(rowData)}
                />
            </View>
        )
    }
    render() {
        const { data,num,titleOnPress,deletePanel,buyAllOnPress,shiftOnPress,addOrderOnPress,renderTableRow,deleteTableRow,orderDetails,goodsNum, ...props } = this.props;
        this.dealNum();
        goodsNum[data[0].cate_name][`${data[0].product_name}_${data[0].product_id}`] = this.num;
        return (
            <TogglePanel
                style={{borderTopWidth:0}}
                title={renderTitle(data[0].product_name,this.num)}
                titleOnPress={titleOnPress}
                titleRightBtn={
                    <Btn style={btnStyle.circle.btn} textStyle={btnStyle.circle.btn_text} title="买到" onPress={buyAllOnPress}/>
                }
                footLeftBtn={
                    <Btn onPress={shiftOnPress}><Icon name="ios-repeat" size={28}/></Btn>
                }
                footRightBtn={
                    <Btn style={[btnStyle.circle.btn,{backgroundColor:'transparent'}]} textStyle={btnStyle.circle.btn_text} onPress={addOrderOnPress}>
                        <Icon name="ios-add" color={colors.Red} size={35} />
                    </Btn>
                }
                deleteOnPress={deletePanel}
                onClose={ _ => this.closeTableRow()}
                {...props}
                ref={ e => this._panel = e }
            >
                <PanelTable
                    data={data}
                    flex={[7,2,5,2]}
                    table_head_cols={["买家","数量","备注","买到"]}
                    renderTableRow={this.renderTableRow}
                    deleteTableRow={deleteTableRow}
                    orderDetails={orderDetails}
                    setListScroll={this.props.setListScroll}
                    ref={ e => this._table = e }
                />
            </TogglePanel>
        )
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
});