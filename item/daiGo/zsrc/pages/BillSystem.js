/**
 * 账单系统页面
 */
import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View,
	DrawerLayoutAndroid,
    Platform,
    DeviceEventEmitter
} from 'react-native';
import httpService from '../service/httpService';
import util from '../service/utilService';
import colors from '../styles/colors'
import Head from '../component/Head';
import { TabBarTop } from '../component/TabBar';
import BuyList from '../modules/billsystem/BuyList';
import PayAndSendGoodList from '../modules/billsystem/PayAndSendGoodList';
import Account from '../modules/billsystem/Account';
import SideBar from '../modules/billsystem/SideBar';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import SideMenu from 'react-native-side-menu';
import { SetTextModal,PickerModal,SetClassifyModal } from '../component/Modal';

// global.CURRENCYS = ['人民币','港币','美元'];
// global.EXCHANGERATES = [1,0.88,6.88];
global.EXCHANGE_TYPES = {};
global.EXCHANGE_NAMES = {};
// { '人民币':{exchange_rate:1,exchange_type:1} }

export default class Menu extends Component {
	constructor(props) {
		super(props);
		this.state = {
            isOpen:false,
		};
	}

	render() {
		let drawerLayout;
		if(Platform.OS == 'android'){
			drawerLayout =
                <DrawerLayoutAndroid
			        drawerWidth={220}
			        drawerPosition={DrawerLayoutAndroid.positions.left}
                    ref={ e =>this._drawer = e }
			        renderNavigationView={ _ =>
                        <SideBar billSystemOnPress={ _ => this._drawer.closeDrawer() }
                                 navigator={this.props.navigator}
                                 jumpPage={ _ => this._drawer.closeDrawer() }
                        />
			        }
                >
                    <Page leftIconAction={ _ => this._drawer.openDrawer()} navigator={this.props.navigator}/>
			    </DrawerLayoutAndroid>;
		}else{
			const menu =
                <SideBar
                    billSystemOnPress={ _ =>this.toggleSidebar_ios() }
                    navigator={this.props.navigator}
                    jumpPage={ _ => this.toggleSidebar_ios() }
                />
			drawerLayout =
                <SideMenu
                    ref={ e => this._sideMenu = e }
                    menu={menu}
                    isOpen={this.state.isOpen}
                    onChange={this.changeSidebarState}
                >
                    <Page leftIconAction={ _ => this.toggleSidebar_ios() } navigator={this.props.navigator} />
                </SideMenu>
		}
		return (
			<View style={styles.container}>
				{
					drawerLayout
				}
			</View>
		)
	}
    toggleSidebar_ios(){
        this.setState({
            isOpen:!this.state.isOpen
        })
    }
    changeSidebarState = (isOpen) => {
        this.setState({
            isOpen:isOpen
        })
    }
}


class Page extends Component {
    constructor(props) {
        super(props);
        this.cateType = 0;
    }

    shouldComponentUpdate() {
        return false;
    }

    componentDidMount(){
        this.getExchangeRateList();
        // 添加获取汇率列表的通知
        this.subscription = DeviceEventEmitter.addListener('getExchangeRateList',this.getExchangeRateList)
    }

    componentWillUnmount() {
        // 移除
        this.subscription.remove();
    }

    getExchangeRateList = () => {
        httpService.getExchangeRateList().then((response) => {
            if(response.ok) {
                let data = JSON.parse(response._bodyInit).data;
                util.saveStorage('exchangeRateList',data);
                this.dealExchangeList(data);
                // alert(JSON.stringify(data))
            }else{
                util.getStorage('exchangeRateList').then( data => {
                    if(data) {
                        this.dealExchangeList(data);
                    }
                })
            }
        },()=>{
            util.getStorage('exchangeRateList').then( data => {
                if(data) {
                    this.dealExchangeList(data);
                }
            })
        })
    }

    dealExchangeList(data) {
        EXCHANGE_NAMES = {};
        EXCHANGE_TYPES = {};
        data.map( (item,i) => {
            EXCHANGE_NAMES[item.exchange_name] = item;
            EXCHANGE_TYPES[item.exchange_type] = item;
        })
    }

    dealCustomerLength() {
        if(!this._payAndSendGoodList) {
            httpService.getBillList(2).then((response)=>{
                if(response.ok) {
                    let data = JSON.parse(response._bodyInit).data,
                        dataBlob = {},
                        length = 0;
                    util.saveStorage('payAndSendGoodList',data);
                    for (let i = 0; i < data.length; i++) {
                        let record = data[i];
                        let key = record.nickname + "_" + record.cid;
                        if (!dataBlob[key]) {
                            dataBlob[key] = true;
                            length ++;
                        }
                    }
                    this.setTabTips(length,1);
                }
            },(error)=>{
                util.getStorage('payAndSendGoodList').then((data) => {
                    if(data) {
                        let dataBlob = {},
                            length = 0;
                        for (let i = 0; i < data.length; i++) {
                            let record = data[i];
                            let key = record.nickname + "_" + record.cid;
                            if (!dataBlob[key]) {
                                dataBlob[key] = true;
                                length ++;
                            }
                        }
                        this.setTabTips(length,1);
                    }
                })
            })
        }
    }

    // 顶部三个页面切换时，关闭预购清单,收款发货页面左划打开的行并且跳转到对应的第一个页面
    closeRowAndTableRow() {
        const { _buyList, _payAndSendGoodList, _accountList } = this;
        if(_buyList) {
            _buyList.closeRowAndTableRow();
            _buyList.goToFirstPage();
        }
        if(_payAndSendGoodList) {
            _payAndSendGoodList.closeRowAndTableRow();
            _payAndSendGoodList.goToFirstPage();
        }

        if(_accountList) {
            _accountList.refreshData();
        }
    }

    scrollToTop() {
        this._buyList && this._buyList.scrollToTop();
        this._payAndSendGoodList && this._payAndSendGoodList.scrollToTop();
        this._accountList && this._accountList.scrollToTop();
    }

    setTextModal() {
        return this._setTextModal;
    }

    pickerModal() {
        return this._pickerModal;
    }

    setCateModal() {
        return this._setCateModal;
    }

    setTabTips(value,i) {
        this._tabBar.setTabTips(value,i);
    }

    leftIconAction = () => {
        this.props.leftIconAction && this.props.leftIconAction();
        this._buyList && this._buyList.blur();
        this._payAndSendGoodList && this._payAndSendGoodList.blur();
    }

    render() {
        return (
            <View style={styles.shadow}>
                <Head leftIconType="SimpleLineIcons"
                      leftIcon="menu"
                      leftIconAction={this.leftIconAction}
                      title="代代"
                      titleOnPress={ _ => this.scrollToTop() }
                      style={{paddingLeft:3}}
                />
                <View style={styles.container}>
                    <ScrollableTabView
                        renderTabBar={()=> <TabBarTop ref={ e => this._tabBar = e } tabNames={['预购清单','收款发货','记录统计']} tabTips={[0,0]} />}
                        locked={true} scrollWithoutAnimation={true}
                        onChangeTab={ obj => {
                            this.cateType = obj.i;
                            this.closeRowAndTableRow()
                        }}
                    >
                        <View style={{flex:1}} tabLabel="tab1">
                            <BuyList
                                navigator={this.props.navigator}
                                setTextModal={ _ => this.setTextModal()}
                                pickerModal={ _ => this.pickerModal()}
                                setCateModal={ _ => this.setCateModal()}
                                setTabTips={ (value,i) => this.setTabTips(value,i)}
                                dealCustomerLength={ _ => this.dealCustomerLength()}
                                cateType={ _ => this.cateType }
                                ref={ e => this._buyList = e }
                            />
                        </View>
                        <View style={{flex:1}} tabLabel="tab2">
                            <PayAndSendGoodList
                                navigator={this.props.navigator}
                                setTextModal={ _ => this.setTextModal()}
                                pickerModal={ _ => this.pickerModal()}
                                setTabTips={ (value,i) => this.setTabTips(value,i)}
                                cateType={ _ => this.cateType }
                                ref={ e => this._payAndSendGoodList = e }
                            />
                        </View>
                        <View style={{flex:1}} tabLabel="tab3">
                            <Account
                                navigator={this.props.navigator}
                                ref={ e => this._accountList = e }
                            />
                        </View>
                    </ScrollableTabView>
                </View>
                <SetTextModal ref={ e => this._setTextModal = e }/>
                <PickerModal ref={ e => this._pickerModal = e }/>
                <SetClassifyModal ref={ e => this._setCateModal = e } />
            </View>
        )
    }
}


const styles = StyleSheet.create({
	container: {
		flex:1,
        backgroundColor:colors.BackgroundGray
	},
    shadow:{
	    flex:1,
        shadowColor:'#000000',
        shadowOffset:{width:-3},
        shadowOpacity:0.1,
        shadowRadius:5
    },
});