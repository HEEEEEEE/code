/**
 * 侧边栏
 * */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    ScrollView,
    StatusBar,
    Image,
    TouchableOpacity,
    Platform,
    DeviceEventEmitter
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import BillSystem from '../../pages/BillSystem'; // 帐单系统
import GoodsLibrary from '../../pages/GoodsLibrary'; // 商品库
import Customer from '../../pages/Customer'; // 客户
import Set from '../../pages/Set';
import UserInfo from '../login/UserInfo';
import httpService from '../../service/httpService';
import { Btn } from '../../component/Btn';
import { colors,fonts,lines } from '../../styles'

import util from '../../service/utilService';

const iconSize = 18;
const iconColor = colors.Gray;

export default class SideBar extends Component{
    constructor(props) {
        super(props);
        this.state = {
            nickname: '',
            sex: 1,
            province: '广东',
            city: '深圳',
            tel: ''
        }
    }
    getData = () => {
        httpService.getUserInformation().then((response) => {
            if(response.ok) {
                let data = JSON.parse(response._bodyInit).data;
                util.saveStorage('userInfo',data);
                this.setState({
                    nickname: data.nickname || '无名大侠',
                    sex: data.sex == null ? 1 : data.sex,
                    province: data.province || '广东',
                    city: data.city || '深圳',
                    tel:data.tel || ''
                })
            }
        },(error)=>{
            util.getStorage('userInfo').then( data => {
                if(data) {
                    this.setState({
                        nickname: data.nickname || '无名大侠',
                        sex: data.sex == null ? 1 : data.sex,
                        province: data.province || '广东',
                        city: data.city || '深圳',
                        tel:data.tel || ''
                    })
                }
            })
        })
    }
    componentDidMount() {
        this.getData();
        this.subscription = DeviceEventEmitter.addListener('getUserInfo',this.getData);
    }
    componentWillUnmount() {
        // 移除
        this.subscription.remove();
    }
    _navigate(name,component,params){
        this.props.jumpPage && this.props.jumpPage();
        this.props.navigator.push({
            name:name,
            component:component,
            params:params
        })
    }
    render(){
        let userInfo = {
            ...this.state,
            callback: data => {
                data.sex = data.sex == '男' ? 1 : 0;
                this.setState({...data})
            }
        }
        return (
            <View style={styles.container}>
                <View style={styles.userView}>
                    <View style={styles.user}>
                        <Btn onPress={()=>this._navigate('UserInfo',UserInfo,userInfo)}>
                            <Image source={require('../../assets/img/user.jpg')} style={styles.userImg}/>
                        </Btn>
                        <View style={{flex:1,justifyContent:'center',alignItems:'center',height:60}}>
                            <Text style={styles.userName} numberOfLines={2}>
                                {this.state.nickname}
                            </Text>
                            <View style={{justifyContent:'center',alignItems:'center',flexDirection:'row',marginTop:5}}>
                                <Text style={[styles.userName,{color:'#919191',marginLeft:5}]}>
                                    <Text style={{fontSize:fonts.base}}>代代号：</Text>
                                    {DAIGO_ID}
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
                <ScrollView style={styles.container}>
                    <View style={styles.listView}>
                        <TouchableOpacity
                            onPress={this.props.billSystemOnPress}
                            style={styles.list}
                        >
                            <Icon name="book" color={iconColor} size={iconSize} style={styles.iconView}/>
                            <Text style={styles.listText}>
                                帐单系统
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={()=>this._navigate('GoodsLibrary',GoodsLibrary)}
                            style={styles.list}
                        >
                            <Icon name="cubes" color={iconColor} size={iconSize} style={styles.iconView}/>
                            <Text style={styles.listText}>
                                商品库
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={()=>this._navigate('Customer',Customer)}
                            style={styles.list}
                        >
                            <Icon name="users" color={iconColor} size={iconSize} style={styles.iconView}/>
                            <Text style={styles.listText}>
                                客户
                            </Text>
                        </TouchableOpacity>

                        <Text style={styles.tipText}>
                            工具/tools
                        </Text>
                        <TouchableOpacity
                            onPress={()=>util.showToast('正在开发中,敬请期待')}
                            style={styles.list}
                        >
                            <Icon name="list-alt" color={iconColor} size={iconSize} style={styles.iconView}/>
                            <Text style={styles.listText}>
                                导出excle
                            </Text>
                        </TouchableOpacity>

                        <Text style={styles.tipText}>
                            其他/others
                        </Text>
                        <TouchableOpacity
                            onPress={()=>this._navigate('Set',Set,{data:this.state})}
                            style={styles.list}
                        >
                            <Icon name="cog" color={iconColor} size={iconSize} style={styles.iconView}/>
                            <Text style={styles.listText}>
                                设置
                            </Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#ffffff',
    },
    userView:{
        paddingTop: Platform.OS == 'ios' ? 20+20 : StatusBar.currentHeight+20,
        paddingLeft:20,
        paddingRight:20,
        marginBottom:10,
    },
    user:{
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth:lines.smallest,
        borderColor:lines.color,
        height:155
        // paddingBottom: 20,
    },
    userName:{
        // marginTop:5,
        fontSize: fonts.h3,
        color: '#000000'
    },
    userImg:{
        width: 90,
        height: 90,
        borderRadius :45,
        alignSelf: 'center'
    },
    iconImg: {
        width:18,
        height:18,
        borderRadius:5
    },
    listView:{
        justifyContent: 'center',
    },
    list:{
        height: 50,
        flexDirection:'row',
        alignItems:'center',
        paddingLeft: 25,
    },
    iconView:{
        width:40,
    },
    listText:{
        fontSize: fonts.h3,
        color: '#333333'
    },
    tipText:{
        fontSize: fonts.small,
        color: colors.Gray,
        paddingLeft: 25,
        marginTop: 15,
    }
});