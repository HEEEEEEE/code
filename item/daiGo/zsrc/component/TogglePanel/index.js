/**
 * 展示面板，左划删除
 * props:
 * this.props.children => 要展开隐藏的组件
 * style => obj, 容器样式
 * title => string, 标题或是<Text>组件
 * titleRightBtn => node, 标题右侧按钮/组件
 * footLeftBtn => node, 底部左侧按钮/组件
 * footRightBtn => node, 底部右侧按钮/组件
 * deleteOnPress => function 删除函数
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Animated,
    ScrollView,
    Easing,
    PixelRatio,
    InteractionManager
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { SwipeRow } from '../SwipeListView';
import { Btn } from '../Btn';
import { colors,fonts } from '../../styles';
export default class TogglePanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            onOff: false,
        };
        this.maxHeight = 0;
        this.scaleValue = new Animated.Value(0);
    }
    open() {
        this.setState({
            onOff: true
        })
        Animated.timing(this.scaleValue, {
            toValue: this.maxHeight,
        }).start( _ => {
            this.props.onDidOpen && this.props.onDidOpen();
        });
        this.props.onOpen && this.props.onOpen();
    }
    close() {
        this.setState({
            onOff: false
        })
        Animated.timing(this.scaleValue, {
            toValue: 0,
        }).start( _ => {
            this.props.onDidClose && this.props.onDidClose();
        });
        this.props.onClose && this.props.onClose();
    }
    toggle() {
        let { onOff } = this.state;
        if( onOff ) {
            this.close()
        }else {
            this.open();
        }
    }
    _setMaxHeight(event){
        this.maxHeight = event.nativeEvent.layout.height;
        Animated.timing(this.scaleValue, {
                toValue: this.state.onOff ? this.maxHeight : 0, // 目标值
                duration: 400, // 动画时间
                easing: Easing.linear // 缓动函数
            }
        ).start();
    }
    closeRow(){
        this.refs.swipeRow.closeRow();
    }
    deletePanel(){
        this.closeRow();
        this.props.deleteOnPress && this.props.deleteOnPress();
    }
    render(){
        const { style,title,iconViewStyle,iconStyle,titleRightBtn,footLeftBtn,footRightBtn,children,deleteOnPress,titleOnPress, ...props } = this.props;
        let iconName = this.state.onOff ? 'caret-down' : 'caret-right';
        return (
            <SwipeRow {...props} ref="swipeRow" disableRightSwipe={true} disableLeftSwipe={this.state.onOff} disableSwipe={this.state.onOff} rightOpenValue={-50}>
                <View style={{flex:1}}>
                    <Btn onPress={ _ => this.deletePanel()} style={styles.btn} textStyle={styles.btnText} title="删除"/>
                </View>
                <View style={[styles.container,style]}>
                    <View style={[styles.row,{paddingLeft:0}]}>
                        <Icon.Button name={iconName}
                                     size={25}
                                     style={[{width:33,height:40,padding:0,paddingLeft:15,justifyContent:'center'},iconViewStyle]}
                                     iconStyle={[{marginLeft:0,marginRight:0},iconStyle]}
                                     backgroundColor="transparent"
                                     underlayColor="rgba(0,0,0,0)"
                                     color={colors.DarkBlue}
                                     onPress={this.toggle.bind(this)}
                        />
                        <View style={{flex:1, alignItems:'center',justifyContent:'center'}}>
                            <Text numberOfLines={1} style={styles.titleText} onPress={titleOnPress}>{title}</Text>
                        </View>
                        <View style={{width:30,flexDirection:'row-reverse' }}>{titleRightBtn}</View>
                    </View>
                    <Animated.View style={{height:this.scaleValue}}>
                        <ScrollView scrollEnabled={false}>
                            <View onLayout={this._setMaxHeight.bind(this)}>
                                {
                                    React.Children.map(children,(child,i)=>{
                                        return child
                                    })
                                }
                            </View>
                        </ScrollView>
                    </Animated.View>
                    <View style={styles.row}>
                        <View style={{flexDirection:"row",alignItems:'center'}}>{footLeftBtn}</View>
                        <View style={{flexDirection:"row",alignItems:'center'}}>{footRightBtn}</View>
                    </View>
                </View>
            </SwipeRow>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        borderColor: colors.LightGray,
        borderTopWidth: 1 / PixelRatio.get(),
        backgroundColor:'#ffffff'
    },
    titleText: {
        fontSize: fonts.h3,
        color: '#000000'
    },
    btn: {
        position: 'absolute',
        right: 0,
        top: 0,
        bottom: 0,
        width: 50,
        backgroundColor: colors.Red,
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnText:{
        fontSize: fonts.h3,
        color: '#ffffff',
    },
    row: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: "space-between",
        height: 45,
        paddingLeft: 15,
        paddingRight: 15,
    }
});