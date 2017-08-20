/**
 * 文字按钮
 * props:
 * title => string, 文字
 * style => obj, 按钮样式
 * textStyle => obj, 文字样式
 * activeOpacity => number, 触摸透明度
 * disabled => bool, 组件能否交互 默认false
 * disabledStyle => obj, disabled为true 按钮样式
 * disabledTextStyle => obj, disabled为true 文字样式
 * onPress => function, 点击触发的函数
 */
import React, { Component,PureComponent,PropTypes } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';

import { colors,fonts } from '../../styles';

export default class Btn extends PureComponent{
    static defaultProps = {
        disabled: false,
        activeOpacity: 0.6,
        numberOfLines: 1,
    }

    render(){
        let { onPress, style, textStyle, title, activeOpacity, disabled, disabledStyle, disabledTextStyle,numberOfLines, ...props } = this.props;
        if(title == null || title == undefined) {
            title = '';
        }
        if(this.props.children){
            return (
                <TouchableOpacity
                    style={[styles.btn,style,disabled ? disabledStyle : '']}
                    activeOpacity={activeOpacity}
                    onPress={onPress}
                    disabled={disabled}
                    {...props}
                >
                    {this.props.children}
                </TouchableOpacity>
            )
        }
        return (
            <TouchableOpacity
                style={[styles.btn,style,disabled ? disabledStyle : '']}
                activeOpacity={activeOpacity}
                onPress={onPress}
                disabled={disabled}
                {...props}
            >
                <Text
                    style={[styles.btn_text,textStyle,disabled ? disabledTextStyle : '']}
                    numberOfLines={numberOfLines}
                >
                    {title+''}
                </Text>
            </TouchableOpacity>
        )
    }
}
const styles = StyleSheet.create({
    btn:{
        justifyContent:'center',
        alignItems:'center',
        // backgroundColor: colors.DarkBlue,
    },
    btn_text: {
        // color:"#ffffff",
        textAlign: 'center',
        fontSize:fonts.base,
    },
    disableStyle: {
        backgroundColor: colors.LightGray
    },
    disableTextStyle: {
        color: '#ffffff',
    }
});