/**
 * 发送验证码按钮
 * props:
 * onPress => function, 点击触发事件
 * ref指定该组件调用start方法执行倒计时操作
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

import { colors,fonts,btnStyle } from '../../styles';
import { Btn } from '../../component/Btn';

export default class BtnPin extends Component {

    constructor(props) {
        super(props);
        this.state = {
            onOff: false,
            time: 60
        };
    }

    start() {
        this.setState({
            onOff:true
        })
        this.timer = setInterval( _ => {
            let time = --this.state.time;
            if(time == 0){
                clearInterval(this.timer);
                this.setState({
                    onOff:false,
                    time:60
                });
                return;
            }
            this.setState({
                time: time
            })
        },1000)
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render() {
        const { onPress } = this.props;
        if(this.state.onOff) {
            return (
                <Btn
                    title={`${this.state.time}s后重试`}
                    style={[styles.btn,{borderColor:colors.LightGray}]}
                    textStyle={[styles.text,{color:colors.LightGray}]}
                    disabled={this.state.onOff}
                />
            )
        }
        return (
            <Btn
                title="发送验证码"
                style={styles.btn}
                textStyle={styles.text}
                onPress={onPress}
            />
        );
    }
}

const styles = StyleSheet.create({
    btn: {
        borderWidth: 1,
        borderColor: '#000000',
        borderRadius: 3,
        padding: 5
    },
    text: {
        fontSize: fonts.h4,
        color: '#000000',
    },
})