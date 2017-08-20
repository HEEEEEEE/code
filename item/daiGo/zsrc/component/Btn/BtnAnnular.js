/**
 * 环形按钮
 * props:
 * title => string, 文字
 * titleStyle => obj, 文字样式
 * btnViewStyle => obj, 点击框样式
 * style => obj, 环形样式
 * onPress => function, 点击触发的函数
 * activeOpacity => number, 触摸透明度
 * disabled => bool, 组件能否交互 默认false
 * onOff => bool, 是否被选中 默认false
 * chooseBgColor => string, onOff为true时环形的背景色
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';

import { colors,fonts } from '../../styles';

export default class BtnAnnular extends Component{
    static defaultProps = {
        disabled: false,
        activeOpacity: 0.6,
        onOff: false,
        chooseBgColor: colors.Red
    }

    render(){
        const { btnViewStyle, style, title, titleStyle, onPress, activeOpacity, disabled, chooseBgColor, onOff } = this.props;
        let chooseStyle = onOff ? { backgroundColor: chooseBgColor } : '';
        return (
                <TouchableOpacity
                    style={[{justifyContent:'center',alignItems: 'center',flexDirection:'row'},btnViewStyle]}
                    activeOpacity={activeOpacity}
                    onPress={onPress}
                    disabled={disabled}
                >
                    <View style={[styles.btn,style,chooseStyle]}/>
                    {
                        title != undefined ? <Text style={[styles.text,titleStyle]}>{title}</Text> : null
                    }
                </TouchableOpacity>
        )
    }
}
const styles = StyleSheet.create({
    btn:{
        width: 15,
        height: 15,
        borderWidth: 1,
        borderColor: colors.Gray,
        borderRadius: 15,
        backgroundColor: 'transparent'
    },
    text:{
        marginLeft: 5,
        fontSize: fonts.base
    }
});