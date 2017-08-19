import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';
import Head from '../component/Head';
import CustomerList from '../modules/Customer/CustomerList';
import { colors } from '../styles'

export default class Customer extends Component{

    scrollToTop() {
        this._customerList && this._customerList.scrollToTop();
    }

    render(){
        return (
            <View style={styles.container}>
                <Head
                    title={'客户'}
                    leftIconType="SimpleLineIcons"
                    leftIcon="arrow-left"
                    leftIconAction={() => this.props.navigator.pop()}
                    titleOnPress={ _ => this.scrollToTop() }
                />
                <View style={{flex:1}}>
                    <CustomerList
                        navigator={this.props.navigator}
                        ref={ e => this._customerList = e }
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