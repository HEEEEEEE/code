/**
 * 预购清单列表,收款发货列表下的表格
 * props:
 * data => obj, 数据
 * flex => array, 单元格占据空间
 * table_head_cols => array, 表格头部单元格名字
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
import Table from '../../../component/Table';
import { Btn } from '../../../component/Btn';
import { colors,fonts,tableStyle } from '../../../styles';

export default class PanelTable extends Component {
    constructor(props){
        super(props);
        this.length = this.props.data.length;
    }
    shouldComponentUpdate(nextProps) {
        return nextProps.data != this.props.data || nextProps.data.length != this.length;
    }
    componentDidUpdate() {
        this.length = this.props.data.length;
    }
    update() {
        this.forceUpdate();
    }

    // 渲染左划显示的详情,删除按钮
    renderTableHiddenRow = (rowData) => {
        return (
            <View style={{flex:1}}>
                <Btn title="详情"
                     style={styles.btn_details}
                     textStyle={styles.btn_text}
                     onPress={ _ => this.details(rowData) }
                />
                <Btn title="删除"
                     style={styles.btn_delete}
                     textStyle={styles.btn_text}
                     onPress={ _ => this.deleteTableRow(rowData) }
                />
            </View>
        )
    }

    // 跳转订单详情页面
    details(rowData) {
        this._table.closeRow();
        this.props.orderDetails && this.props.orderDetails(rowData);
    }

    // 删除表格数据
    deleteTableRow(rowData) {
        this._table.closeRow();
        this.props.deleteTableRow && this.props.deleteTableRow(rowData);
    }

    // 关闭当前打开的行
    closeRow() {
        this._table.closeRow();
    }

    render() {
        const { data,flex,table_head_cols,renderTableRow,setListScroll,deleteTableRow } = this.props;
        return (
            <Table
                dataBlob={data}
                flex={flex}
                table_head_cols={table_head_cols}
                table_col_component={renderTableRow}
                renderHiddenRow={this.renderTableHiddenRow}
                headStyle={tableStyle.header}
                headTextViewStyle={tableStyle.text_View}
                headTextStyle={tableStyle.header_Text}
                disableRightSwipe={true}
                rightOpenValue={-80}
                onRowMove={ _ => setListScroll && setListScroll(false)}
                onRowEnd={ _ => setListScroll && setListScroll(true)}
                scrollEnabled={false}
                ref={ e => this._table = e }
            />
        )
    }
}

const styles = StyleSheet.create({
    btn_delete:{
        position:'absolute',
        right:0,
        top:0,
        bottom:0,
        width:40,
        backgroundColor: colors.Red,
        alignItems: 'center',
        justifyContent:'center'
    },
    btn_details:{
        position:'absolute',
        right:40,
        top:0,
        bottom:0,
        width:40,
        backgroundColor: colors.DarkBlue,
        alignItems: 'center',
        justifyContent:'center'
    },
    btn_text:{
        color:'#ffffff',
        fontSize: fonts.base,
    },
});