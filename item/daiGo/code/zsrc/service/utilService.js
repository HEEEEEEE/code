/**
 * 工具包 (无业务依赖)
 */
import React, { AsyncStorage,Alert,NetInfo }from 'react-native';

import Toast from 'react-native-root-toast';

class Util {
	/**
	 * 日期格式化
	 * @param  {[type]}  date         [description]
	 * @param  {Boolean} isFormatTime [description]
	 * @param  {[type]}  thedaybefore [description]
	 * @param  {[type]}  formatType   [description]
	 * @return {[type]}               [description]
	 */
	formatDate(date,isFormatTime, thedaybefore,formatType) {
        if(!date){
            date = new Date();
        }
        if(!formatType){
            formatType = '-';
        }
        var hms = "";
        if(isFormatTime){
            hms = " "+this.formatTime(date);
        }
        var d = date.getDate();
        var m = date.getMonth();
        var y = date.getFullYear();
        if (!thedaybefore) {
            m++;
            return y + formatType + ((m < 10 ? "0" : "") + m) + formatType + ((d < 10 ? "0" : "") + d)+hms;
        }
        d -= thedaybefore;
        date = new Date(y, m, d);
        d = date.getDate();
        m = date.getMonth() + 1;
        y = date.getFullYear();
        return y + formatType + ((m < 10 ? "0" : "") + m) + formatType + ((d < 10 ? "0" : "") + d)+hms;
    }

    /**
     * 获取时分秒 00:00:00
     * @param date
     * @returns {string}
     */
    formatTime(date){
        if(!date){
            date = new Date();
        }
        var hh = date.getHours();
        var mm = date.getMinutes();
        var ss = date.getSeconds();
        return (hh >= 10?"":"0")+hh+":"+(mm >= 10?"":"0")+mm+":"+(ss >= 10?"":"0")+ss;
    }

    /**
     * 弹出Toast
     * @param  {string} content  显示内容
     * @param  {number} duration 显示时间
     * @param  {number} delay    延迟时间
     */
    showToast = (content,duration = 1500,delay = 200) => {
        Toast.show(content || '未知错误', {
            duration: duration,
            position: -70,
            shadow: false,
            animation: true,
            hideOnPress: true,
            delay: delay
        });
    }

    /**
     * 弹出警告框
     * @param  {string} content  显示内容
     * @param  {function} callback 确认后的回调
     */
    alertPrompt(content,callback){
        Alert.alert(
            '提示',
            content,
            [
                {text:'取消'},
                {
                    text:'确认',
                    onPress:callback
                }
            ]
        )
    }

    // 返回设备是否联网
    isNetConnected() {
        return new Promise((resolve)=>{
            NetInfo.isConnected.fetch().done((isConnected) => {
                if(!isConnected) this.showToast('无网络');
                resolve(isConnected);
            })
        })
    }

    // 获取本地存储的内容
    getStorage(key) {
        if(typeof key == 'string'){
            return AsyncStorage.getItem(key).then((value) => {
                const jsonValue = JSON.parse(value);
                return jsonValue;
            });
        }else if(typeof key == 'object'){
            return AsyncStorage.multiGet(key).then((value) => {
                return value;
            });
        }
    }

    // 获取本地存储的所有键值
    getAllStorageKeys() {
        return AsyncStorage.getAllKeys().then((value) => {
            return value;
        });
    }

    // 存储到本地
    saveStorage(key,value) {
        if(typeof key == 'string'){
            return AsyncStorage.setItem(key, typeof value == 'object' ? JSON.stringify(value) : value+'');
        }else if(typeof key == 'object'){
            return AsyncStorage.multiSet(key);
        }
    }

    // 删除本地存储的内容
    deleteStorage(key) {
        if(typeof key == 'string'){
            return AsyncStorage.removeItem(key);
        }else if(typeof key == 'object'){
            return AsyncStorage.multiRemove(key);
        }
    }
}

export default new Util;