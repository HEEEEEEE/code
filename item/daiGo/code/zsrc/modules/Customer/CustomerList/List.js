/*客户列表模块页面之列表模块
 */
import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View,
	ListView,
	TouchableOpacity,
} from 'react-native';

import colors from '../../../styles/colors';
import fonts from '../../../styles/fonts';
import lines from '../../../styles/lines';

import Icon from 'react-native-vector-icons/FontAwesome';
import util from '../../../service/utilService';

import { SwipeListView,SwipeRow } from '../../../component/SwipeListView/index';
import { Btn } from '../../../component/Btn';
import CustomerDetails from '../CustomerDetails';

export default class List extends Component {

	constructor(props) {
		super(props);
		var ds = new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!==r2});
		this.state = {
			normalListDs:ds,
		};
	}

	deleteRow(key,keyName,rowData){
		// let { dataSource, dataFilter } = this.props;
		// for(var i = 0; i < dataSource.length; i++ ){
		// 	if(dataSource[i][keyName] == key){
		// 		dataSource.splice(i,1);
		// 		i--;
		// 	}
		// }
		// for(var i = 0; i < dataFilter.length; i++ ){
		// 	if(dataFilter[i][keyName] == key){
		// 		dataFilter.splice(i,1);
		// 		i--;
		// 	}
		// }
		this.props.handleDelete(key, keyName, rowData);
	}

	renderRow = (rowData, secId, rowId, rowMap) => {
		return (
			<SwipeRow
				underlayColor="#0000ff" activeOpacity={0.7} disableRightSwipe={true} rightOpenValue={-50}
			>
				<View style={styles.hide}>
					<Btn
						title="删除"
						style={styles.btn_view}
						textStyle={styles.btn_text}
						onPress={() => {
							rowMap[`${secId}${rowId}`].closeRow();
							this.deleteRow(rowData.id || rowData.cId,rowData.id?('id'):('cId'),rowData);
                     	}}
					/>
				</View>
				<View style={styles.show}>
					<View style={styles.avatar_view}>
						<Icon name="users" size={25} color={colors.Gray}/>
					</View>
					<View style={styles.name_view}>
						<Text style={styles.name_text} numberOfLines={1}>
							{rowData.nickname}
						</Text>
					</View>

				</View>
			</SwipeRow>
		)
	}
	refreshData(e,rowData){
		let { dataSource, dataFilter } = this.props;
		indexFilter = dataFilter.indexOf(rowData),
		indexSource = dataSource.indexOf(rowData);
		dataSource[indexSource].nickname = e;
		dataFilter[indexFilter].nickname = e;
		this.props.refreshData(dataSource, dataFilter);
	}
	jumpCustomerDetails(rowData) {
		//util.showToast('正在开发中,敬请期待');
		//alert(rowData.id || rowData.cId);
		this.props.navigator.push({
			name:'CustomerDetails',
			component:CustomerDetails,
			params:{
				cid: rowData.id || rowData.cId,
				nickname:rowData.nickname,
				callback: (e)=>{this.refreshData(e,rowData)}
			}
		})
	}

	scrollTo(obj) {
		this._list.scrollTo(obj);
	}

	render(){
		let { dataSource, dataFilter, ...props } = this.props;
		return (
			<View style={styles.container}>
				<SwipeListView
					dataSource={this.state.normalListDs.cloneWithRows(dataFilter)}
					renderRow={this.renderRow}
					onRowPress={
						(rowData) => this.jumpCustomerDetails(rowData)
					}
					ref={ e => this._list = e }
					keyboardDismissMode="on-drag"
					{...props}
				/>
			</View>
		);
	}
}
const styles = StyleSheet.create({
	container:{
		flex:1,
	},

		hide:{
			flex:1,
		},
			btn_view:{
				position:'absolute',
				top:0,
				bottom:0,
				right:0,
				backgroundColor:colors.Red,
				width:50,
			},
			btn_text:{
				color: '#ffffff',
				fontSize: fonts.h3,
			},

		show:{
			flexDirection:'row',
			backgroundColor:'rgba(255,255,255,1)',
			paddingTop:5,
			paddingBottom:5,
			paddingLeft:10,
			paddingRight:10,
			borderBottomWidth:lines.smallest,
			borderColor:'#cccccc',
		},
			avatar_view:{
				justifyContent:'center',
				alignItems:'center',
				width:50,
				height:50,
				borderWidth:lines.smallest,
                borderColor: lines.color
			},
				avatar_image:{
				},
			name_view:{
				justifyContent:'center',
				alignItems:'center',
				height:50,
				paddingLeft:5,
				paddingRight:10,
				borderWidth:lines.smallest,
				borderColor:'rgba(0,0,0,0)',
			},
				name_text:{
					color: '#000000',
					fontSize: fonts.h3,
					textAlign:'left',
				},
})