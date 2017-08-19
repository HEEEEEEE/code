/**
 * App入口文件
 */
import React, { Component } from 'react';
import {
    View,
    Navigator,
    StatusBar,
    BackAndroid,
    ToastAndroid,
    Platform,
} from 'react-native';
import App from './app';
import codePush from 'react-native-code-push';

var _navigator;
export default class root extends Component {
    constructor(props){
        super(props);
        this.goBack = this.goBack.bind(this);
        BackAndroid.addEventListener('hardwareBackPress', this.goBack);
    }
    goBack() {
        let navigatorLength = _navigator.getCurrentRoutes().length;
        if (_navigator && navigatorLength > 1) {
            if(
                _navigator.state.routeStack[0].name == 'Login' &&
                _navigator.state.routeStack[navigatorLength-1].name == 'UserInfo'
            ){
                _navigator.popToTop();
                return true;
            }
            _navigator.pop();
            return true;
        }  else {
            if (this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now()) {
                return false;
            }
            this.lastBackPressed = Date.now();
            ToastAndroid.show('再按一次退出应用', ToastAndroid.SHORT);
            return true;
        }
    }
    onWillFocusAction = null;
    onDidFocusAction = null;

    // 导航切换之前调用
    onWillFocus = () => {
        this.onWillFocusAction && this.onWillFocusAction();
    }

    // 导航切换完成或初始化之后，调用此回调
    onDidFocus = () => {
        this.onDidFocusAction && this.onDidFocusAction();
    }
    render() {
        return (
            <View style={{flex:1}}>
                <StatusBar
                    animated={true}
                    translucent={true}
                    hidden={false}
                    backgroundColor='rgba(0,0,0,0)'
                />
                <Navigator
                    ref={ e => _navigator = e }
                    configureScene={(route, routeStack) => {
                        let configure = Navigator.SceneConfigs.PushFromRight;
                        if(route.type == 'bottom') {
                            configure =  Navigator.SceneConfigs.FloatFromBottom; // 底部弹出
                            return {
                                ...configure,
                                gestures:null//或者改成{}
                            }; // 底部;
                        }
                        return configure
                    }}
                    initialRoute={{name:'resetTo',component:App}}
                    renderScene={(route,navigator)=>{
                        let Component = route.component;
                        // 页面通过this.props.navigator.on***Focus(function / null) 来设置页面切换需要执行的回调
                        navigator.onWillFocus = (func) => {
                            this.onWillFocusAction = func;
                        }
                        navigator.onDidFocus = (func) => {
                            this.onDidFocusAction = func;
                        }
                        return <Component {...route.params} route={route} navigator={navigator} />;

                    }}
                    onDidFocus={this.onDidFocus}
                    onWillFocus={this.onWillFocus}
                />
            </View>
        )
    }
    componentDidMount(){
        codePush.sync({
            updateDialog: codePush.InstallMode.IMMEDIATE ? null : {
                appendReleaseDescription: true,
                descriptionPrefix:'\n更新内容：\n',
                title:'更新',
                mandatoryUpdateMessage:'',
                mandatoryContinueButtonLabel:'更新',
                optionalIgnoreButtonLabel:'取消',
                optionalInstallButtonLabel:'更新',
                optionalUpdateMessage:''
            },
            mandatoryInstallMode:codePush.InstallMode.IMMEDIATE,
            installMode:codePush.InstallMode.ON_NEXT_RESUME, // app切换到后台进行安装
            minimumBackgroundDuration: 5000, // app位于后台5秒重启完成更新
        });
    }
}