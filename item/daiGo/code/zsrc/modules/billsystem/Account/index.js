/*记录统计模块页面
	记录统计模块其子模块如下所示
		1日期 DateSelect
		2搜索 Search
		3列表 List
		4计算 Calculation
 */
import React, { Component } from 'react';
import {
	StyleSheet,
	View,
	Text,
	ScrollView,
	RefreshControl,
	TouchableOpacity,
	Alert,
	DeviceEventEmitter,
} from 'react-native';

import colors from '../../../styles/colors';
import fonts from '../../../styles/fonts';

import httpService from '../../../service/httpService';

import { Btn } from '../../../component/Btn';

import DateSelect from './DateSelect';
import Search from './Search';
import List from './List';
import Calculation from './Calculation';

import util from '../../../service/utilService';

export default class Account extends Component {

	constructor(props) {
		super(props);
		this.state = {
			dataSource:null,//数据源[日期 来自service 目前只在用户的删除操作下变化

			dataFilter:[],//被过滤后的数据源 用于内容 ...的检索[内容 来自dataSource
				dateStart:util.formatDate('','',6),//开始日期 '2016-12-01'
				dateEnd:util.formatDate(),//截止日期 util.formatDate()
				search:null,//搜索数据
				searchType: 0,//搜索类型 0代表按买家搜 1代表按商品搜
		};
	}

	getData() {
		let { dateStart, dateEnd } = this.state;
		httpService.getFinalBillList(dateStart,dateEnd).then((response)=>{
			let data = JSON.parse(response._bodyInit).data;
			this.setState({
				dataSource:data,
				dataFilter:data,
			})
		});
	}

	componentDidMount(){
		setTimeout(()=>{
			//this.getData();
		},0);
		// 添加获取数据的通知
		//this.subscription = DeviceEventEmitter.addListener('addToAccount',(obj) => {
		//	this.getData();
		//})

		//in PayAndSendGoodList index finish and finishAll
		/*
		 if(response.ok) {
			 this.deleteTableRow(data);
			 // 调用记录统计页面的通知
			 DeviceEventEmitter.emit('addToAccount', data);
		 }
		 */
	}
	//shouldComponentUpdate(nextProps,nextState){
	//	return this.state.dataEcho !== nextState.dataEcho;
	//}

	//componentWillUnmount() {
	//	// 移除
	//	this.subscription.remove();
	//}
	refreshData(){
		httpService.getFinalBillList(util.formatDate('','',6),util.formatDate()).then((response)=>{
			let data = JSON.parse(response._bodyInit).data;
			this.setState({
				dataSource:data,
				dataFilter:data,
			})
		});
		this._dateSelect &&  this._dateSelect.refreshDate();
		this._search &&  this._search.refreshSearch();

	}


	//当用户在日期选择界面选中确定按钮后
	handlePickerConfirm(date,who){
		let { dateStart, dateEnd, search, searchType } = this.state;
		if( who == 'dateStart' ){
			//重设起始日期数据
			httpService.getFinalBillList(date,dateEnd).then((response)=>{
				let data = JSON.parse(response._bodyInit).data;
				//alert(JSON.stringify(data));
				let dataF = this.filterData(data, this.formatTimestamp(date), this.formatTimestamp(dateEnd), search, searchType);
				this.setState({
					dataFilter:dataF ,
					dateStart: date,
					dataSource: data,
				})
			});
		}else{
			//重设截止日期数据
			httpService.getFinalBillList(dateStart,date).then((response)=>{
				let data = JSON.parse(response._bodyInit).data;
				let dataF = this.filterData(data, this.formatTimestamp(dateStart), this.formatTimestamp(date), search, searchType);
				this.setState({
					dataFilter: dataF,
					dateEnd: date,
					dataSource: data,
				})
			});
		}
	}

	//当用户改变搜索框内容时
	handleChange(data){
		if(data.length != 0){
			this.setState({
				search: data,
			});
		}else{
			let { dataSource, dateStart, dateEnd, searchType } = this.state;
			let dataF = this.filterData(dataSource, this.formatTimestamp(dateStart), this.formatTimestamp(dateEnd), null, searchType);
			this.setState({
				dataFilter: dataF,
					search: null,
			})
		}
	}

	//当用户在搜索框输入数据并点击按钮后
	handleSearch(type){
		let { dataSource, dateStart, dateEnd, search } = this.state;
		let dataF = this.filterData(dataSource, this.formatTimestamp(dateStart), this.formatTimestamp(dateEnd), search, type);
			//重设搜索数据
		this.setState({
			dataFilter:dataF,
				searchType: type,
		});
	}

	alertPrompt(content,callback){
		Alert.alert(
			'提示',
			content,
			[
				{text:'取消'},
				{
					text:'确认',
					onPress:callback
				}
			]
		)
	}
	//当用户删除列表数据后
	handleDelete(indexSource, indexFilter, oid){
		let { dataSource, dataFilter, dataEcho } = this.state;
		dataSource.splice(indexSource,1);
		dataFilter.splice(indexFilter,1);
		httpService.updateOrderStatus(oid,0).then((response)=>{
			if(response.ok) {
				this.setState({
					dataSource:dataSource,//重置数据源
					dataFilter:dataFilter,//重置过滤数据
				})
				//this.setState({
				//	dataSource:dataSource,//重置数据源
				//	dataFilter:dataFilter.length == 0?(0):(filterData),//重置过滤数据
				//})
			}
		});
	}

	// 所有列表滚回顶部
	scrollToTop() {
		 this._accountList && this._accountList.scrollTo({y: 0, animated: true});
	}

	//点击当前页面的底部tab,当前页面列表滚回顶部
	BottomOnPress() {
		this._accountList && this._accountList.scrollTo({y: 0, animated: true});
	}

	render(){
		let { dataSource, dataFilter } = this.state;

		if( dataSource == null ){
			return (
                <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
                    <Text style={{fontSize:fonts.h3}}>正在加载中···</Text>
                </View>
			)
		}
		return (
			<View style={styles.container}>
				<DateSelect
					handlePickerConfirm={this.handlePickerConfirm.bind(this)}
					ref={ e => this._dateSelect = e }
				/>
                <View style={{flex:1}}>
                    <List
                        dataSource={dataSource}
                        dataFilter={dataFilter}
                        headComponent={ _ =>
                            <View>
                                <Search
                                    handleChange={this.handleChange.bind(this)}
                                    handleSearch={this.handleSearch.bind(this)}
                                    ref={ e => this._search = e }
                                />
                            </View>
                        }
                        handleDelete={ (indexSource, indexFilter, oid) => this.alertPrompt('确认删除?', _ => this.handleDelete(indexSource, indexFilter, oid))}
                    	ref={ e => this._accountList = e }
					/>
                    {
                        dataSource.length <= 0?(
							<View style={styles.noContainer}>
								<Text style={styles.noFirst}>!</Text>
								<Text style={styles.noSecond}>这段时间没订单O</Text>
							</View>
                        ):dataFilter.length <= 0?(
							<View style={styles.noContainer}>
								<Text style={styles.noFirst}>!</Text>
								<Text style={styles.noSecond}>这个地方没订单O</Text>
							</View>
                        ):null
                    }
                </View>
                <Calculation
                    data={dataFilter.length <= 0 || dataSource.length <= 0?([]):(dataFilter)}
                    keyboardDidShow={() => this.keyboardDidShow()}
                    keyboardDidHide={() => this.keyboardDidHide()}
					BottomOnPress={()=> this.BottomOnPress()}
                />
			</View>
		)
	}
	//键盘监听
	keyboardDidShow(){
		// this._accountList.setNativeProps({style:{marginBottom:0}})
	}
	keyboardDidHide(){
		// this._accountList.setNativeProps({style:{marginBottom:80}})
	}
	//数据过滤
	//filterData(dateStart, dateEnd, search, searchType)
		/*
		* 功能
		* 根据参数[日期,搜索内容]的变化对数据源进行过滤
		* 参数
		*	dataSource=》数据源
		*		数据类型: 一维数组
		*	ateStart=》开始日期
		*		数据类型：Object=》Date=》Timestamp
		*	dateEnd=》截止日期
		*		数据类型：Object=》Date=》Timestamp
		*	 search=》搜索数据
		*		数据类型：String
		*	 searchType=》搜索类型
		*		 数据类型：Number　0代表按买家搜 1代表按商品搜
		*
		*	返回值
		*		一维数组
		 */

	filterData(data, dateStart, dateEnd, search, searchType){
		let d = [];
		if(search == null){
			data.map((i,k)=>{
				let date =this.formatTimestamp(i.buy_time);
				if(date >= dateStart && date <= dateEnd){
						d.push(i);
				}
			});
		}else{
			data.map((i,k)=>{
				let date =this.formatTimestamp(i.buy_time);

				let s = new RegExp(search,"i");
				let text =s.test(searchType == 0?(i.nickname):(i.product_name));
				if(text == true && date >= dateStart && date <= dateEnd){
						d.push(i);
				}
			});
		}
		//alert(d.length);
		//this.setState({
		//	dataFilterTotalL:d.length,
		//	//dataFilterEchoL:3,
		//});
		//return d.length <= 0?([]):(d.slice(0,12));
		  return d;
	}

	//将任意日期转时间戳
	formatTimestamp(date){
		if(date.indexOf('T') == -1){
			var d = new Date(date.replace(/\-/g, '/')).getTime();
		}else{
			let filterDate = date.split('T');
			var d = new Date(filterDate[0].replace(/\-/g, '/')).getTime();
		}
		return d;
	}
}



const styles = StyleSheet.create({
container:{
	flex:1,
	backgroundColor:colors.BackgroundGray,
},

noContainer: {
	flex: 1,
	justifyContent: 'center',
	alignItems: 'center',
},
	noFirst: {
		fontSize: fonts.h1,
		textAlign: 'center',
		color: 'rgba(255,0,0,1)',
		marginBottom: 5,
	},
	noSecond: {
		fontSize: fonts.h3,
		textAlign: 'center',
		color: 'rgba(125,50,0,0.5)',
		marginBottom: 12,
	},
})