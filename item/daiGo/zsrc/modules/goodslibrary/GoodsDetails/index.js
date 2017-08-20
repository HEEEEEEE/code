/**
 * 商品详情编辑页面
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    ScrollView,
    DeviceEventEmitter,
    Dimensions,
    Keyboard,
    KeyboardAvoidingView,
    Platform
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import httpService from '../../../service/httpService';
import util from '../../../service/utilService';

import Head from '../../../component/Head';
import { NumInput } from '../../../component/TextInput';
import { SetTextModal } from '../../../component/Modal';
import { Btn } from '../../../component/Btn';
import { colors,fonts,btnStyle,lines } from '../../../styles';
import Category from './Category';
import Currency from '../../set/Currency';

let KeyboardView = Platform.OS == 'ios' ? KeyboardAvoidingView : View;

const { width, height } = Dimensions.get('window');

// const CURRENCYS = ['人民币','港币','美元'];

export default class GoodsDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            room_id: this.props.room_id || '',
            product_id: this.props.product_id || '', // 商品ID
            product_name: this.props.product_name || '', // 商品名
            desc: this.props.desc || '', // 简介
            category: '其他', // 品类
            exchange_type: this.props.exchange_type || 2, // 币种 1=人民币,2=港币,3=美元
            exchange_rate: this.props.exchange_rate || EXCHANGE_TYPES[2].exchange_rate, // 汇率
            exchange_name: this.props.exchange_name || '',
            default_cost: 0, // 进价
            default_price: 0, // 售价
            currency: '人民币', // 币种
        }
        this.textInputView = null; // 当前编辑的textInput
        this.moveH =  0; // ScrollView滚动的距离
    }

    componentWillMount() {
        if (Platform.OS === 'ios') {
            this.subscriptions = [
                Keyboard.addListener('keyboardDidShow', this._keyboardDidShow),
                Keyboard.addListener('keyboardDidHide', this._keyboardDidHide)
            ];
        }
    }

    componentWillUnmount(){
        if (Platform.OS === 'ios') {
            this.subscriptions.forEach((sub) => sub.remove());
        }
    }

    _keyboardDidShow = (e) => {
        if(! this.textInputView) return ;
        this.textInputView.measure( (ox, oy, w, h, px, py) => {
            // 弹出高度 = (键盘高度 + 底部按钮高度)
            let popHeight = e.startCoordinates.height + btnStyle.strip.btn.height + btnStyle.strip.btn.margin * 2;
            //输入框距离底部的距离 = （屏幕的高度 - 当前TextInput距屏幕顶部高度 - 当前TextInput的高度）
            let bottomHeight = height - py - h ;
            //输入框距离底部的距离小于弹出高度，需要滑动
            if (  bottomHeight < popHeight  ) {
                // 需要移动的距离
                let moveHeight = popHeight - bottomHeight;
                this._scrollView.scrollTo({y:moveHeight ,x:0});
            }
        });
    }

    _keyboardDidHide = () => {
        this._scrollView.scrollTo({y:0 ,x:0});
        this.textInputView = null;
    }

    componentDidMount() {
        httpService.getGoodsDetails(this.state.product_id).then((response) => {
            if(response.ok) {
                let data = JSON.parse(response._bodyInit).data;
                data.default_cost = data.default_cost > 0 ? data.default_cost : 0;
                data.default_price = data.default_price > 0 ? data.default_price : 0;
                this.setState({
                    room_id: data.room_id,
                    product_name: data.title,
                    desc: data.text,
                    exchange_name: data.exchange_name,
                    exchange_type: data.exchange_type || 2,
                    exchange_rate: data.exchange_rate > 0 ? data.exchange_rate : EXCHANGE_TYPES[2].exchange_rate,
                    default_cost: data.default_cost,
                    default_price: data.default_price,
                })
                this._costInput.setDefaultValue(data.default_cost);
                this._priceInput.setDefaultValue(data.default_price);
            }
        })
    }

    // 去除文本开头和结尾的空格
    checkStr(str) {
        str = str.replace(/(^\s+)|(\s+$)/g,"");
        return str;
    }

    // 选择品类
    chooseCategory() {
        let { category } = this.state;
        this.textInputView && this.textInputView.blur();
        this.props.navigator.push({
            name:'Category',
            component: Category,
            params: {
                category: category,
                callback: (category) => {
                    this.setState({category})
                }
            }
        })
    }

    // 选择币种
    chooseCurrency() {
        let { exchange_type } = this.state;
        this.textInputView && this.textInputView.blur();
        this.props.navigator.push({
            name:'Currency',
            component: Currency,
            params: {
                exchange_type: exchange_type,
                callback: (exchange_type,exchange_rate) => {
                    this.setState({exchange_type,exchange_rate})
                }
            }
        })
    }

    // 修改商品简介
    setDesc() {
        let { desc } = this.state;
        this._setTextModal.show(desc, t => {
            this.setState({
                desc: t
            })
        })
    }

    setValue(t,key) {
        this.state[key] = t;
        this.forceUpdate();
    }

    render() {
        let hasType = EXCHANGE_TYPES[this.state.exchange_type];
        let exchangeName = hasType ? hasType.exchange_name : this.state.exchange_name,
            exchangeRate = hasType ? hasType.exchange_rate : this.state.exchange_rate;
        return (
            <View style={styles.container}>
                <Head
                    title="商品详情编辑"
                    leftIconType="SimpleLineIcons"
                    leftIcon="arrow-left"
                    leftIconAction={() => this.props.navigator.pop()}
                />
                <KeyboardView behavior='padding' style={{flex:1}}>
                    <ScrollView
                        style={styles.body}
                        ref={ e => this._scrollView = e }
                    >
                        <View style={styles.view}>
                            <View style={[styles.view_item,styles.borderBottom]}>
                                <View>
                                    <Text style={styles.text}>商品名</Text>
                                </View>
                                <View style={{flex:1}}>
                                    <TextInput
                                        value={this.state.product_name}
                                        onChangeText={ t => this.setValue(t,'product_name')}
                                        style={styles.textInput}
                                        underlineColorAndroid="transparent"
                                        returnKeyType="done"
                                        ref={ e => this._productInput = e }
                                        onFocus={ _ => this.textInputView = this._productInput }
                                    />
                                </View>
                            </View>

                            <Btn
                                style={[styles.view_item,styles.borderBottom]}
                                onPress={ _ => this.chooseCategory()}
                            >
                                <Text style={styles.text}>品类</Text>
                                <Text style={[styles.text,{flex:1,textAlign:'right'}]}>{this.state.category}</Text>
                                <View style={styles.iconView}>
                                    <Icon name="chevron-right" size={15} color="#cccccc"/>
                                </View>
                            </Btn>

                            <Btn
                                style={styles.view_item}
                                onPress={ _ => this.setDesc()}
                            >
                                <Text style={[styles.text,{flex:1}]}>商品简介</Text>
                                <View style={styles.iconView}>
                                    <Icon name="chevron-right" size={15} color="#cccccc"/>
                                </View>
                            </Btn>
                        </View>

                        <View style={styles.view}>
                            <View style={[styles.view_item,styles.borderBottom]}>
                                <View>
                                    <Text style={styles.text}>默认售价(人民币)</Text>
                                </View>
                                <View style={{flex:1}}>
                                    <NumInput
                                        style={[styles.textInput,styles.text_right]}
                                        type="float"
                                        defaultValue={this.state.default_price}
                                        onChangeText={ t => this.setValue(t,'default_price')}
                                        ref={ e => this._priceInput = e }
                                        onFocus={ _ => this.textInputView = this._priceInput }
                                    />
                                </View>
                                <View style={styles.iconView}/>
                            </View>

                            <Btn
                                style={{backgroundColor:'#ffffff'}}
                                onPress={ _ => this.chooseCurrency()}
                            >
                                <View style={[styles.view_item,styles.borderBottom]}>
                                    <View>
                                        <Text style={styles.text}>进价计价币种</Text>
                                    </View>
                                    <View style={{flex:1}}>
                                        <Text style={[styles.text,styles.text_right]}>
                                            {`${exchangeName} ( 汇率：${exchangeRate.toFixed(3)} )`}
                                        </Text>
                                    </View>
                                    <View style={styles.iconView}>
                                        <Icon name="chevron-right" size={15} color="#cccccc"/>
                                    </View>
                                </View>
                            </Btn>

                            <View style={styles.view_item}>
                                <View>
                                    <Text style={styles.text}>默认进价({exchangeName})</Text>
                                </View>
                                <View style={{flex:1}}>
                                    <NumInput
                                        style={[styles.textInput,styles.text_right]}
                                        type="float"
                                        defaultValue={this.state.default_cost}
                                        onChangeText={ t => this.setValue(t,'default_cost')}
                                        ref={ e => this._costInput = e }
                                        onFocus={ _ => this.textInputView = this._costInput }
                                    />
                                </View>
                                <View style={styles.iconView}/>
                            </View>
                        </View>

                        <Btn
                            style={styles.view}
                            onPress={ _ => util.showToast('正在开发中,敬请期待')}
                        >
                                <View style={styles.view_item}>
                                    <Text style={[styles.text,{flex:1}]}>展示图片</Text>
                                    <View style={styles.iconView}>
                                        <Icon name="chevron-right" size={15} color="#cccccc"/>
                                    </View>
                                </View>
                        </Btn>

                        <View style={styles.view}>
                            <View style={[styles.view_item,styles.borderBottom,{marginLeft:0,marginRight:0,justifyContent:'center'}]}>
                                <Text style={styles.text}>商品详情</Text>
                            </View>
                            <Btn
                                style={styles.view_item}
                                onPress={ _ => util.showToast('正在开发中,敬请期待')}
                            >
                                <Text style={styles.text}>上传商品详情图片</Text>
                            </Btn>
                        </View>
                    </ScrollView>

                    <SetTextModal ref={ e => this._setTextModal = e }/>

                    <Btn title="保存"
                         style={btnStyle.strip.btn}
                         textStyle={btnStyle.strip.btn_text}
                         onPress={this.save}/>
                </KeyboardView>
            </View>
        );
    }

    save = () => {
        let data = this.state;
        data.product_name = this.checkStr(data.product_name);
        httpService.setGoodsDetails(
            data.room_id,
            data.product_id,
            data.product_name,
            data.default_cost > 0 ? data.default_cost : 0,
            data.default_price > 0 ? data.default_price : 0,
            data.desc,
            data.exchange_type,
            data.exchange_rate,
        ).then((response) => {
            if(response.ok) {
                this.props.callback && this.props.callback(data);
                this.props.navigator.pop();
                if(data.product_name != this.props.product_name) {
                    DeviceEventEmitter.emit('addToBuyList',data.product_id,'product_id');
                    DeviceEventEmitter.emit('addToPayAndSend',data.product_id,'product_id');
                }
            }else{
                this.props.navigator.pop();
            }
        })
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.BackgroundGray,
    },
    body:{
        flex: 1,
    },
    view: {
        marginTop: 10,
        backgroundColor: '#ffffff',
    },
    view_item: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10,
        height:40,
    },
    text: {
        fontSize: fonts.base,
        color: '#000000',
    },
    text_right: {
        textAlign:'right'
    },
    textInput: {
        flex: 1,
        fontSize: fonts.base,
        color: '#000000',
        marginLeft: 10,
        padding: 0,
        borderWidth: 0,
    },
    borderBottom: {
        borderBottomWidth: lines.smallest,
        borderColor: lines.color,
    },
    iconView: {
        width:25,
        alignItems:'center',
        justifyContent:'center'
    }
});