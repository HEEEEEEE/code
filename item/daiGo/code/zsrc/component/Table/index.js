/**
 * 表格
 * props:
 * dataBlob => array, 一维数组
 * borderWidth => number, 边框粗细 默认1/像素比
 * borderColor => string, 边框颜色 默认灰色
 * flex => array, 单元格占据空间
 * table_head_cols => obj, 表格头部单元格名字
 * table_col_names => obj, 按dataBlob[table_col_names[i]]渲染每行,本属性只用作显示数据
 * table_col_component => node, 返回的组件,用一个view包裹,渲染对应的子组件到每列中
 * renderHiddenRow => node, 返回的组件,左划或者右划显示的组件
 * disableLeftSwipe => bool, 能否左划
 * disableRightSwipe => bool, 能否右划
 * disableSwipe => bool, 能否划动
 * leftOpenValue => bool, 左侧打开的的距离 正数
 * rightOpenValue => number, 右侧打开的距离 负数
 * stopLeftSwipe => number, 左侧停止距离
 * stopRightSwipe => number, 右侧停止距离
 * headStyle => obj, 表格头部样式
 * headTextViewStyle => obj, 表格头部单元格样式
 * headTextStyle => obj 表格头部文字样式
 * rowStyle => obj, 每行样式
 * rowTextViewStyle => obj, 每行单元格样式
 * rowTextStyle => obj, 每行文字样式
 * ...props => listView所有props
 */
import React, { Component,PureComponent } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    ListView,
    PixelRatio,
    Platform
} from 'react-native';
import { SwipeListView,SwipeRow } from '../SwipeListView';
import { fonts } from '../../styles'

const removeClippedSubviews = Platform.OS == 'ios' ? false : true;

class TableHead extends PureComponent {
    shouldComponentUpdate() {
        return false;
    }
    render() {
        const { table_head_cols,headStyle,headTextViewStyle,headTextStyle,flex,borderWidth,borderColor } = this.props;
        return (
            <View>
                {this.props.children}
                <View style={[TableStyle.header,headStyle]}>
                    {
                        table_head_cols.map((item,i)=>{
                            return (
                                <View
                                    style={[
                                        TableStyle.text_View,
                                        i == 0 ? { borderLeftWidth: borderWidth } : '',
                                        headTextViewStyle,
                                        {
                                            flex: flex[i] ? flex[i] : 1,
                                            borderTopWidth: borderWidth, // borderWidth
                                            borderBottomWidth: borderWidth, // borderWidth
                                            borderRightWidth: borderWidth, // borderWidth
                                            borderColor: borderColor, // borderColor
                                        },
                                    ]}
                                    key={i}
                                >
                                    <Text style={[TableStyle.header_Text,headTextStyle]}>{item}</Text>
                                </View>
                            )
                        })
                    }
                </View>
            </View>
        )
    }
}
export default class Table extends PureComponent {
    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!==r2});
        this.state = {
            dataSource:ds,
        }
    }
    static defaultProps = {
        borderWidth: 1 / PixelRatio.get(),
        borderColor: '#999999',
        disableLeftSwipe: false,
        disableRightSwipe: false,
        disableSwipe: false,
    }
    _renderHeader = () => {
        const {
            headComponent,
            table_head_cols,
            headStyle,
            headTextViewStyle,
            headTextStyle,
            flex,
            borderWidth,
            borderColor
        } = this.props;
        return (
            <TableHead
                table_head_cols={table_head_cols}
                flex={flex}
                headStyle={headStyle}
                headTextViewStyle={headTextViewStyle}
                headTextStyle={headTextStyle}
                borderWidth={borderWidth}
                borderColor={borderColor}
            >
                {headComponent && headComponent()}
            </TableHead>
        )
    }
    _renderRow = (rowData, sectionID, rowID, rowMap) => {
        const {
            dataBlob,
            table_col_names,
            renderRow,
            flex,
            rowStyle,
            rowTextViewStyle,
            rowTextStyle,
            borderWidth,
            borderColor,
            table_col_component
        } = this.props;
        if(renderRow){ // 按照自定义的方法渲染每一行
            return renderRow(rowData, sectionID, rowID, dataBlob);
        }
        if(table_col_component){ // 渲染表格当前行每一列的组件
            var components = table_col_component(rowData,sectionID,rowID,rowMap,dataBlob);
            return (
                <View style={[ TableStyle.data_Row, borderWidth ? { marginTop: -borderWidth } : '', rowStyle ]}>
                    {
                        components.props.children.map( (item,i) => {
                            return (
                                <View style={[
                                        TableStyle.text_View,
                                        i == 0 ? { borderLeftWidth: borderWidth } : '',
                                        {
                                            flex: flex[i] ? flex[i] : 1,
                                            borderTopWidth: borderWidth, // borderWidth
                                            borderBottomWidth: borderWidth, // borderWidth
                                            borderRightWidth: borderWidth, // borderWidth
                                            borderColor: borderColor, // borderColor
                                        },
                                        rowTextViewStyle
                                    ]}>
                                    {item}
                                </View>
                            )
                        })
                    }
                </View>
            )
        }
        if(table_col_names){ // 返回rowData[table_col_names[i]] 只用作显示数据
            return (
                <View style={[ TableStyle.data_Row, borderWidth ? { marginTop: -borderWidth } : '', rowStyle ]}>
                    {
                        table_col_names.map((item,i) => {
                            return (
                                <View style={[
                                    TableStyle.text_View,
                                    i == 0 ? { borderLeftWidth: borderWidth } : '',
                                    {
                                        flex: flex[i] ? flex[i] : 1,
                                        borderTopWidth: borderWidth, // borderWidth
                                        borderBottomWidth: borderWidth, // borderWidth
                                        borderRightWidth: borderWidth, // borderWidth
                                        borderColor: borderColor, // borderColor
                                    },
                                    rowTextViewStyle
                                ]}>
                                    <Text style={[TableStyle.data_Text,rowTextStyle]}>
                                        {
                                            rowData[item]
                                        }
                                    </Text>
                                </View>
                            )
                        })
                    }
                </View>
            )
        }
    }
    _renderSwipeRow = (rowData, secId, rowId, rowMap) => {
        return (
            <SwipeRow
                leftOpenValue={this.props.leftOpenValue}
                rightOpenValue={this.props.rightOpenValue}
                disableLeftSwipe={this.props.disableLeftSwipe}
                disableRightSwipe={this.props.disableRightSwipe}
                stopLeftSwipe={this.props.stopLeftSwipe}
                stopRightSwipe={this.props.stopRightSwipe}
                disableSwipe={this.props.disableSwipe}
            >
                {this.props.renderHiddenRow(rowData,secId,rowId,rowMap)}
                {this._renderRow(rowData, secId, rowId)}
            </SwipeRow>
        )
    }
    closeRow() {
        this._swipeList && this._swipeList.safeCloseOpenRow();
    }
    scrollTo(obj) {
        this._swipeList && this._swipeList.scrollTo(obj);
        this._tableList && this._tableList.scrollTo(obj);
    }
    render(){
        const {
            dataBlob,
            borderWidth,
            borderColor,
            flex,
            table_head_cols,
            table_col_names,
            renderRow,
            renderHiddenRow,
            ...props
        } = this.props;
        if(renderHiddenRow){
            return (
                <SwipeListView
                    dataSource={this.state.dataSource.cloneWithRows(dataBlob)}
                    renderHeader={this._renderHeader}
                    renderRow={this._renderSwipeRow}
                    ref={ e => this._swipeList = e}
                    {...props}
                />
            )
        }else{
            return (
                <ListView
                    dataSource={this.state.dataSource.cloneWithRows(dataBlob)}
                    renderHeader={this._renderHeader}
                    renderRow={this._renderRow}
                    removeClippedSubviews={removeClippedSubviews}
                    ref={ e => this._tableList = e}
                    {...props}
                />
            )
        }
    }
}
const TableStyle = StyleSheet.create({
    header:{ // 表格头部
        flexDirection: 'row',
        backgroundColor: '#ffffff',
    },
    header_Text:{ // 头部文字
        color: '#000000',
        fontSize: fonts.h4,
    },
    text_View:{ // 每行单元格
        flex: 1,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    data_Text:{ // 文字
        fontSize: fonts.h5,
    },
    data_Row:{ // 数据行
        flexDirection: 'row',
        backgroundColor: '#ffffff',
    }
});