/**
 * SwipeListView组件Demo
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ListView,
    TouchableOpacity,
} from 'react-native';
import { SwipeListView,SwipeRow } from './index';
import { Btn } from '../Btn';

export default class SwipeListDemo extends Component {

    constructor(props) {
        super(props);
        let data = Array(50).fill('').map((_,i) => {
            return {
                name: i,
                age: parseInt(Math.random()*100),
                sex: i % 2 == 0 ? '男' : '女'
            }
        });
        this.state = {
            data: data
        }
        this.ds = new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!==r2});
    }

    deleteRow(secID,rowId,rows){
        let { data } = this.state;
        rows[`${secID}${rowId}`].closeRow();
        data.splice(rowId,1);
        this.setState({data});
    }

    renderRow = (rowData, secID, rowID, rows) => {
        return (
            <SwipeRow underlayColor="#ffffff" activeOpacity={0.7} disableRightSwipe={true} rightOpenValue={-60}>
                <View style={{flex:1}}>
                    <TouchableOpacity style={[styles.btn,{backgroundColor:'blue',right:30}]}>
                        <Text style={styles.btnText}>编辑</Text>
                    </TouchableOpacity>
                    <Btn
                        title="删除"
                        style={[styles.btn,{right:0}]}
                        onPress={ _ => this.deleteRow(secID,rowID,rows)}
                    />
                </View>
                <View style={{backgroundColor:'#999999',borderBottomWidth:1,paddingTop:10,paddingBottom:10}}>
                    <Text style={styles.title}>
                        姓名：{rowData.name}
                    </Text>
                    <Text style={styles.title}>
                        年龄：{rowData.age}
                    </Text>
                    <Text style={styles.title}>
                        性别：{rowData.sex}
                    </Text>
                </View>
            </SwipeRow>
        )
    }

    render(){
        return (
            <View style={styles.container}>
                <Text>SwipeRow</Text>
                <SwipeRow style={{marginBottom:10}} leftOpenValue={30} stopLeftSwipe={30} rightOpenValue={-60}>
                    <View style={{flex:1}}>
                        <TouchableOpacity style={[styles.btn,{left:0}]}>
                            <Text style={styles.btnText}>添加</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.btn,{backgroundColor:'blue',right:30}]}>
                            <Text style={styles.btnText}>编辑</Text>
                        </TouchableOpacity>
                        <Btn
                            title="删除"
                            style={[styles.btn,{right:0}]}
                            onPress={ _ => alert('删除')}
                        />
                    </View>
                    <View style={{backgroundColor:'#999999',borderBottomWidth:1,paddingTop:10,paddingBottom:10}}>
                        <Text style={{textAlign:'center',fontSize:20}}>啦啦啦</Text>
                    </View>
                </SwipeRow>

                <Text>SwipeListView</Text>
                <SwipeListView
                    dataSource={this.ds.cloneWithRows(this.state.data)}
                    renderRow={this.renderRow}
                    onRowPress={ rowData => alert(JSON.stringify(rowData))}
                    onRowOpen={ (rowData,secId,rowId,rows) => console.log(`第${rowId}行打开`)}
                    onRowDidOpen={ (rowData,secId,rowId,rows) => console.log(`第${rowId}行打开完毕`)}
                    onRowClose={ (rowData,secId,rowId,rows) => console.log(`第${rowId}行关闭`)}
                    onRowDidClose={ (rowData,secId,rowId,rows) => console.log(`第${rowId}行关闭完成`)}
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
    btn: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        width: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red'
    },
    btnText: {
        color: '#ffffff'
    },
    title: {
        textAlign:'center',
        fontSize:15,
    }
}