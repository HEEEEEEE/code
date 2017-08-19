/**
 * Table组件Demo
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ScrollView,
    TextInput,
} from 'react-native';
import Table from './index';
import { Btn } from '../Btn';

export default class TableDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    name: '陈昆',
                    age: 21,
                    sex: '嗯哼'
                },
                {
                    name: '曹钦杰',
                    age: 26,
                    sex: '不详',
                },
                {
                    name: '蒋雪峰',
                    age: 26,
                    sex: '不详',
                },
                {
                    name:'仕成',
                    age: 23,
                    sex: '男'
                },
            ]
        }
    }

    deleteTableRow(rowData,rowID){
        let { data } = this.state;
        data.splice(rowID,1);
        this.setState({
            data:data
        })
    }

    // 必须用一个View包裹,对应的第i个子节点放在对应的列上
    tableColComponent = (rowData,secId,rowId) => {
        return (
            <View>
                <Btn
                    title={rowData.name}
                    style={styles.btnView}
                    textStyle={{color:'#ffffff'}}
                    onPress={ _ => alert(rowData.name)}
                />
                <Text style={{color:'#ffffff'}} onPress={ _ => alert(JSON.stringify(rowData))}>
                    {rowData.age}
                </Text>
                <Btn
                    title={rowData.sex}
                    style={styles.btnView}
                    textStyle={{color:'#ffffff'}}
                    onPress={ _ => this.deleteTableRow(rowData,rowId)}
                />
            </View>
        )
    }

    render(){
        return (
            <View style={styles.container}>
                <ScrollView>
                    <Text>只显示数据，默认样式的表格</Text>
                    <Table
                        dataBlob={this.state.data} // 数据源
                        flex={[1,1,1]} // 单元格占据空间
                        table_head_cols={["姓名","年龄","性别"]} // 表格head单元格text
                        table_col_names={['name','age','sex']} // 表格dataBlob每个对象的key
                    />
                    <Text>只显示数据，自定义样式的表格</Text>
                    <Table
                        dataBlob={this.state.data} // 数据源
                        flex={[1,1,1]} // 单元格占据空间
                        table_head_cols={["姓名","年龄","性别"]} // 表格head单元格text
                        table_col_names={['name','age','sex']} // 表格dataBlob每个对象的key
                        borderWidth={2} // 边框粗细
                        borderColor="#ff0000" // 边框颜色
                        headStyle={{backgroundColor: 'black'}} // 头部样式
                        headTextViewStyle={{height:30}} // 头部单元格样式
                        headTextStyle={{color:'#ff0000'}} // 头部文字样式
                        rowStyle={{backgroundColor:'blue'}} // 每一行样式
                        rowTextViewStyle={{height:25}} // 每行单元格样式
                        rowTextStyle={{color:'#ffffff'}} // 每行文字样式
                    />
                    <Text>如果每行每列需要有交互操作,比如点击事件,定义table_col_component,传入组件</Text>
                    <Table
                        dataBlob={this.state.data} // 数据源
                        flex={[1,1,1]} // 单元格占据空间
                        table_head_cols={["姓名","年龄","性别"]} // 表格head单元格text
                        borderColor="#ffffff" // 边框颜色
                        headStyle={{backgroundColor: 'gray'}} // 头部样式
                        headTextViewStyle={{height:30}} // 头部单元格样式
                        headTextStyle={{color:'yellow'}} // 头部文字样式
                        rowStyle={{backgroundColor:'green'}} // 每一行样式
                        rowTextViewStyle={{height:25}} // 每行单元格样式
                        table_col_component={this.tableColComponent} // 每行对应的组件
                    />
                    <Text>如果每行需要划动显示按钮,定义renderHiddenRow</Text>
                    <Table
                        dataBlob={this.state.data} // 数据源
                        flex={[1,1,1]} // 单元格占据空间
                        table_head_cols={["姓名","年龄","性别"]} // 表格head单元格text
                        borderColor="#ffffff" // 边框颜色
                        headStyle={{backgroundColor: 'gray'}} // 头部样式
                        headTextViewStyle={{height:30}} // 头部单元格样式
                        headTextStyle={{color:'yellow'}} // 头部文字样式
                        rowStyle={{backgroundColor:'green'}} // 每一行样式
                        rowTextViewStyle={{height:25}} // 每行单元格样式
                        table_col_component={this.tableColComponent} // 每行对应的组件
                        renderHiddenRow={this._renderHiddenRow} // 滑动显示的菜单
                        disableRightSwipe={true} // 禁止右划
                        rightOpenValue={-30} // 右侧打开距离
                    />
                    <Text>需要在head加入自定义组件,传入headComponent</Text>
                    <Table
                        dataBlob={this.state.data} // 数据源
                        flex={[1,1,1]} // 单元格占据空间
                        table_head_cols={["姓名","年龄","性别"]} // 表格head单元格text
                        headComponent={ _ =>
                            <View>
                                <TextInput
                                    style={styles.textInput}
                                    underlineColorAndroid='transparent'
                                    placeholder="搜索"
                                />
                            </View>
                        }
                        borderColor="#ffffff" // 边框颜色
                        headStyle={{backgroundColor: 'gray'}} // 头部样式
                        headTextViewStyle={{height:30}} // 头部单元格样式
                        headTextStyle={{color:'yellow'}} // 头部文字样式
                        rowStyle={{backgroundColor:'green'}} // 每一行样式
                        rowTextViewStyle={{height:25}} // 每行单元格样式
                        table_col_component={this.tableColComponent} // 每行对应的组件
                        renderHiddenRow={this._renderHiddenRow} // 滑动显示的菜单
                        disableRightSwipe={true} // 禁止右划
                        rightOpenValue={-30} // 右侧打开距离
                    />
                </ScrollView>
            </View>
        )
    }

    _renderHiddenRow = (rowData,secId,rowId,rowMap) => {
        return (
            <View style={{flex:1}}>
                <Btn title="删除"
                     style={{position:'absolute',top:0,bottom:0,right:0,backgroundColor:'red',width:30}}
                     titleStyle={{fontSize:15}}
                     onPress={() => {
                         rowMap[`${secId}${rowId}`].closeRow(); // 先关闭本行
                         this.deleteTableRow(rowData,rowId);  // 删除
                     }}
                />
            </View>
        )
    }

}

const styles = {
    container: {
        flex: 1,
        paddingTop: 50,
    },
    btnView: {
        flex:1,
        alignSelf:'stretch',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent'
    },
    textInput: {
        height:30,
        padding:0,
        margin:5,
        textAlign: 'center',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#a0a0a0',
    }
}