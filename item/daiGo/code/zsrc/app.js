/**
 * 跳转首屏页面
 */
import React, { Component } from 'react';
import {
    View,
    StatusBar,
    BackAndroid,
    Platform,
    Animated,
    NetInfo,
    DeviceEventEmitter,
    Image
} from 'react-native';
import Login from './pages/Login';
import BillSystem from './pages/BillSystem';
import util from './service/utilService';
import httpService from './service/httpService';

// 无网络进程序，添加网络变化的监听
function loginAndGetData(isConnected,navigator) {
    // 有网络
    if(isConnected) {
        // 获取本地存储的账号，密码
        util.getStorage(['username','pwd','login','daigoId']).then( obj => {
            let username = obj[0][1], // 获取本地存储的账号
                pwd = obj[1][1], // 获取本地存储的密码
                login = obj[2][1], // 是否自动登录
                daigoId = obj[3][1]; // 代购id
            // 调用登录借口
            httpService.login(username,pwd).then((response)=>{
                if(response.ok) {
                    if(response.url.indexOf("lerr=1") > -1){
                        util.showToast('用户名密码不匹配,请重新登录');
                        util.deleteStorage(['login','daigoId','buyList','payAndSendGoodList','exchangeRateList','userInfo']);
                        navigator.replacePrevious({
                            name:"Login",
                            component:Login,
                            params:{
                                username:username,
                                pwd:pwd
                            }
                        })
                        navigator.pop();
                        // 密码错误,跳转登录页面并移除监听
                        NetInfo.isConnected.removeEventListener('change',loginAndGetData);
                    }
                    if(response._bodyText.indexOf("live-room") > -1){
                        // 登录成功后保存信息，并重新获取数据
                        let matchers = response._bodyText.match(/room_id=(.*?)#billSystem/);
                        global.DAIGO_ID = matchers && matchers[1];
                        util.saveStorage([['username',username],['pwd',pwd],['login','1'],['daigoId',matchers[1]]]);
                        getData()
                    }
                }
            })
        })
    }
}
function getData() {
    // 有网络，获取预购清单列表
    DeviceEventEmitter.emit('addToBuyList');
    // 获取收款发货列表
    DeviceEventEmitter.emit('addToPayAndSend');
    // 获取用户信息
    DeviceEventEmitter.emit('getUserInfo');
    // 获取汇率列表
    DeviceEventEmitter.emit('getExchangeRateList');
    // 移除网络变化监听
    NetInfo.isConnected.removeEventListener('change',loginAndGetData);
}

export default class App extends Component {
    constructor(props){
        super(props);
        util.getStorage(['username','pwd','login','daigoId']).then( (obj) => {
            let username = obj[0][1], // 获取本地存储的账号
                pwd = obj[1][1], // 获取本地存储的密码
                login = obj[2][1], // 是否自动登录
                daigoId = obj[3][1]; // 代购id
            if(username && pwd && login && daigoId) {
                httpService.login(username,pwd).then((response)=>{
                    if(response.ok) {
                        if(response.url.indexOf("lerr=1") > -1){
                            util.showToast('用户名密码不匹配,请重新登录');
                            util.deleteStorage(['login','daigoId','buyList','payAndSendGoodList','exchangeRateList','userInfo']);
                            this.jumpToLogin(username,pwd)
                        }else if(response._bodyText.indexOf("live-room") > -1){
                            // 登录成功后保存信息
                            let matchers = response._bodyText.match(/room_id=(.*?)#billSystem/);
                            global.DAIGO_ID = matchers && matchers[1];
                            this.jumpToBillSystem();
                        }
                    }else{
                        this.jumpToLogin(username,pwd)
                    }
                },(error)=>{
                    global.DAIGO_ID = daigoId;
                    // 无网络进程序，添加网络变化的监听
                    NetInfo.isConnected.addEventListener('change', (isConnected) => loginAndGetData(isConnected,this.props.navigator));
                    this.jumpToBillSystem();
                })
            }else{
                this.jumpToLogin(username,pwd)
            }
        })
    }
    jumpToLogin(username,pwd) {
        this.props.navigator.resetTo({ // 跳转到登录页面
            name:'Login',
            component:Login,
            params:{
                username:username,
                pwd:pwd
            }
        })
    }
    jumpToBillSystem() {
        this.props.navigator.resetTo({ // 跳转到账单页面
            name:'BillSystem',
            component:BillSystem
        })
    }
    render() {
        return (
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Image source={require('./assets/img/loading.gif')}/>
            </View>
        )
    }
}