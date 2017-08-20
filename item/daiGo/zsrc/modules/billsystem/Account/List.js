/*记录统计模块页面之清单模块
	流程
		进入页面时：默认打印出最新一周的订单记录
	功能
		1左滑可删除单个订单记录
		2搜索
			与日期结合
				自定义起始日期 至 截止日期时：打印出这段时间的订单记录
			与搜索结合
				自定义搜索内容时：根据内容及方式结合日期打印出订单记录
 */
import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View,
} from 'react-native';

import colors from '../../../styles/colors';
import fonts from '../../../styles/fonts';
import lines from '../../../styles/lines';
import tableStyle from '../../../styles/table';

import { Btn } from '../../../component/Btn';
import Table from '../../../component/Table';

export default class List extends Component {

	constructor(props) {
		super(props);
		this.state = {
		};
	}

	deleteTableRow(rowData){
		let { dataSource, dataFilter } = this.props;
		indexFilter = dataFilter.indexOf(rowData),
		indexSource = dataSource.indexOf(rowData);

		this.props.handleDelete(indexSource, indexFilter, rowData.oid);
	}
	_renderHiddenRow = (rowData,secId,rowId,rowMap) => {
		return (
			<View style={{flex:1}}>
				<Btn title="删除"
					 style={styles.delete_view}
					 textStyle={styles.delete_text}
					 onPress={() => {
					 	rowMap[`${secId}${rowId}`].closeRow();
						this.deleteTableRow(rowData,rowId);
                     }}
				/>
			</View>
		)
	}
	renderTableRow = (rowData,secId,rowId) => {
		//computer
			//
		return (
			<View>
				<Btn
					title={rowData.nickname}
					style={styles.btnView}
					textStyle={styles.date_Text}
					activeOpacity={1}
				/>
				<Btn
					title={rowData.product_name}
					style={styles.btnView}
					textStyle={styles.date_Text}
					activeOpacity={1}
				/>
				<Btn
					title={rowData.quantity}
					style={styles.btnView}
					textStyle={styles.date_Text}
					activeOpacity={1}
				/>
				<Btn
					title={rowData.unit_cost != null ?((rowData.unit_cost * rowData.exchange_rate).toFixed(1)):('')}
					style={styles.btnView}
					textStyle={styles.date_Text}
					activeOpacity={1}
				/>
				<Btn
					title={rowData.unit_price != null ?((rowData.unit_price * 1).toFixed(1)):('')}
					style={styles.btnView}
					textStyle={styles.date_Text}
					activeOpacity={1}
				/>
			</View>
		)
	}

	scrollTo(obj) {
		this._list.scrollTo(obj);
	}

	render(){
		//table_col_names={['nickname','product_name','quantity','unit_cost','unit_price']}
		let { dataSource,dataFilter,dataEcho,...props } = this.props;
		return (
		    <View>
				<Table
					dataBlob={dataFilter}
					flex={[5,5,2,2,2]}
					table_head_cols={['买家','商品名','数量','进价','售价']}
					headStyle={styles.header_view}
					headTextViewStyle={styles.header_text_view}
					headTextStyle={styles.header_Text}
					table_col_component={this.renderTableRow}
					renderHiddenRow={this._renderHiddenRow}
					disableRightSwipe={true}
					rightOpenValue={-45}
					pageSize={5}
					initialListSize={12}
					ref={ e => this._list = e }
                    {...props}
				/>
            </View>
		);
	}
}
const styles = StyleSheet.create({
	container:{
	},
		header_view:{
			flexDirection: 'row',
			backgroundColor: '#ffffff',
		},
			header_text_view:{
				flex: 1,
				height: 30,
				alignItems: 'center',
				justifyContent: 'center',
				borderRightWidth:lines.smallest,
				borderRightColor:'rgba(0,0,0,0)',
			},
				header_Text:{
					fontSize: fonts.base,
					color: '#cccccc'
				},

		btnView:{
			backgroundColor: '#ffffff',
		},
			date_Text:{ // 文字
				fontSize: fonts.base,
				color: colors.LightBlack,
			},

			delete_view:{
				position:'absolute',
				top:0,
				bottom:0,
				right:0,
				backgroundColor:'red',
				width:45,
			},
				delete_text:{
					color: '#ffffff',
					fontSize: fonts.base,
				},
})