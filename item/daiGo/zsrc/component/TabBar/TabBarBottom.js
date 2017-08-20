/**
 * 底部tab切换栏
 * android端,键盘弹出底部tab栏隐藏
 * 和ScrollableTabView配合使用
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Keyboard,
    PixelRatio,
    Platform
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { colors,fonts } from '../../styles';

export default class TabBarBottom extends Component{
    static propTypes = {
        goToPage: React.PropTypes.func, // 跳转到对应tab的方法
        activeTab: React.PropTypes.number, // 当前被选中的tab下标
        tabs: React.PropTypes.array, // 所有tabs集合

        tabNames: React.PropTypes.array, // tab名称
        tabIconNames: React.PropTypes.array, // tab图标
        tabStyle: React.PropTypes.object, // tab栏样式
        height: React.PropTypes.number, // tab栏高度

        iconSize: React.PropTypes.number, // tab图标大小
        color: React.PropTypes.string, // tab图标文字颜色
        chooseBgColor: React.PropTypes.string, // tab选中背景色
        chooseColor: React.PropTypes.string, // tab选中图标文字颜色
        textStyle: React.PropTypes.object, // tab文字样式

        keyboardDidShow: React.PropTypes.func, // 键盘弹出回调函数
        keyboardDidHide: React.PropTypes.func, // 键盘隐藏回调函数
    };
    static defaultProps = {
        height: 40, // tab栏默认高度
        iconSize: 20, // 图标默认大小
        color: '#000000', // 默认图标字体颜色
        chooseBgColor: colors.DarkBlue, // 默认选中背景色
        chooseColor: '#ffffff' // 默认选中图标字体颜色
    };
    componentWillMount () {
        if (Platform.OS === 'android') {
            this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow.bind(this));
            this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide.bind(this));
        }
    }
    componentWillUnmount () {
        if (Platform.OS === 'android') {
            this.keyboardDidShowListener.remove();
            this.keyboardDidHideListener.remove();
        }
    }
    _keyboardDidShow () { // 键盘弹出隐藏
        this.refs.tabBar.setNativeProps({
            style: {
                height: 0,
                opacity: 0
            }
        })
        this.props.keyboardDidShow && this.props.keyboardDidShow();
    }
    _keyboardDidHide () { // 键盘收回显示
        this.refs.tabBar.setNativeProps({
            style: {
                height: this.props.height,
                opacity: 1
            }
        })
        this.props.keyboardDidHide && this.props.keyboardDidHide();
    }
    tabOnPress(i) {
        const { activeTab,goToPage,activeTabOnPress } = this.props;
        if(activeTab == i) {
            activeTabOnPress && activeTabOnPress(i);
        }
        goToPage(i);
    }
    renderTabOption(tab, i) {
        const { tabIconNames,iconSize,color,chooseBgColor,chooseColor,textStyle,activeTab } = this.props;
        let colors;
        if( activeTab == i){
            colors = chooseColor;
        }else{
            colors = color;
        }
        return (
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => this.tabOnPress(i)}
                style={[styles.tab,activeTab == i?{backgroundColor:chooseBgColor}:'']}
                key={i}
            >
                <View style={styles.tabItem}>
                    {
                        tabIconNames?<Icon name={tabIconNames[i]} color={colors} size={iconSize}/>:null
                    }
                    <Text style={[styles.tabText,textStyle,{color:colors}]}>
                        {this.props.tabNames[i]}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    }
    render() {
        let { height,tabStyle } = this.props;
        return (
            <View ref="tabBar" style={[styles.tabs,tabStyle,{height:height}]}>
                {this.props.tabs.map((tab,i) => this.renderTabOption(tab,i) )}
            </View>
        )
    }
}
const styles = StyleSheet.create({
    tabs:{
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        borderTopWidth: 1 / PixelRatio.get(),
        borderColor: colors.LightGray,
    },
    tab:{
        flex: 1,
    },
    tabItem:{
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    tabText:{
        fontSize: fonts.h4,
        textAlign:"center"
    },
});