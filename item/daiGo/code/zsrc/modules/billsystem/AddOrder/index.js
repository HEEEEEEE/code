/**
 * 添加订单页面
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    ScrollView,
    InteractionManager,
    DeviceEventEmitter,
    KeyboardAvoidingView,
    Keyboard,
    Dimensions,
    Platform
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'

import httpService from '../../../service/httpService';
import util from '../../../service/utilService';

import Head from '../../../component/Head';
import { NumInput } from '../../../component/TextInput';
import { Btn,BtnAnnular } from '../../../component/Btn';
import SetNum from '../../../component/SetNum';
import { colors,fonts,btnStyle,lines } from '../../../styles';
import SearchView from './SearchView';
import ExpressInformation from './../../address/ExpressInformation';
import ChooseAddress from '../../address/ChooseAddress';
import Currency from '../../set/Currency';

let KeyboardView = Platform.OS == 'ios' ? KeyboardAvoidingView : View;

const { width, height } = Dimensions.get('window');

export default class AddOrder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                nickname: props.nickname || '', // 客户名
                cid: props.cid || null, // 客户id
                product_name: props.product_name || '', // 商品名
                product_id: props.product_id || '', // 商品id
                cate_name: props.cate_name || '', // 分类信息
                quantity: props.quantity || 1, // 数量
                remark: props.remark || '', // 备注
                hasPayed: props.hasPayed || 0, // 是否全付
                unit_cost: props.unit_cost || null, // 进价
                unit_price: props.unit_price || null, // 售价
                prepay_money: props.prepay_money || 0, // 定金
                mail_address: props.mail_address || {name: '', tel: '', address: ''}, // 地址信息
                addr_id: props.addr_id >= 0 ? this.props.addr_id : '', // 地址信息的id
                exchange_type: props.exchange_type || 2, // 币种 默认港币
                exchange_rate: props.exchange_rate > 0 ? props.exchange_rate : EXCHANGE_TYPES[2].exchange_rate, // 汇率 默认港币汇率
                exchange_name: props.exchange_name || '',
            },
            onOff: false, // 是否显示详细加单
            depositBtn: false, // 定金按钮选中状态
            cateName: null, // 搜索的分类信息
            customer: null, // 搜索的客户
            product: null, // 搜索的商品
        }
        this.textInputView = null; // 当前编辑的textInput
        this.inputTop = 0; // 当前编辑的textIput底部距离屏幕顶部的距离
    }

    componentWillMount() {
        if (Platform.OS === 'ios') {
            this.subscriptions = [
                Keyboard.addListener('keyboardDidShow', this._keyboardDidShow),
                Keyboard.addListener('keyboardDidHide', this._keyboardDidHide)
            ];
        }
    }

    componentDidMount() {
        let {data} = this.state;
        if (this.props.cid) {
            httpService.getCustomerDefaultAddress(this.props.cid).then((response) => {
                if (response.ok) {
                    let addrData = JSON.parse(response._bodyInit).data;
                    data.addr_id = addrData.c_info_id || '';
                    data.mail_address.name = addrData.name || '';
                    data.mail_address.tel = addrData.tel || '';
                    data.mail_address.address = addrData.address || '';
                    this.setState({data})
                }
            })
        }
        if (this.props.product_id) {
            httpService.getGoodsDetails(this.props.product_id).then((response) => {
                if (response.ok) {
                    let productData = JSON.parse(response._bodyInit).data;
                    data.unit_cost = productData.default_cost;
                    data.unit_price = productData.default_price;
                    data.exchange_type = productData.exchange_type || 2;
                    data.exchange_rate = productData.exchange_rate > 0 ? productData.exchange_rate : EXCHANGE_TYPES[2].exchange_rate;
                    data.exchange_name = productData.exchange_name;
                    this.setState({data})
                }
            })
        }
        if (!this.props.cate_name) {
            this._cateNameInput.focus();
            InteractionManager.runAfterInteractions( _ => {
                this._searchOnFocus(this._cateNameInput)
            })
        }else if (!this.props.cid) {
            this._customerInput.focus();
            InteractionManager.runAfterInteractions( _ => {
                this._searchOnFocus(this._customerInput)
            })
        }else if (!this.props.product_id) {
            this._productInput.focus();
            InteractionManager.runAfterInteractions( _ => {
                this._searchOnFocus(this._productInput)
            })
        }
    }

    componentWillUnmount() {
        if (Platform.OS === 'ios') {
            this.subscriptions.forEach((sub) => sub.remove());
        }
    }

    _keyboardDidShow = (e) => {
        if (!this.textInputView) return;
        if (
            this.textInputView == this._cateNameInput ||
            this.textInputView == this._customerInput ||
            this.textInputView == this._productInput
        ) return;
        this.textInputView.measure((ox, oy, w, h, px, py) => {
            // 弹出高度 = (键盘高度 + 底部按钮高度)
            let popHeight = e.startCoordinates.height + btnStyle.strip.btn.height + btnStyle.strip.btn.margin * 2;
            //输入框距离底部的距离 = （屏幕的高度 - 当前TextInput距屏幕顶部高度 - 当前TextInput的高度）
            let bottomHeight = height - py - h;
            //输入框距离底部的距离小于弹出高度，需要滑动
            if (this.textInputView == this._costInput) {
                this._scrollView.scrollToEnd();
            } else if (bottomHeight < popHeight) {
                // 需要移动的距离
                let moveHeight = popHeight - bottomHeight;
                this._scrollView.scrollTo({y: moveHeight, x: 0});
            }
        })
    }

    _keyboardDidHide = () => {
        this._scrollView.scrollTo({y: 0, x: 0});
        this.textInputView = null;
    }

    _searchOnFocus(ref) {
        ref.measure((ox, oy, w, h, px, py) => {
            this.inputTop = py + h - 45 - 20;
        })
        this.textInputView = ref;
    }

    _searchOnBlur = (e) => {
        this.textInputView = null;
        setTimeout(_ => {
            this.setState({
                cateName: null,
                customer: null,
                product: null
            })
        }, 100)
    }

    customerInputOnBlur = () => {
        this.textInputView = null;
        setTimeout(_ => {
            let {data} = this.state;
            if (data.cid) {
                httpService.getCustomerDefaultAddress(data.cid).then((response) => {
                    if (response.ok) {
                        let addrData = JSON.parse(response._bodyInit).data;
                        data.addr_id = addrData.c_info_id || '';
                        data.mail_address.name = addrData.name || '';
                        data.mail_address.tel = addrData.tel || '';
                        data.mail_address.address = addrData.address || '';
                        this.setState({
                            data,
                            onOff: addrData.name ? true : this.state.onOff,
                            customer: null
                        })
                    }
                })
            } else {
                this.setState({customer: null})
            }
        }, 200)
    }

    setValue(value, key) {
        let {data} = this.state;
        data[key] = value;
        this.setState({
            data
        })
    }

    chooseSearchItem(arr) {
        // arr = [[v1,k1],[v2,k2]...]
        let {data, onOff} = this.state;
        arr.map(item => {
            data[item[1]] = item[0];
            if (item[1] == 'unit_cost') {
                if (item[0] > 0) onOff = true;
                if (this._costInput) this._costInput.setDefaultValue(item[0]);
            }
            if (item[1] == 'unit_price') {
                if (item[0] > 0) onOff = true;
                if (this._priceInput) this._priceInput.setDefaultValue(item[0]);
            }
            if (item[1] == 'exchange_type' && !item[0]) data.exchange_type = 2; // 如果商品没币种,显示港币
            if (item[1] == 'exchange_rate' && !item[0]) data.exchange_rate = EXCHANGE_TYPES[2].exchange_rate;
        })
        this.setState({
            data,
            onOff,
            cateName: null,
            customer: null,
            product: null
        })
        setTimeout(_ => {
            if (arr[0][1] == 'cate_name') this._customerInput.focus();
            if (arr[0][1] == 'nickname') this._productInput.focus();
            if (arr[0][1] == 'product_name') this._numInput.focus();
        }, 150)
    }

    payAll() {
        let {data} = this.state;
        data.hasPayed = data.hasPayed ? 0 : 1;
        data.prepey_money = 0;
        this.setState({
            data,
            depositBtn: false
        });
    }

    deposit() {
        let {data} = this.state;
        data.hasPayed = 0;
        this.setState({
            data,
            depositBtn: !this.state.depositBtn
        })
    }

    // 选择币种
    chooseCurrency() {
        let {exchange_type} = this.state.data;
        this.textInputView && this.textInputView.blur();
        this.props.navigator.push({
            component: Currency,
            params: {
                exchange_type: exchange_type,
                callback: (exchange_type, exchange_rate) => {
                    let {data} = this.state;
                    data.exchange_type = exchange_type;
                    data.exchange_rate = exchange_rate;
                    this.setState({data})
                }
            }
        })
    }

    // 选择地址
    chooseReceivingAddress() {
        this.textInputView && this.textInputView.blur();
        this.props.navigator.push({
            component: ChooseAddress,
            params: {
                cid: this.state.data.cid,
                callback: (address) => {
                    this.state.data.addr_id = address.c_info_id;
                    this.state.data.mail_address = address;
                }
            }
        })
    }

    // 去除文本开头和结尾的空格
    checkStr(str) {
        str = str.replace(/(^\s+)|(\s+$)/g, "");
        return str;
    }

    // 搜索分类信息
    searchCateName(text) {
        if (text != this.state.data.cate_name) {
            this.setValue(text, 'cate_name');
            let cateName = this.checkStr(text);
            if (cateName != '') {
                httpService.getSearchCate(cateName).then((response) => {
                    let data = JSON.parse(response._bodyInit).data;
                    if (this.textInputView != this._cateNameInput) data = null;
                    this.setState({
                        cateName: data,
                    });
                })
            } else {
                this.setState({
                    cateName: null
                })
            }
        }
    }

    // 搜索买家
    searchCustomer(text) {
        this.setValue(text, 'nickname');
        let nickName = this.checkStr(text);
        if (nickName != '') {
            httpService.getSearchUser(nickName).then((response) => {
                let customerData = JSON.parse(response._bodyInit).data,
                    cid = null;
                let {data, onOff} = this.state;
                customerData.map(item => {
                    if (item.nickname.toLowerCase() == nickName.toLowerCase()) cid = item.cId;
                })
                data.cid = cid;
                data.addr_id = '';
                data.mail_address = {name: '', tel: '', address: ''};
                if (this.textInputView != this._customerInput) customerData = null;
                this.setState({
                    data: data,
                    customer: customerData,
                });
            })
        } else {
            let {data} = this.state;
            data.cid = null;
            this.setState({
                data,
                customer: null
            })
        }
    }

    // 搜索商品
    searchProduct(text) {
        this.setValue(text, 'product_name');
        let productName = this.checkStr(text);
        if (productName != '') {
            httpService.getSearchProduct(productName).then((response) => {
                let productData = JSON.parse(response._bodyInit).data,
                    product_id = '',
                    unit_cost = null,
                    unit_price = null,
                    exchange_type = 2,
                    exchange_rate = EXCHANGE_TYPES[2].exchange_rate,
                    exchange_name = '';
                let {data, onOff} = this.state;
                productData.map(item => {
                    if (item.product_name.toLowerCase() == productName.toLowerCase()) {
                        product_id = item.id;
                        unit_cost = item.default_cost;
                        unit_price = item.default_price;
                        exchange_type = item.exchange_type || 2;
                        exchange_rate = item.exchange_rate > 0 ? item.exchange_rate : exchange_rate;
                        exchange_name = item.exchange_name;
                    }
                })
                data.unit_cost = unit_cost;
                data.unit_price = unit_price;
                data.exchange_type = exchange_type;
                data.exchange_rate = exchange_rate;
                data.exchange_name = exchange_name;
                this._costInput && this._costInput.setDefaultValue(unit_cost);
                this._priceInput && this._priceInput.setDefaultValue(unit_price);
                if (this.textInputView != this._productInput) productData = null;
                this.setState({
                    data: data,
                    product: productData,
                    onOff: unit_price > 0 || unit_cost > 0 ? true : onOff
                });
            })
        } else {
            let {data} = this.state;
            data.unit_cost = null;
            data.unit_price = null;
            data.exchange_type = 2;
            data.exchange_rate = EXCHANGE_TYPES[2].exchange_rate;
            data.exchange_name = '';
            this._costInput && this._costInput.setDefaultValue(null);
            this._priceInput && this._priceInput.setDefaultValue(null);
            this.setState({
                data,
                product: null
            })
        }
    }

    // 详情加单
    detailed() {
        if (!this.state.onOff) {
            return (
                <Btn
                    onPress={() => this.setState({onOff: true})}
                    style={{marginTop: 10, justifyContent: 'center', alignItems: 'center'}}
                >
                    <Text style={{fontSize: fonts.base}}>详细加单</Text>
                    <Icon name="caret-down" color={colors.DarkBlue} size={20}/>
                </Btn>
            )
        } else {
            let {data} = this.state;
            let exchangeName = data.exchange_name,
                exchangeRate = data.exchange_rate.toFixed(3);
            if (EXCHANGE_TYPES[data.exchange_type]) { // 汇率列表有此汇率
                data.exchange_rate = EXCHANGE_TYPES[data.exchange_type].exchange_rate;
                exchangeName = EXCHANGE_TYPES[data.exchange_type].exchange_name;
                exchangeRate = EXCHANGE_TYPES[data.exchange_type].exchange_rate.toFixed(3);
            }
            return (
                <View>
                    <View style={styles.view}>
                        <View style={[styles.view_item, styles.borderBottom]}>
                            <View style={[{flex: 1}, styles.borderRight]}>
                                <Btn
                                    style={{flex: 1, alignItems: 'flex-start'}}
                                    onPress={ _ => this.payAll()}
                                >
                                    <BtnAnnular
                                        title="已付全款"
                                        titleStyle={styles.text}
                                        onOff={data.hasPayed}
                                        disabled={true}
                                    />
                                </Btn>
                            </View>

                            <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                                <BtnAnnular title="已付定金："
                                            titleStyle={styles.text}
                                            btnViewStyle={{marginLeft: 10}}
                                            onOff={this.state.depositBtn}
                                            onPress={ _ => this.deposit()}
                                />
                                <NumInput
                                    style={[styles.textInput, {textAlign: 'right'}]}
                                    ref={ e => this._depositInput = e }
                                    onFocus={ _ => {
                                        this.textInputView = this._depositInput;
                                        this.deposit()
                                    } }
                                    defalutValue={data.prepay_money}
                                    onChangeText={ t => this.setValue(t, 'prepay_money')}
                                />
                            </View>
                        </View>

                        <View style={styles.view_item}>
                            <Text style={styles.text}>售价(人民币)</Text>
                            <NumInput
                                type="float"
                                toFixed={1}
                                style={[styles.textInput, {textAlign: 'right'}]}
                                defaultValue={data.unit_price}
                                onChangeText={ t => this.setValue(t, 'unit_price')}
                                ref={ e => this._priceInput = e }
                                onFocus={ _ => this.textInputView = this._priceInput }
                            />
                        </View>

                        <Btn
                            style={{backgroundColor: '#ffffff'}}
                            onPress={ _ => this.chooseCurrency()}
                        >
                            <View style={styles.view_item}>
                                <View>
                                    <Text style={styles.text}>进价计价币种</Text>
                                </View>
                                <View style={{flex: 1}}>
                                    <Text style={[styles.text, {textAlign: 'right', marginRight: 10}]}>
                                        {`${exchangeName} ( 汇率：${exchangeRate} )`}
                                    </Text>
                                </View>
                                <View style={styles.iconView}>
                                    <Icon name="chevron-right" size={15} color="#cccccc"/>
                                </View>
                            </View>
                        </Btn>


                        <View style={styles.view_item}>
                            <Text style={styles.text}>进价({exchangeName})</Text>
                            <NumInput
                                type="float"
                                toFixed={1}
                                style={[styles.textInput, {textAlign: 'right'}]}
                                defaultValue={data.unit_cost}
                                onChangeText={ t => this.setValue(t, 'unit_cost')}
                                ref={ e => this._costInput = e }
                                onFocus={ _ => {
                                    console.log('onOfuc');
                                    this.textInputView = this._costInput
                                } }
                            />
                        </View>
                    </View>

                    {
                        data.cid ?
                            <View style={styles.view}>
                                <View style={[styles.view_item, styles.borderBottom, {justifyContent: 'center'}]}>
                                    <Text style={styles.text}>快递信息</Text>
                                </View>
                                <ExpressInformation
                                    name={data.mail_address && data.mail_address.name}
                                    tel={data.mail_address && data.mail_address.tel}
                                    address={data.mail_address && data.mail_address.address}
                                    onPress={ _ => this.chooseReceivingAddress()}
                                />
                            </View> : null
                    }
                </View>

            )
        }
    }

    render() {
        const detailed = this.detailed();
        let {data} = this.state;
        return (
            <View style={styles.container}>
                <Head
                    title="添加订单"
                    leftIconType="Ionicons"
                    leftIcon="md-close"
                    leftIconSize={22}
                    backgroundColor={colors.LightGray}
                    color='#000000'
                    leftIconAction={() => this.props.navigator.pop()}
                />
                <KeyboardView behavior='padding' style={{flex: 1}}>
                    <ScrollView
                        keyboardShouldPersistTaps="handled"
                        style={styles.body}
                        onScroll={ _ => this.setState({cateName: null, customer: null, product: null})}
                        ref={ e => this._scrollView = e }
                    >
                        <View style={styles.view}>
                            <View style={styles.view_item}>
                                <Text style={styles.text}>分类：</Text>
                                <TextInput
                                    style={styles.textInput}
                                    placeholder="可按购买地点、时间等"
                                    underlineColorAndroid="transparent"
                                    returnKeyType="done"
                                    value={data.cate_name}
                                    onChangeText={text => this.searchCateName(text) }
                                    onBlur={this._searchOnBlur}
                                    ref={ e => this._cateNameInput = e }
                                    onFocus={ _ => this._searchOnFocus(this._cateNameInput) }
                                />
                            </View>
                        </View>

                        <View style={styles.view}>
                            <View style={[styles.view_item, styles.borderBottom]}>
                                <Text style={styles.text}>客户：</Text>
                                <TextInput
                                    style={styles.textInput}
                                    underlineColorAndroid="transparent"
                                    returnKeyType="done"
                                    value={data.nickname}
                                    editable={this.props.nickname == undefined}
                                    onChangeText={text => this.searchCustomer(text)}
                                    onBlur={this.customerInputOnBlur}
                                    ref={ e => this._customerInput = e }
                                    onFocus={ _ => this._searchOnFocus(this._customerInput) }
                                />
                            </View>
                            <View style={[styles.view_item, styles.borderBottom]}>
                                <Text style={styles.text}>商品：</Text>
                                <TextInput
                                    style={styles.textInput}
                                    underlineColorAndroid="transparent"
                                    returnKeyType="done"
                                    value={data.product_name}
                                    editable={this.props.product_name == undefined}
                                    onChangeText={text => this.searchProduct(text)}
                                    onBlur={this._searchOnBlur}
                                    ref={ e => this._productInput = e }
                                    onFocus={ _ => this._searchOnFocus(this._productInput) }
                                />
                            </View>
                            <View style={styles.view_item}>
                                <Text style={styles.text}>数量：</Text>
                                <SetNum
                                    style={{justifyContent: 'flex-end', flex: 1}}
                                    defaultNum={data.quantity}
                                    onChangeNum={ num => this.setValue(num, 'quantity')}
                                    ref={ e => this._numInput = e }
                                    onFocus={ _ => this.textInputView = this._numInput }
                                />
                            </View>
                        </View>

                        <View style={styles.view}>
                            <View style={styles.view_item}>
                                <Text style={styles.text}>备注：</Text>
                                <TextInput
                                    style={styles.textInput}
                                    underlineColorAndroid="transparent"
                                    returnKeyType="done"
                                    value={data.remark}
                                    onChangeText={text => this.setValue(text, 'remark')}
                                    ref={ e => this._remarkInput = e }
                                    onFocus={ _ => this.textInputView = this._remarkInput }
                                />
                            </View>
                        </View>

                        {detailed}

                    </ScrollView>

                    <SearchView
                        style={{top: this.inputTop}}
                        data={this.state.cateName}
                        dataKey="cate_name"
                        onPress={ cateName => this.chooseSearchItem([[cateName.cate_name, 'cate_name']]) }
                    />
                    <SearchView
                        style={{top: this.inputTop}}
                        data={this.state.customer}
                        dataKey="nickname"
                        onPress={ customer => this.chooseSearchItem([[customer.nickname, 'nickname'], [customer.cId, 'cid']]) }
                    />
                    <SearchView
                        style={{top: this.inputTop}}
                        data={this.state.product}
                        dataKey="product_name"
                        onPress={ product => this.chooseSearchItem([
                            [product.product_name, 'product_name'],
                            [product.id, 'product_id'],
                            [product.default_cost, 'unit_cost'],
                            [product.default_price, 'unit_price'],
                            [product.exchange_type, 'exchange_type'],
                            [product.exchange_rate, 'exchange_rate'],
                            [product.exchange_name, 'exchange_name']
                        ])
                        }
                    />

                    <Btn title="保存订单"
                         style={btnStyle.strip.btn}
                         textStyle={btnStyle.strip.btn_text}
                         onPress={this.save}/>
                </KeyboardView>
            </View>
        );
    }

    save = () => {
        let {data} = this.state;
        if (this.checkStr(data.nickname) == '') {
            util.showToast('请输入客户!');
            return;
        }
        if (this.checkStr(data.product_name) == '') {
            util.showToast('请输入商品!');
            return;
        }
        if (!data.quantity) {
            util.showToast('请输入数量!');
            return;
        }
        if (this.props.goodsCateNames) {
            if (data.product_id) {
                if (this.props.goodsCateNames[data.product_name + '_' + data.product_id]) {
                    data.cate_name = this.props.goodsCateNames[data.product_name + '_' + data.product_id][0];
                }
            }
        }
        if(data.cid && data.addr_id == '') {
            httpService.getCustomerDefaultAddress(data.cid).then((response) => {
                if (response.ok) {
                    let addrData = JSON.parse(response._bodyInit).data;
                    data.addr_id = addrData.c_info_id || '';
                    this.keepOrder();
                }
            })
        }else{
            this.keepOrder();
        }
    }

    keepOrder() {
        let { data } = this.state;
        httpService.addOrder(
            this.checkStr(data.product_name),
            data.quantity,
            data.unit_cost > 0 ? data.unit_cost : '',
            data.unit_price > 0 ? data.unit_price : '',
            this.checkStr(data.nickname),
            data.product_id,
            data.remark,
            this.checkStr(data.cate_name),
            data.hasPayed,
            data.prepay_money,
            data.addr_id,
            data.exchange_type,
            data.exchange_rate
        ).then((response) => {
            this.props.navigator.pop();
            if(response.ok) {
                if (!data.cid && (!data.unit_cost || !data.unit_price)) {
                    util.showToast('编辑商品默认价格加单算账更方便\n请到买家库编辑此买家的默认收货地址', 3000)
                } else {
                    if (!data.cid) {
                        util.showToast('请到买家库编辑此买家的默认收货地址', 3000)
                    }
                    if (!data.unit_cost || !data.unit_price) {
                        util.showToast('编辑商品默认价格加单算账更方便', 3000)
                    }
                }
                this.props.keepOrderAction && this.props.keepOrderAction(data);
                InteractionManager.runAfterInteractions(() => {
                    DeviceEventEmitter.emit('addToBuyList');
                });
            }
        });
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
        height: 40,
    },
    text: {
        fontSize: fonts.base,
        color: '#000000',
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
    borderRight: {
        borderRightWidth: lines.smallest,
        borderColor: lines.color,
    },
});