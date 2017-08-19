/*记录统计模块页面之计算模块
	流程
		进入页面时：默认计算出最新一周的订单数据
	功能
		计算
			与日期结合
				计算出这段时间的订单记录
			与搜索结合
				计算出搜索的内容在这段日期的订单记录
 */
import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View,
	Keyboard,
	TouchableOpacity,
    Platform
} from 'react-native';

import colors from '../../../styles/colors';
import fonts from '../../../styles/fonts';
import lines from '../../../styles/lines';

export default class Calculation extends Component {

	constructor(props) {
		super(props);
		this.state = {
		};
	}
	static defaultProps = {
		height: 90,
	};
	componentWillMount () {
        if (Platform.OS === 'android') {
            this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow.bind(this));
            this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide.bind(this));
        }
	}
	componentWillUnmount () {
        if (Platform.OS === 'android') {
            this.keyboardDidShowListener.remove();
            this.keyboardDidHideListener.remove();
        }
	}

	_keyboardDidShow () {
		this.refs.refContainer.setNativeProps({
			style: {
				height: 0,
				opacity: 0
			}
		})
		this.props.keyboardDidShow && this.props.keyboardDidShow();
	}
	_keyboardDidHide () {
		this.refs.refContainer.setNativeProps({
			style: {
				height: this.props.height,
				opacity: 1
			}
		})
		this.props.keyboardDidHide && this.props.keyboardDidHide();
	}

	BottomOnPress() {
		this.props.BottomOnPress && this.props.BottomOnPress();
	}
	render(){
		let { data, height } = this.props;

		let cost = 0, mail = 0, price = 0;
		if(data.length != 0){
			let cid = {};
			for(i=0;i<data.length;i++){
				if(
					data[i].unit_cost != null &&
					data[i].unit_price != null
				){
					cost += data[i].quantity　*　data[i].unit_cost * data[i].exchange_rate;
					let key = `${data[i].cid}_${data[i].send_time}`;
					if(!cid[key]){
						cid[key] = true;
						mail += data[i].mail_pay;
					}
					price += data[i].quantity　*　data[i].unit_price;
				}
			}
		}
		let d = [
			{title:'商品成本（元）',num:cost,},{title:'邮费成本（元）',num:mail,},{title:'总收入（元）',num:price,},
			{title:'总盈利（元）',num:price -(cost + mail),}
		];
		let conSingleTitle = <View style={[styles.single,{paddingBottom:0}]}>{
			d.map((i,k) =>{
				if(k < 3){
					return (
						<Text style={styles.single_text}>{i.title}</Text>
					)
				}
			})
		}</View>;
		let conSingleNum = <View style={[styles.single,{paddingTop:0}]}>{
			d.map((i,k) =>{
				if(k < 3){
					return (
						<Text style={styles.single_num} numberOfLines={1}>{i.num.toFixed(1).toString()}</Text>
					)
				}
			})
		}</View>;
		let conTotal = <View style={styles.total}>
			<Text style={styles.total_text}>{d[3].title}</Text>
			<Text style={styles.total_num} numberOfLines={1}>{d[3].num.toFixed(1).toString()}</Text>
		</View>;


		return (
			<View
				style={[styles.container,{height:height}]}//
				ref='refContainer'
			>
				<TouchableOpacity
					activeOpacity={0.8}
					onPress={() => this.BottomOnPress()}
					style={styles.buttonClick}
				>
				</TouchableOpacity>
				{conSingleTitle}{conSingleNum}{conTotal}
			</View>
		)
	}
	filterMail(data){
		let d = [];
		data.map((i)=>{

		});
	}
}
const styles = StyleSheet.create({
container:{
	// position:'absolute',
	// bottom:0,
	// left:0,
	// right:0,
	// zIndex:2499,
},
	buttonClick:{
		 position:'absolute',
		 top:0,
		 bottom:0,
		 left:0,
		 right:0,
		 zIndex:2499,
	},
	single:{
		flexDirection:'row',
		paddingTop:5,
		paddingBottom:5,
		backgroundColor:'#3066ca',
		alignItems: 'center',
		justifyContent: 'center',
	},
		single_text:{
			flex:1,
			textAlign: 'center',
			color:'rgba(255,255,255,0.75)',
			fontSize: fonts.h5,
		},
		single_num:{
			flex:1,
			textAlign: 'center',
			color: '#ffffff',
			fontSize: fonts.h3,
		},

	total:{
		flexDirection:'row',
		paddingTop:12.5,
		paddingBottom:12.5,
		backgroundColor:colors.DarkBlue,
		alignItems: 'center',
		justifyContent: 'center',
	},
		total_text:{
			flex:1,
			paddingRight:5,
			textAlign: 'right',
			color: '#ffffff',
			fontSize: fonts.h5,
		},
		total_num:{
			flex:1,
			paddingLeft:5,
			color: '#ffffff',
			textAlign: 'left',
			fontSize: fonts.h1,
		}
})