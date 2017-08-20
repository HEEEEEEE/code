/**
 * 搜索内容的视图
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    ListView,
    TouchableOpacity,
    Platform
} from 'react-native';
import { Btn,BtnAnnular } from '../../../component/Btn';
import { colors,fonts,btnStyle,lines } from '../../../styles';

export default class SearchView extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    normalListDs = new ListView.DataSource({//这是定义结构
        rowHasChanged: (row1, row2) => row1 !== row2
    });

    _renderRow = (data,secId,rowId) => {
        return (
            <Btn
                style={[styles.borderBottom,{height:35}]}
                title={data[this.props.dataKey]}
                onPress={ _ => this.props.onPress && this.props.onPress(data) }
            />
        )
    }

    render(){
        const { data,dataKey,style } = this.props;
        if(this.props.data && this.props.data.length > 0){
            return (
                <View style={[styles.container,Platform.OS == 'ios' ? styles.shadow : styles.border,style]}>
                    <ListView
                        style={{paddingLeft:10,paddingRight:10}}
                        keyboardShouldPersistTaps="handled"
                        dataSource={this.normalListDs.cloneWithRows(data)}
                        renderRow={this._renderRow}
                        pageSize={3}
                        initialListSize={6}
                    />
                </View>
            );
        }else{
            return <View style={[{position:'absolute'},style]}/>
        }
    }
}

const styles = StyleSheet.create({
    container: {
        zIndex: 1,
        position: 'absolute',
        backgroundColor: '#f4f4f4',
        left: 45,
        right: 10,
        maxHeight: 104,
        borderRadius:10,
    },
    border:{
        borderWidth:lines.smallest,
        borderColor:lines.color,
    },
    shadow:{
        shadowColor: '#000000',
        shadowOffset:{width:3,height:3},
        shadowOpacity:0.1,
        shadowRadius:2
    },
    borderBottom: {
        borderBottomWidth: lines.smallest,
        borderColor: colors.LightGray,
    },
});