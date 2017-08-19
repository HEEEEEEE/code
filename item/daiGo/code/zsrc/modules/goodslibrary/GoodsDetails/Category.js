/**
 * 商品详情编辑,选择品类页面
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableHighlight,
    TouchableOpacity,
} from 'react-native';

import Head from '../../../component/Head';
import { Btn,BtnAnnular } from '../../../component/Btn';
import { colors,fonts,btnStyle } from '../../../styles';

const categorys = ['护肤','美妆','护发美品','母婴','保健品','食品','数码','饰品','服鞋','其他'];

export default class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category: this.props.category || '其他', // 品类
        }
    }

    choose(category) {
        this.setState({category});
    }

    render() {
        return (
            <View style={styles.container}>
                <Head
                    title="品类"
                    leftIcon="chevron-left"
                    leftIconAction={() => this.props.navigator.pop()}
                />
                <ScrollView style={styles.body}>
                    {
                        categorys.map( item => {
                            return (
                                <Btn
                                    style={styles.item}
                                    onPress={ _ => this.choose(item)}
                                >
                                    <View>
                                        <BtnAnnular
                                            onOff={this.state.category == item}
                                            disabled={true}
                                            title={item}
                                            titleStyle={{marginLeft:10}}
                                        />
                                    </View>
                                </Btn>
                            )
                        })
                    }
                </ScrollView>
                <Btn title="确定"
                     style={btnStyle.strip.btn}
                     textStyle={btnStyle.strip.btn_text}
                     onPress={ _ => this.ok()}/>
            </View>
        );
    }

    ok() {
        this.props.callback(this.state.category);
        this.props.navigator.pop();
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.BackgroundGray,
    },
    body: {
        flex: 1,
    },
    item: {
        flexDirection: 'row',
        backgroundColor:'#ffffff',
        height:40,
        alignItems:'center',
        justifyContent:'flex-start',
        paddingLeft:10,
        paddingRight:10,
        borderBottomWidth:1,
        borderColor:colors.LightGray
    },
    text: {
        fontSize: fonts.h4,
        color: '#000000',
    },
});