import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';
import Head from '../component/Head';
import GoodsList from '../modules/goodslibrary/GoodsList';
import { colors } from '../styles'

export default class GoodsLibrary extends Component{

    scrollToTop() {
        this._goodList && this._goodList.scrollToTop();
    }

    render(){
        return (
            <View style={styles.container}>
                <Head
                    title={'商品库'}
                    leftIconType="SimpleLineIcons"
                    leftIcon="arrow-left"
                    leftIconAction={() => this.props.navigator.pop()}
                    titleOnPress={ _ => this.scrollToTop() }
                />
                <View style={{flex:1}}>
                    <GoodsList
                        navigator={this.props.navigator}
                        ref={ e => this._goodList = e }
                    />
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    }
});