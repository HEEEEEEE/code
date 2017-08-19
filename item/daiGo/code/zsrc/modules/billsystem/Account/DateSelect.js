/*记录统计模块页面之日期选择模块
 	流程
 		进入页面时：默认打印出最新一周的起始日期 及 截止日期
 	功能
 		可自定义起始日期 及 截止日期
 */
import React, { Component } from 'react';
import {
	AppRegistry,
	StyleSheet,
	View,
	Text,
} from 'react-native';

import Picker from 'react-native-picker';

import colors from '../../../styles/colors';
import fonts from '../../../styles/fonts';
import lines from '../../../styles/lines';

import { Btn } from '../../../component/Btn';
import PickerModal from '../../../component/Modal/PickerModal';

import util from '../../../service/utilService';

export default class DateSelect extends Component {

	constructor(props) {
		super(props);
		this.state = {
			dateStart:util.formatDate('','',6),
			dateEnd:util.formatDate(),
		};
        this.selectDate = null; // 日期选择器滚动到的时间
        this.date = null; // 日期选择的范围
	}
	refreshDate(){
		let { dateStart, dateEnd } = this.state;
		this.setState({
			dateStart:util.formatDate('','',6),
			dateEnd:util.formatDate(),
		});
	}

	_createDateData(dateC) {
		let startY = dateC.start.Y, startM = dateC.start.M, startD = dateC.start.D,
			endY =  dateC.end.Y, endM = dateC.end.M, endD = dateC.end.D;
		let date = [];

		for(let i=startY;i<=endY;i++){
			let month = [];
			if(startY == endY){
				for(let j = startM;j<=endM;j++){
					let day = [];

					if(j === 2){
						if(startM == 2 && endM != 2){
							for(let k=startD;k<=28;k++){
								day.push(k+'日');
							}
							if(i%4 === 0){
								day.push(29+'日');
							}
						}else if(startM != 2 && endM == 2){
							for(let k=1;k<=endD;k++){
								day.push(k+'日');
							}
						}else if(startM == 2 && endM == 2){
							for(let k=startD;k<=endD;k++){
								day.push(k+'日');
							}
						}else{
							for(let k=1;k<=28;k++){
								day.push(k+'日');
							}
							if(i%4 === 0){
								day.push(29+'日');
							}
						}
					}else if(j in {1:1, 3:1, 5:1, 7:1, 8:1, 10:1, 12:1}){
						if(j == startM && j != endM){
							for(let k=startD;k<=31;k++){
								day.push(k+'日');
							}
						}else if(j != startM && j == endM){
							for(let k=1;k<=endD;k++){
								day.push(k+'日');
							}
						}else if(j == startM && j == endM){
							for(let k=startD;k<=endD;k++){
								day.push(k+'日');
							}
						}else{
							for(let k=1;k<=31;k++){
								day.push(k+'日');
							}
						}
					}else{
						if(j == startM && j != endM){
							for(let k=startD;k<=30;k++){
								day.push(k+'日');
							}
						}else if(j != startM && j == endM){
							for(let k=1;k<=endD;k++){
								day.push(k+'日');
							}
						}else if(j == startM && j == endM){
							for(let k=startD;k<=endD;k++){
								day.push(k+'日');
							}
						}else{
							for(let k=1;k<=30;k++){
								day.push(k+'日');
							}
						}
					}

					let _month = {};
					_month[j+'月'] = day;
					month.push(_month);
				}
			}else{
				if(i == startY){
					for(let j = startM;j<=12;j++){
						let day = [];

						if(j === 2){
							if(startM == 2){
								for(let k=startD;k<=28;k++){
									day.push(k+'日');
								}
								if(i%4 === 0){
									day.push(29+'日');
								}
							}else{
								for(let k=1;k<=28;k++){
									day.push(k+'日');
								}
								if(i%4 === 0){
									day.push(29+'日');
								}
							}
						}else if(j in {1:1, 3:1, 5:1, 7:1, 8:1, 10:1, 12:1}){
							if(j == startM){
								for(let k=startD;k<=31;k++){
									day.push(k+'日');
								}
							}else{
								for(let k=1;k<=31;k++){
									day.push(k+'日');
								}
							}
						}else{
							if(j == startM){
								for(let k=startD;k<=30;k++){
									day.push(k+'日');
								}
							}else{
								for(let k=1;k<=30;k++){
									day.push(k+'日');
								}
							}
						}

						let _month = {};
						_month[j+'月'] = day;
						month.push(_month);
					}
				}
				if(i != startY && i != endY){
					for(let j = 1;j<=12;j++){
						let day = [];

						if(j === 2){
							for(let k=1;k<=28;k++){
								day.push(k+'日');
							}
							if(i%4 === 0){
								day.push(29+'日');
							}
						}else if(j in {1:1, 3:1, 5:1, 7:1, 8:1, 10:1, 12:1}){
							for(let k=1;k<=31;k++){
								day.push(k+'日');
							}
						}else{
							for(let k=1;k<=30;k++){
								day.push(k+'日');
							}
						}

						let _month = {};
						_month[j+'月'] = day;
						month.push(_month);
					}
				}
				if(i == endY){
					for(let j = 1;j<=endM;j++){
						let day = [];

						if(j === 2){
							if(endM == 2){
								for(let k=1;k<=endD;k++){
									day.push(k+'日');
								}
							}else{
								for(let k=1;k<=28;k++){
									day.push(k+'日');
								}
								if(i%4 === 0){
									day.push(29+'日');
								}
							}
						}else if(j in {1:1, 3:1, 5:1, 7:1, 8:1, 10:1, 12:1}){
							if(j == endM){
								for(let k=1;k<=endD;k++){
									day.push(k+'日');
								}
							}else{
								for(let k=1;k<=31;k++){
									day.push(k+'日');
								}
							}
						}else{
							if(j == endM){
								for(let k=1;k<=endD;k++){
									day.push(k+'日');
								}
							}else{
								for(let k=1;k<=30;k++){
									day.push(k+'日');
								}
							}
						}

						let _month = {};
						_month[j+'月'] = day;
						month.push(_month);
					}
				}
			}

			let _date = {};
			_date[i+'年'] = month;
			date.push(_date);
		}

        this.date = date;
		return date;
	}

	formatNowDate(dateF){
		let formatDate = dateF.map( (item,i) => {
			if( i == 0 ) return item + '年';
				if( i == 1 ) return item + '月';
					if( i == 2 ) return item + '日';
		});
		this.selectDate = formatDate;
		return formatDate;
	}

	showDatePicker(who,title,dateC,dateF) {
		this._picker.show({
			selectedValue: this.formatNowDate(dateF),
			pickerData: this._createDateData(dateC),
			pickerTitleText: title,
			pickerToolBarFontSize: 16,
			pickerFontSize: 16,
			pickerFontColor: [255, 0 ,0, 1],
			onPickerConfirm: (pickedValue) => {
				let date = this.selectDate.map( (i) => {
					if(parseInt(i) < 10){
						return '0'+parseInt(i)
					}
					return parseInt(i);
				} );

				if(who=='dateStart'){
					this.setState({dateStart: date.join('-')});
				}else{
					this.setState({dateEnd: date.join('-')});
				}

				this.props.handlePickerConfirm(date.join('-'),who);
			},
            onPickerSelect: (value) => {
                if(value[0] != this.selectDate[0]) { // 选择新的年份
                    let year = value[0];
                    let month = this.dealSelMonth(year,this.selectDate[1]);
                    let day = this.dealSelDay(month.monthData,this.selectDate[2]);
                    let date = [year,month.month,day];
                    this.selectDate = date;
                    Picker.select(date);
                }else if(value[1] != this.selectDate[1]) { // 选择新的月份
                    let year = this.selectDate[0];
                    let month = value[1];
                    let day = this.dealSelDay(this.dealSelMonth(year,month).monthData,this.selectDate[2]);
                    let date = [year,month,day];
                    this.selectDate = date;
                    Picker.select(date);
                }else{ // 选择新的日
                    this.selectDate = value;
                }
            }
		})
	}

    // 返回当前年份的月，如果没有返回当前年份最早的月份
    dealSelMonth(y,m) {
        for (let year of this.date) {
            if(year[y]) { //  [{'6月':[]},{'7月':[]},...]
                for (let month of year[y]) {
                    if(month[m]) {
                        return {
                            month:m,
                            monthData:month[m]
                        };
                    }
                }
                for (let month in year[y][0]) {
                    return {
                        month:month,
                        monthData:year[y][0][month]
                    };
                }
            }
        }
    }

    // 返回当前月份的日，如果没有返回当前月份最早的日
    dealSelDay(monthData,d) {
        if(monthData.indexOf(d) > -1) {
            return d;
        }
        return monthData[0]
    }

	render(){
		let { dateStart, dateEnd } = this.state,
			dateSF = this.dateZeroRemove(dateStart.split('-')),
			dateEF = this.dateZeroRemove(dateEnd.split('-')),
			dateSC =this.dateStartToEnd(2015, 6, 8, dateEF[0],dateEF[1], dateEF[2]),
			dateEC =this.dateStartToEnd(dateSF[0], dateSF[1], dateSF[2], new Date().getFullYear(), new Date().getMonth() + 1,new Date().getDate());
		return (
			<View style={styles.container}>
				<View style={styles.btn_view}>
					<Btn
						style={styles.btn}
						textStyle={styles.btn_text}
						title={this.state.dateStart}
						onPress={this.showDatePicker.bind(this,'dateStart','起始日期',dateSC,dateSF)}
					/>
				</View>
				<View style={styles.text_view}>
					<Text style={styles.text}>至</Text>
				</View>
				<View style={styles.btn_view}>
					<Btn
						style={styles.btn}
						textStyle={styles.btn_text}
						title={this.state.dateEnd}
						onPress={this.showDatePicker.bind(this,'dateEnd','截止日期',dateEC,dateEF)}
					/>
				</View>
				<PickerModal
					ref={ e => this._picker = e}
				/>
			</View>
		);
	}

	//移除日期数组元素中的前导 0
	dateZeroRemove(t){
		let d = [];
			t.map((i)=>{
					let a = parseInt(i.indexOf('0') == 0 ? (i.slice(1)) : (i));
					d.push(a);
			});
		return d;
	}
	//创建包含起始及结束的日期对象
	dateStartToEnd(startY, startM, startD, endY, endM, endD){
		return {
			start:{
				Y:startY,M:startM,D:startD,
			},
			end:{
				Y:endY,M:endM,D:endD,
			}
		};
	}
}
const styles = StyleSheet.create({
	container:{
		flexDirection:'row',
		backgroundColor:'#ffffff',
		paddingTop: 5,
		paddingBottom: 5,
		paddingRight: 10,
		paddingLeft: 10,
	},
		btn_view:{
			flex:5,
		},
			btn:{
				justifyContent:'center',
				alignItems:'flex-start',
				height: 27,
				backgroundColor: '#f2f2f2',
				paddingLeft: 13.5,
				borderWidth: lines.smallest,
				borderRadius: 27,
				borderColor: '#cccccc',
			},
				btn_text:{
					fontSize: fonts.h4,
					color: '#000000',
				},

		text_view:{
			flex:1,
			justifyContent:'center',
			alignItems:'center',
			height: 27,
			backgroundColor: '#ffffff',
			//borderWidth: lines.smallest,
			//borderColor: '#ffffff',
		},
			text:{
				textAlign: 'center',
				fontSize: fonts.h3,
				color: '#000000',
			},
})