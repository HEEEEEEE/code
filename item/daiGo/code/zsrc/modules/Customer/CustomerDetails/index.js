/**
 * 客户详情编辑页面
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    ScrollView,
    Dimensions,
    DeviceEventEmitter,
    Platform,
    KeyboardAvoidingView
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import httpService from '../../../service/httpService';
import util from '../../../service/utilService';

import Head from '../../../component/Head';
import { Btn } from '../../../component/Btn';
import { colors,fonts,lines,btnStyle } from '../../../styles';

import ManageAddress from '../../address/ManageAddress';

let KeyboardView = Platform.OS == 'ios' ? KeyboardAvoidingView : View;

export default class CustomerDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cid: this.props.cid || null,
            nickname:this.props.nickname || null,
            address_name:null,
            address_phone:null,
            address_addressDefault:null,
        }
    }

    getData = () => {
        httpService.getCustomerDefaultAddress(this.state.cid).then((response)=>{
            let dataReturn = JSON.parse(response._bodyInit).data;
            if(!dataReturn.name){
                this.setState({
                    address_name:null,
                    address_phone:null,
                    address_addressDefault:null,
                })
            }else{
                this.setState({
                    address_name:dataReturn.name,
                    address_phone:dataReturn.tel,
                    address_addressDefault:dataReturn.address,
                })
            }
        });
    }
    componentDidMount(){
        setTimeout(()=>{
            this.getData();
        },0)
    }

    manageAddress() {
        this.props.navigator.push({
            name:'ManageAddress',
            component: ManageAddress,
            params: {
                cid:this.state.cid,
                callback: this.getData
            }
        })
    }

    render() {
        let { nickname, address_name, address_phone, address_addressDefault} =this.state;
        return (
            <View style={styles.container}>
                <Head
                    title="客户详情"
                    leftIconType="SimpleLineIcons"
                    leftIcon="arrow-left"
                    backgroundColor="#E4E4E4"
                    titleStyle={{color:"#000000"}}
                    color="#000000"
                    leftIconAction={() => this.props.navigator.pop()}
                />
                <KeyboardView behavior='padding' style={{flex: 1}}>
                    <ScrollView style={styles.body}>
                        <View style={styles.title}>
                            <View style={styles.title_view}>
                                <View style={styles.avatar_view}>
                                    <Icon name="users" size={25}/>
                                </View>
                                <View style={styles.name_view}>
                                    <TextInput
                                        ref={ e => this._changeNickName = e }
                                        value={nickname}
                                        onChangeText={(nickname) => this.setState({nickname})}
                                        style={styles.search_input}
                                        underlineColorAndroid="transparent"
                                        returnKeyType="done"
                                    />
                                </View>
                            </View>
                        </View>
                        <View style={styles.details}>
                                <Btn
                                    style={{backgroundColor:'#ffffff'}}
                                    onPress={ _ => this.manageAddress()}
                                >
                                    <View style={styles.view_item}>
                                        <Text style={[styles.text,{flex:1}]}>快递地址管理</Text>
                                        <View style={styles.iconView}>
                                            <Icon name="chevron-right" size={20} color="#cccccc"/>
                                        </View>
                                    </View>
                                </Btn>
                            <View style={styles.details_view}>
                                <View style={[styles.view_item,{flex:1}]}>
                                    <Text style={[styles.text,styles.text_little]}>姓名:</Text>
                                    <Text style={styles.textInput} numberOfLines={1}>{address_name}</Text>
                                </View>
                                <View style={[styles.view_item,{flex:1}]}>
                                    <Text style={[styles.text,styles.text_little]}>电话:</Text>
                                    <Text style={styles.textInput} numberOfLines={1}>{address_phone}</Text>
                                </View>
                            </View>
                                <View style={[styles.view_item,styles.view_itemLeft]}>
                                    <Text style={[styles.text,styles.text_little,styles.text_blue]}>[默认地址]:</Text>
                                    <Text style={styles.textInput} numberOfLines={1}>{address_addressDefault}</Text>
                            </View>
                        </View>
                    </ScrollView>
                    <Btn title="保存"
                         style={btnStyle.strip.btn}
                         textStyle={btnStyle.strip.btn_text}
                         onPress={this.save}/>
                </KeyboardView>
            </View>
        );
    }

    // 去除文本开头和结尾的空格
    checkStr(str) {
        str = str.replace(/(^\s+)|(\s+$)/g,"");
        return str;
    }

    save = () => {
        let { cid, nickname } = this.state;
        nickname = this.checkStr(nickname);
        httpService.changeCustomerNickName(cid,nickname).then((response)=>{
            if(response.ok) {
                this.props.callback && this.props.callback(nickname);//
                this.props.navigator.pop()
                if(nickname != this.props.nickname) {
                    DeviceEventEmitter.emit('addToBuyList',cid,'cid');
                    DeviceEventEmitter.emit('addToPayAndSend',cid,'cid');
                }
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
            title:{
                backgroundColor:'rgba(255,255,255,1)',
                marginTop: 10,
            },
                title_view:{
                    flexDirection:'row',
                    paddingTop:5,
                    paddingBottom:5,
                    paddingLeft:15,
                    paddingRight:15,
                },
                    avatar_view:{
                        justifyContent:'center',
                        alignItems:'center',
                        width:50,
                        height:50,
                        borderWidth:lines.smallest,
                    },
                        avatar_image:{
                        },
                    name_view:{
                        justifyContent:'center',
                        alignItems:'center',
                        height:50,
                        paddingLeft:5,
                        paddingRight:15,
                        borderWidth:lines.smallest,
                        borderColor:'rgba(0,0,0,0)',
                    },
                        search_input:{
                            flex:1,
                            padding: 0,//垂直居中的关键
                            width:(Dimensions.get('window').width)-100,
                            backgroundColor: '#ffffff',
                            borderWidth:0,
                            color: '#000000',
                            fontSize: fonts.h2,
                            textAlign:'left',
                        },
            details:{
                flexDirection:'column',
                backgroundColor:'rgba(255,255,255,1)',
                marginTop: 10,
            },
                details_view: {
                    flexDirection:'row',
                },
                    view_item: {
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginLeft: 15,
                        marginRight: 10,
                        height:40,
                    },
                    view_itemLeft: {
                        marginLeft: 15,
                    },
                        text: {
                            fontSize: fonts.h3,
                            color: '#000000',
                        },
                            text_little: {
                                fontSize:fonts.h3,
                            },
                            text_blue: {
                                color:colors.Blue,
                            },
                        textInput: {
                            flex:1,
                            fontSize: fonts.h3,
                            color: '#000000',
                            marginLeft: 10,
                            padding: 0,
                            borderWidth: 0,
                        },
                        iconView: {
                            width:25,
                            alignItems:'center',
                            justifyContent:'center'
                        }
});