/*客户列表模块
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
    Alert,
    Dimensions,
    InteractionManager,
} from 'react-native';

import colors from '../../../styles/colors';
import fonts from '../../../styles/fonts';

import utilService from '../../../service/utilService';
import httpService from '../../../service/httpService';

import { Btn } from '../../../component/Btn';

import Search from './Search';
import List from './List';


const echoDefaultNum = 25;

export default class CustomerList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource:null,//数据源
                dataSourceLess:0,

            dataFilter:[],//被过滤后的数据源
                search:'',//搜索数据
                isSearch:false,
        };
    }

    getData(num) {
        let { dataSource } = this.state;
        if(dataSource == null){
            dataSource = [];
        }
        let dataWannaL = dataSource.length + num;
        //alert('ok');
        httpService.getCustomerList(dataWannaL).then((response)=>{
            let dataReturn = JSON.parse(response._bodyInit).data;
            //alert(JSON.stringify(dataReturn));
            let dataLess = dataReturn.length - dataSource.length;
            // InteractionManager.runAfterInteractions( _ => {
            setTimeout( _ => {
                this.setState({
                    dataSource: dataReturn,
                    dataSourceLess: dataLess,
                    dataFilter: dataReturn,
                })
            },400)
            // });
        });
    }
    componentDidMount(){
        setTimeout(()=>{
            this.getData(25);
        },0)
    }

    //当用户改变搜索框内容时
    handleChange(searchData){
        httpService.getSearchUser(searchData).then((response)=>{
            let { dataSource } = this.state;
            let FData = JSON.parse(response._bodyInit).data;
            //alert(JSON.stringify(FData));
            this.setState({
                dataFilter:searchData.length <= 0?(dataSource):(FData),
                search:searchData,
                isSearch:searchData.length <= 0?(false):(true),
            });
        });
    }

    alertPrompt(content,callback){
        Alert.alert(
            '提示',
            content,
            [
                {text:'取消'},
                {
                    text:'确认',
                    onPress:callback
                }
            ]
        )
    }
    //当用户删除列表数据后
    handleDelete(key, keyName, rowData){
        httpService.deleteCustomer(key).then((response)=>{
            let dataReturn = JSON.parse(response._bodyInit);
            if(response.ok) {
                if(dataReturn.flag) {
                    utilService.showToast(dataReturn.msg);
                    this.deleteRow(key,keyName,rowData)
                }else{
                    utilService.showToast(dataReturn.msg,5000);
                }
            }
        });
    }

    deleteRow(key,keyName,rowData){
        let { dataSource, dataFilter } = this.state;
        for(var i = 0; i < dataSource.length; i++ ){
            if(dataSource[i][keyName] == key){
                dataSource.splice(i,1);
                i--;
            }
        }
        for(var i = 0; i < dataFilter.length; i++ ){
            if(dataFilter[i][keyName] == key){
                dataFilter.splice(i,1);
                i--;
            }
        }
        this.setState({
            dataSource,dataFilter
        })
    }

    //当用户更改用户名称
    refreshData(DSource, DFilter){
        this.setState({
            dataSource:DSource,
            dataFilter:DFilter,
        })
    }

    //滚动加载更多数据
    onScroll() {
        //alert('ok');
        let { dataSourceLess, isSearch } = this.state;
        if(dataSourceLess > 0 && isSearch != true){
            this.getData(12);
        }
    }

    // 所有列表滚回顶部
    scrollToTop() {
        this._customerList && this._customerList.scrollTo({y: 0, animated: true});
    }

    render(){
        let { dataSource, dataSourceLess, dataFilter, isSearch } = this.state;

        if( dataSource == null ){
            return (
                <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
                    <Text style={{fontSize:fonts.h3}}>正在加载中···</Text>
                </View>
            )
        }
        return (
            <View style={styles.container}>
                <View style={{flex:1}}>
                    <List
                        dataSource={dataSource}
                        dataFilter={dataFilter}
                        handleDelete={ ( DSource, DFilter, id ) => this.alertPrompt('确认删除?', _ => this.handleDelete( DSource, DFilter, id )) }
                        refreshData={ ( DSource, DFilter ) => this.handleDelete( DSource, DFilter) }
                        navigator={this.props.navigator}
                        renderHeader={ _ =>
                            <Search
                                handleChange={this.handleChange.bind(this)}
                            />
                        }
                        onEndReached={this.onScroll.bind(this)}
                        onEndReachedThreshold={(Dimensions.get('window').height)*(1/2)}
                        ref={ e => this._customerList = e }
                    />
                    {
                        dataSource.length <= 0?(
                                <View style={styles.noContainer}>
                                    <Text style={styles.noFirst}>?</Text>
                                    <Text style={styles.noSecond}>客户没了吗</Text>
                                    <Text style={styles.noThird}>到外星球讹几个去</Text>
                                </View>
                        ):dataFilter.length == 0?(
                            <View style={styles.noContainer}>
                                <Text style={styles.noFirst}>!</Text>
                                <Text style={styles.noSecond}>客户跑外星球去了</Text>
                            </View>
                        ):null
                    }
                </View>
            </View>
        )
    }

    //对数据源进行过滤
    filterData(data, search){
        let d = [];
        if(search == null){
            data.map((i)=>{
                    d.push(i);
            });
        }else{
            data.map((i)=>{
                let s = new RegExp(search,"i");
                let text =s.test(i.nickname);
                if(text == true){
                    d.push(i);
                }
            });
        }
        return d;
    }
}



const styles = StyleSheet.create({
    container:{
        flex:1,
    },

    noContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    noFirst: {
        fontSize: fonts.h1,
        textAlign: 'center',
        color: 'rgba(255,0,0,1)',
        marginBottom: 5,
    },
    noSecond: {
        fontSize: fonts.h3,
        textAlign: 'center',
        color: 'rgba(125,50,0,0.5)',
        marginBottom: 12,
    },
    noThird: {
        fontSize: fonts.h5,
        textAlign: 'center',
        color: 'rgba(50,25,0,0.25)',
        marginBottom: 25,
    },
})
