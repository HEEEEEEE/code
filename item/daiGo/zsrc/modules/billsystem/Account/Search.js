/*记录统计模块页面之搜索模块
	流程
		进入页面时：默认显示‘输入搜索内容’
	功能
		可自定义搜索内容 然后按买家或商品搜索
 */
import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View,
	TextInput,
} from 'react-native';

import colors from '../../../styles/colors';
import fonts from '../../../styles/fonts';
import lines from '../../../styles/lines';

import { Btn } from '../../../component/Btn';

export default class Search extends Component {

	constructor(props) {
		super(props);
		this.state = {
			search:null,
		};
	}
	refreshSearch(){
		let { search } = this.state;
		this.setState({
			search:null,
		});
	}

	handleChange(e){
		this.props.handleChange(e);
	}
	handleSearch(v){
		this.props.handleSearch(v);
	}

	render(){
		return (
			<View style={styles.container}>
				<View style={styles.search_input_view}>
					<TextInput
						ref={ e => this._search = e }
						value={this.state.search}
						onChangeText={(search) => this.setState({search})}
						onChange={(e) => this.handleChange(e.nativeEvent.text)}
						style={styles.search_input}
						placeholder="输入搜索内容"
						underlineColorAndroid="transparent"
                        returnKeyType="done"
					/>
				</View>

				<View style={styles.search_kind_view}>
					<View style={styles.search_kind_view_in}>
						<Btn title='搜买家'
							 style={[styles.btn_view,styles.btn_view_m1,styles.btn_view_r1]}
							 textStyle={styles.btn_text}
							 onPress={this.handleSearch.bind(this,0)}
						/>
						<Btn title='搜商品'
							 style={[styles.btn_view,styles.btn_view_r2]}
							 textStyle={styles.btn_text}
							 onPress={this.handleSearch.bind(this,1)}
						/>
					</View>
				</View>
			</View>
		);
	}
}
const styles = StyleSheet.create({
	container:{
		flexDirection:'row',
		backgroundColor:colors.BackgroundGray,
		paddingTop: 5,
		paddingBottom: 5,
		paddingRight: 10,
		paddingLeft: 10,
	},
		search_input_view:{
			flex:1,
			justifyContent:'center',
		},
			search_input:{
				flex:1,
				height: 27,
				padding: 0,//垂直居中的关键
				paddingLeft: 13.5,
				paddingRight: 124,
				backgroundColor: '#ffffff',
				borderWidth: lines.smallest,
				borderRadius: 13.5,
				borderColor: '#cccccc',
				textAlign: 'left',
				fontSize: fonts.h4,
				color:'#bbbbbb',
			},

	search_kind_view:{
		 position:'absolute',
		 top:5,
		 bottom:5,
		 right:10,
		 zIndex:2499,
	},
	search_kind_view_in:{
		flexDirection:'row',
	},
		btn_view:{
			backgroundColor:colors.DarkBlue,
			justifyContent:'center',
			alignItems:'center',
			width:55,
			height:27,
			borderWidth: lines.smallest,
			borderColor: '#316795',
		},
btn_view_m1:{
	marginRight:0.5,
},
btn_view_r1:{
	borderTopLeftRadius: 13.5,
	borderBottomLeftRadius: 13.5,
},
btn_view_r2:{
	borderTopRightRadius: 13.5,
	borderBottomRightRadius: 13.5,
},
			btn_text:{
				textAlign: 'center',
				color: '#ffffff',
				fontSize: fonts.h5,
			},
})