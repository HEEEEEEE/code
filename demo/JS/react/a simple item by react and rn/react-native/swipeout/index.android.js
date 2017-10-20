/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';

import Swipeout from 'rn-swipe-out';
	
		class ShopMenu extends Component{
			option = {
				text:'删除',
				style:{
					backgroundColor:'#FF0000',
					color:'#FFFFFF',
					fontSize:20,
				}
			}
			constructor(props){
				super(props);
				this.state ={num:0};
			}
			shopPress(val){
				this.setState({num:val});
			}
			render(){
				return(
						<Swipeout style={styles.shopMenu} right={this.option}>
							<View style={styles.shopMenuCon1}><View style={styles.shopMenuCon1_con}></View></View>
							<View style={styles.shopMenuCon2}>
								<Text style={styles.shopMenuCon2_con}>买家:</Text>
								<Text style={styles.shopMenuCon2_con}>{this.props.buyer}</Text>
								<Text style={styles.shopMenuCon2_con3}>商品:</Text>
								<Text style={styles.shopMenuCon2_con}>{this.state.num}</Text>
								<Text style={styles.shopMenuCon2_con}>件</Text>
							</View>
							<View style={styles.shopMenuCon3}>
								<View style={styles.shopMenuCon3_con}><Text onPress={this.shopPress.bind(this,this.state.num +1)} style={styles.shopMenuCon3_con_Add}>加单</Text></View>
							</View>
						</Swipeout>
				)
			}
		}
		class ShopPay extends Component{
			render(){
				return(
					<View style={styles.shopPay}>
						<View style={styles.shopPayCon1}></View>
					</View>
				)
			}
		}
		class ShopRecord extends Component{
			render(){
				return(
					<View style={styles.shopRecord}>
						<View style={styles.shopRecordCon1}></View>
					</View>
				)
			}
		}

	class Header extends Component{
		render(){
			return(
				<View style={styles.header}>
					<Text style={styles.hea_con}>代go</Text>
				</View>
			)
		}
	}
export default class HelloHello extends Component {
	constructor(props){
		super(props);
		this.state ={nav:0};
	}
	navPress(val){
		this.setState({nav:val});
	}
	render() {
		let shop = [
			{key:0,buyer:'凹凸曼'},
			{key:1,buyer:'Ferruccio'},
			{key:2,buyer:'Jack'},
			{key:3,buyer:'Nikola'},
			{key:4,buyer:'となりのトトロ'},
		];
		let shopMenu = <View style={styles.shopMenuToptag}>{
			shop.map( (s) => (<ShopMenu key={s.key} buyer={s.buyer} />) )
		}</View>;
		return (
			<View style={styles.container}>
				<Header />
				<View style={styles.navigation}>
					<View style={styles.nav_c}><Text onPress={this.navPress.bind(this,0)} style={[styles.nav_con,this.state.nav ==0 ?(styles.nav_conPress):(styles.nav_conPressNo)]}>预购清单</Text></View>
					<View style={[styles.nav_c,styles.nav_cBor]}><Text onPress={this.navPress.bind(this,1)} style={[styles.nav_con,this.state.nav ==1 ?(styles.nav_conPress):(styles.nav_conPressNo)]}>收款发货</Text></View>
					<View style={[styles.nav_c,styles.nav_cBor]}><Text onPress={this.navPress.bind(this,2)} style={[styles.nav_con,this.state.nav ==2 ?(styles.nav_conPress):(styles.nav_conPressNo)]}>记录统计</Text></View>
				</View>
				<View style={styles.search}></View>
				<ScrollView style={styles.content}>
					{
						this.state.nav ==0 ?(
							shopMenu
						): this.state.nav ==1 ?(
							<ShopPay />
						):(
							<ShopRecord />
						)
					}
				</ScrollView>
			</View>
		);
	}
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#E4E4E4',
    flex: 1,
  },

	//header
	header: {
		height:45,
		backgroundColor:'#5FC89D',
		justifyContent:'center',
		margin:0,
	},
		hea_con: {
			alignSelf:'center',
			fontSize:25,
			color:'#FFFFFF'
		},
	//navigation
    navigation: {
		height:45,
		backgroundColor:'#FFFFFF',
		borderBottomWidth:4,
		borderBottomColor:'#EEE',
		flexDirection:'row',
		margin:0,
    },
		nav_c: {
			borderLeftColor:'#EEE',
			flex:1,
		},
		nav_cBor: {
			borderLeftWidth:1,
		},
			nav_con: {
				width:'100%',
				height:'100%',
				textAlign:'center',
				lineHeight:30,
				fontSize:17,
			},
			nav_conPress: {
				backgroundColor:'#5FC89D',
				color:'#FFFFFF'
			},
			nav_conPressNo: {
				backgroundColor:'#FFFFFF',
				color:'#414141'
			},
	//search
	search: {
		height:35,
		marginTop:8,
		marginRight:12,
		marginBottom:0,
		marginLeft:12,
		backgroundColor:'#FFFFFF',
		borderRadius:2,
	},
	//content (from navigation)
    content: {
		marginTop:8,
    },
		//shopMenu
		ShopMenuTogtag: {
			height:125,
		},
		shopMenu: {
			height:125,
			backgroundColor:'#FFFFFF',
			borderBottomWidth:2,
			borderBottomColor:'#EEE',
			justifyContent:'center',
		},
			shopMenuCon1: {
				flex:3,
				marginTop:8,
				marginLeft:12,
			},
				shopMenuCon1_con:{
					height:0,
					borderColor:'transparent',
					borderLeftColor:'#5FC89D',
					borderWidth:10,
				},
			shopMenuCon2: {
				flex:6,
				flexDirection:'row',
				justifyContent:'center',
				flexWrap:'wrap',
			},
				shopMenuCon2_con: {
					marginTop:8,
					fontSize:15,
					color:'#414141',
				},
				shopMenuCon2_con3: {
					marginTop:8,
					marginLeft:5,
					fontSize:15,
					color:'#414141',
				},
			shopMenuCon3: {
				flex:3,
				flexDirection:'row',
				justifyContent:'flex-end',
				alignItems:'flex-end',
				marginRight:12,
			},
				shopMenuCon3_con: {
					width:70,
					height:35,
					backgroundColor:'#FF7D00',
					borderRadius:2,
					justifyContent:'center',
					marginBottom:8,
				},
					shopMenuCon3_con_Add: {
						alignSelf:'center',
						fontSize:15,
						color:'#FFFFFF',
					},
	//shopPay
	shopPay: {
		height:125,
		backgroundColor:'#FFFFFF',
		flexDirection:'row',
		justifyContent:'center',
	},
		shopPayCon1: {
			width:125,
			height:125,
			backgroundColor:'#5FC89D',
			borderRadius:125,
		},
	//shopRecord
	shopRecord: {
		height:125,
		backgroundColor:'#FFFFFF',
		flexDirection:'row',
		justifyContent:'center',
	},
		shopRecordCon1: {
			width:125,
			height:125,
			backgroundColor:'#5FC89D',
			borderRadius:5,
		},
});

AppRegistry.registerComponent('HelloHello', () => HelloHello);
