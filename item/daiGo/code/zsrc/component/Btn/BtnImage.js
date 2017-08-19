/**
 * 图片按钮
 * props:
 * source => image组件的source
 * resizeMode => string, image组件的resizeMode 默认contain
 * btnViewStyle => obj, 按钮样式
 * imageStyle => obj, 图片样式
 * activeOpacity => number, 触摸透明度
 * disabled => bool, 组件能否交互 默认false
 * onPress => function, 点击触发的函数
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';

export default class BtnImage extends Component {
    static defaultProps = {
        disabled: false,
        resizeMode: 'contain',
        activeOpacity: 0.6
    }
    render(){
        const { onPress, disabled, source, activeOpacity, btnViewStyle, imageStyle, resizeMode } = this.props;
        return (
            <TouchableOpacity
                style={[{justifyContent:'center',alignItems: 'center'},btnViewStyle]}
                onPress={onPress}
                disabled={disabled}
                activeOpacity={activeOpacity}
            >
                <Image style={imageStyle}
                       source={source}
                       resizeMode={resizeMode} />
            </TouchableOpacity>
        )
    }
}