/**
 * 预购清单页面下的买家分类面板
 * props:
 * data => obj, 数据
 * deletePanel => function, 删除面板
 * addressOnPress => function, 地址信息
 * addOrderOnPress => function, 加单
 * renderTableRow => function, 渲染表格
 * deleteTableRow => function, 删除表格内单个订单
 * orderDetails => function, 跳转订单详情页面
 */
import React, { Component,PureComponent } from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/Ionicons';

import TogglePanel from '../../../component/TogglePanel';
import PanelTable from './PanelTable';
import { Btn } from '../../../component/Btn';

import { colors,fonts,btnStyle,tableStyle } from '../../../styles';

const renderTitle = (name,num) => {
    name = name.length > 14 ? name.substring(0,14) + '...' : name;
    return(
        <Text>
            <Text style={{fontSize:fonts.small,color:colors.Gray}}>买家：</Text>{name}
            <Text style={{fontSize:fonts.small,color:colors.Gray}}>  商品：</Text>{num+''}
        </Text>
    )
}

export default class CustomerTogglePanel extends Component { // 商品分类面板
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
                newData &&
                `${newData[0].nickname}${newData[0].cid}` != `${oldData[0].nickname}${oldData[0].cid}` ||
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
    close(){
        this._panel.close();
    }
    // 关闭表格内打开的行
    closeTableRow() {
        this._table.closeRow();
    }

    renderTableRow = (rowData,secId,rowId) => {
        rowData.updateCustomerPanel = () => {
            this.shouldUpdate = false;
            this.forceUpdate();
            this._table && this._table.update();
        }
        rowData.updatePanel = () => {
            rowData.updateCustomerPanel();
            rowData.updateGoodsPanel && rowData.updateGoodsPanel();
        }
        return (
            <View>
                <Btn title={rowData.product_name}
                     style={styles.btnView}
                     textStyle={tableStyle.date_Text}
                     onPress={() => this.props.goodsDetails && this.props.goodsDetails(rowData.product_id,rowData.product_name,rowData.room_id)}
                />
                <Btn title={rowData.quantity}
                     style={styles.btnView}
                     textStyle={tableStyle.date_Text}
                     onPress={() => this.props.setNum && this.props.setNum(rowData)}
                />
                <Btn title={rowData.remark}
                     style={styles.btnView}
                     textStyle={tableStyle.date_Text}
                     onPress={() => this.props.setRemark && this.props.setRemark(rowData)}
                />
            </View>
        )
    }
    render(){
        const { data,num,titleOnPress,deletePanel,addressOnPress,addOrderOnPress,renderTableRow,deleteTableRow,orderDetails,goodsNum, ...props } = this.props;
        this.dealNum();
        goodsNum[`${data[0].nickname}_${data[0].cid}`] = this.num;
        return (
            <TogglePanel
                title={renderTitle(data[0].nickname,this.num)}
                titleOnPress={titleOnPress}
                titleRightBtn={
                    <Icon.Button
                        name="map-marker"
                         size={25}
                         style={{width:30,padding:3,justifyContent:'center'}}
                         iconStyle={{marginRight:0}}
                         backgroundColor="transparent"
                         underlayColor="rgba(0,0,0,0.2)"
                         color={colors.DarkBlue}
                         onPress={addressOnPress}
                     />
                }
                footRightBtn={
                    <Btn style={[btnStyle.circle.btn,{backgroundColor:'transparent'}]} textStyle={btnStyle.circle.btn_text} onPress={addOrderOnPress}>
                        <Icons name="ios-add" color={colors.Red} size={35} />
                    </Btn>
                }
                deleteOnPress={deletePanel}
                onClose={ _ => this.closeTableRow()}
                {...props}
                ref={ e => this._panel = e }
            >
                <PanelTable
                    data={data}
                    flex={[5,2,5]}
                    table_head_cols={['商品','数量','备注']}
                    renderTableRow={this.renderTableRow}
                    deleteTableRow={deleteTableRow}
                    orderDetails={orderDetails}
                    ref={ e => this._table = e }
                    setListScroll={this.props.setListScroll}
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