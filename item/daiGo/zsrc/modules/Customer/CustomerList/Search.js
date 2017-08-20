/*客户列表模块页面之搜索模块
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
import SearchInput from '../../../component/SearchInput';

export default class Search extends Component {

	constructor(props) {
		super(props);
		this.state = {
		};
	}

	search(t){
		this.props.handleChange(t);
	}

	render(){
		return (
			<View style={styles.container}>
				<SearchInput
					onChangeText={ t => this.search(t) }
					ref={ e => this._searchInput = e }
				/>
			</View>
		);
	}
}
const styles = StyleSheet.create({
	container:{

	},
})