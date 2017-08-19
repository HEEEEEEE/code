/**
 * 头部tab切换栏
 * 和ScrollableTabView配合使用
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableHighlight,
    TouchableOpacity,
    InteractionManager,
    PixelRatio
} from 'react-native';
import { colors,fonts } from '../../styles';

export default class TabBarTop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tabTips: this.props.tabTips || []
        }
    }
    static propTypes = {
        goToPage: React.PropTypes.func, // 跳转到对应tab的方法
        activeTab: React.PropTypes.number, // 当前被选中的tab下标
        tabs: React.PropTypes.array, // 所有tabs集合

        tabNames: React.PropTypes.array, // tab名称
        tabTips: React.PropTypes.array, // tab提示
        tabStyle: React.PropTypes.object, // tab栏样式

        chooseBgColor: React.PropTypes.string, // tab选中背景色
        textStyle: React.PropTypes.object, // tab文字样式
        chooseTextStyle: React.PropTypes.object, // tab选中文字样式
    };
    static defaultProps = {
        chooseBgColor: colors.DarkBlue, // 默认选中背景色
    };
    setTabTips(value,i) {
        let { tabTips } = this.state;
        tabTips[i] = value;
        this.setState({tabTips});
    }
    renderTabOption(tab, i) {
        const { chooseBgColor,textStyle,chooseTextStyle,activeTab,tabNames } = this.props;
        let tabTextStyle = [styles.tabText,textStyle],
            tabTip = null;
        if( activeTab == i){
            tabTextStyle.push(styles.chooseText,chooseTextStyle);
        }
        if(this.state.tabTips[i]){
            tabTip = <View><View style={styles.tip}><Text style={styles.tipText}>{this.state.tabTips[i]+''}</Text></View></View>
        }
        return (
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => this.props.goToPage(i)}
                style={[styles.tab,activeTab == i?{backgroundColor:chooseBgColor}:'']}
                key={i}
            >
                <View style={styles.tabItem}>
                    <Text style={tabTextStyle}>
                        {tabNames[i]}
                    </Text>
                    {tabTip}
                </View>
            </TouchableOpacity>
        );
    }
    render() {
        let { tabStyle } = this.props;
        return (
            <View style={[styles.tabs,tabStyle]}>
                {this.props.tabs.map((tab,i) => this.renderTabOption(tab,i) )}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    tabs:{
        height: 40,
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        borderBottomWidth: 1 / PixelRatio.get(),
        borderColor: colors.LightGray,
    },
    tab:{
        flex: 1,
    },
    tabItem:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    tabText:{
        fontSize: fonts.h3,
        textAlign:"center",
        color: '#444444',
    },
    chooseText: {
        color: '#ffffff'
    },
    tip: {
        position: 'absolute',
        top: -10,
        backgroundColor: colors.Red,
        borderRadius: 30,
        paddingLeft: 3,
        paddingRight: 3,
        padding: 1,
        minWidth: 15,
    },
    tipText:{
        textAlign: 'center',
        fontSize: fonts.small,
        color: '#ffffff',
    }
});