
import {fetch} from 'fetch';
import util from './utilService';
//120.24.224.144
// let baseUrl = 'http://www.daidai2u.com';
// if(__DEV__){
    // let baseUrl = 'http://120.24.224.144';
    // let baseUrl = 'http://120.77.64.159';
    let baseUrl = 'http://120.24.224.144';//http://m.daidai2u.com
    // alert('debug ip:'+baseUrl);
// }

class HttpService {
	get(opts){
		return new Promise((resolve,reject)=>{
            let onOff = false;
            setTimeout( _ => {
                if(!onOff) {
                    util.showToast('网络不稳定',3000);
                }
            },8000);
			fetch(opts.url,{
				method:"GET"
			})
			.then((response)=>{
			    onOff = true;
			    resolve(response);
			    if(!response.ok){
                    if(__DEV__){
                        alert(JSON.stringify(response))
                    }else{
                        util.showToast('网络开小差了。。。');
                    }
                }
			})
			.catch((error) => {
                onOff = true;
                util.showToast('网络出问题了');
				console.warn(error);
				reject(error);
			});
		});
	}
	/**
	 * [post description]
	 * @param  {[type]} opts [description]
	 *                       url:""
	 *                       headers:{}
	 *                       body:{}
	 *                       
	 * @return {[type]}      [description]
	 */
	post(opts){
		return new Promise((resolve,reject)=>{
            let onOff = false;
            setTimeout( _ => {
                if(!onOff) {
                    util.showToast('网络不稳定',3000);
                }
            },8000);
			fetch(opts.url,{
				method:'POST',
				headers:opts.headers,
				body:this.parsePostBody(opts.body)//formData//
			})
			.then((response)=>{
			    onOff = true;
                resolve(response);
                if(!response.ok){
                    if(__DEV__){
                        alert(JSON.stringify(response))
                    }else{
                        util.showToast('网络开小差了。。。');
                    }
                }
			})
			.catch((error) => {
			    onOff = true;
                util.showToast('网络出问题了');
				console.warn(error);
				reject(error);
			});
		});
	}
	parsePostBody(body){
		let _bodyParas = "";
		for(var key in body){
			_bodyParas += [key,body[key]].join("=") + "&";
		}
		return _bodyParas;
	}

	// 登录验证, 返回有response._bodyInt.data = 11, msg = 未绑定手机号
	login(username,pwd) {
	    return this.post({
	        url: `${baseUrl}/we_account/loginService`,
            headers:{'Content-Type':'application/x-www-form-urlencoded'},
            body:{
                username:username,
                pwd:pwd
            }
        })
    }

    // 发送绑定手机号的验证码,返回flag: 1,发送成功 flag: 0,该手机号已注册
    requestBindTelCode(tel) {
	    return this.post({
            url: `${baseUrl}/we_account/bind/tel/request_code`,
            headers:{'Content-Type':'application/x-www-form-urlencoded'},
            body:{
                tel: tel
            }
        })
    }

    // 校验绑定手机号验证码 返回flag: 1,账号绑定成功 flag: 0,验证码有误
    verifyBindTelCode(tel,code) {
        return this.post({
            url: `${baseUrl}/we_account/bind/tel/code_verify`,
            headers: {'Content-Type':'application/x-www-form-urlencoded'},
            body: {
                tel:tel,
                code:code
            }
        })
    }

	// 获取账单系统下的数据, billType = 1 预购清单 billType = 2 收款发货
	getBillList(billType) {
	    return this.get({
	        url: `${baseUrl}/we_account/get_bill_list?billType=${billType}`
        })
    }

    // 修改订单的数量
    setQuantity(value,oid) {
        return this.get({
	        url: `${baseUrl}/we_account/updateCustomerInfo?value=${value}&type=4&objId=${oid}`
        })
    }

    // 修改订单的备注
    setRemark(value,oid) {
	    return this.post({
            url: `${baseUrl}/we_account/update_order_info`,
            headers: {'Content-Type':'application/x-www-form-urlencoded'},
            body: {
                order_id: oid,
                remark: value
            }
        })
    }

    // 修改订单的进价
    setCost(value,oid,exchangeRate = 1,exchangeType = 1) {
        return this.get({
            url: `${baseUrl}/we_account/updateCustomerInfo?value=${value}&objId=${oid}&type=2&exchange_rate=${exchangeRate}&exchange_type=${exchangeType}`,
        })
    }

    // 批量修改订单进价
    setCostBatch(value,oids,exchangeRate,exchangeType) {
        return this.post({
            url: `${baseUrl}/we_account/update_order_batch`,
            headers: {'Content-Type':'application/x-www-form-urlencoded'},
            body: {
                value: value,
                exchange_type: exchangeType,
                exchange_rate: exchangeRate,
                order_ids: oids,
                type: 1
            }
        })
    }

    // 修改订单的售价
    setPrice(value,oid) {
        return this.get({
            url: `${baseUrl}/we_account/updateCustomerInfo?value=${value}&objId=${oid}&type=3&discount=1`,
        })
    }

    // 批量修改订单售价
    setPriceBatch(value,oids) {
        return this.post({
            url: `${baseUrl}/we_account/update_order_batch`,
            headers: {'Content-Type':'application/x-www-form-urlencoded'},
            body: {
                value: value,
                order_ids: oids,
                type: 2
            }
        })
    }

    // 修改订单的分类
    setCate(oids,value) {
	    return this.post({
            url: `${baseUrl}/we_account/change_cate?order_id=${oids}&cate_name=${value}`,
            headers: {'Content-Type':'application/x-www-form-urlencoded'},
        })
    }

    // 修改订单状态, status = 0 删除, status = 2 买到, status = 3 完成
    updateOrderStatus(oids,status) {
	    return this.post({
            url: `${baseUrl}/we_account/updateOrderStatus?oid=${oids}&status=${status}`,
            headers: {'Content-Type':'application/x-www-form-urlencoded'},
        })
    }

    // 修改订单包邮，邮费
    updateMailPay(oids,mailFree,mailPay) {
	    return this.post({
            url: `${baseUrl}/we_account/updateMailPay?mail_free=${mailFree}&mail_pay=${mailPay}&oid=${oids}`,
            headers: {'Content-Type':'application/x-www-form-urlencoded'},
        })
    }

    // 发货
    sendGoods(oids) {
	    return this.post({
            url: `${baseUrl}/we_account/sendoff`,
            headers: {'Content-Type':'application/x-www-form-urlencoded'},
            body: {
                orderIds: oids,
                status: 1,
            }
        })
    }

	// 获取账单系统页面 记录统计模块 的数据
	/*
	 data
		 date1:起始日期
		 date2:截止日期
	 */
	getFinalBillList(date1,date2) {
		return this.get({
			url: `${baseUrl}/we_account/get_final_bill?date1=${date1}&date2=${date2}&nickname=`
		})
	}
    //获取客户列表数据
    getCustomerList(size) {
        return this.post({
            url: `${baseUrl}/we_account/get_customer_list`,
            headers: {'Content-Type':'application/x-www-form-urlencoded'},
            body: {
                pageNo: 0,
                pageSize: size,
            }
        })
    }
    //删除客户信息
    deleteCustomer(cid) {
        return this.post({
            url: `${baseUrl}/we_account/customer/delete`,
            //http://120.24.224.144/we_account/customer/delete
            headers: {'Content-Type':'application/x-www-form-urlencoded'},
            body: {
                c_id: cid,
            }
        })
    }
    //获取客户默认地址信息
    //http://120.24.224.144/we_account/get_customer_default_addr
    getCustomerDefaultAddress(cid) {
        return this.post({
            url: `${baseUrl}/we_account/get_customer_default_addr`,
            headers: {'Content-Type':'application/x-www-form-urlencoded'},
            body: {
                c_id: cid,
            }
        })
    }
    //更改客户名称
    //http://120.24.224.144/we_account/updateCustomerInfo?nickname=Niklas1234568900000&objId=6830&type=1
    changeCustomerNickName(cid,nickname) {
        return this.get({
            url: `${baseUrl}/we_account/updateCustomerInfo?nickname=${nickname}&objId=${cid}&type=1`,
        })
    }

   //获取商品列表数据
    getGoodsLiveRoom(username) {
        return this.post({
            url: `${baseUrl}/we_account/live_room?room_id=${username}`,
            headers: {'Content-Type':'application/x-www-form-urlencoded'},
            //http://www.daidai2u.com/we_account/live_room?room_id=888888
        })
    }
    getGoodsLibrary(page) {
        return this.get({
            url: `${baseUrl}/we_account/load_more?page=${page}`,
            //http://www.daidai2u.com/we_account/load_more?page=1
        })
    }
    //删除商品信息
    deleteGood(gid) {
        return this.post({
            url: `${baseUrl}/we_account/delete_product`,
            //http://120.24.224.144/we_account/delete_product
            headers: {'Content-Type':'application/x-www-form-urlencoded'},
            body: {
                id: gid,
            }
        })
    }

    // 获取商品详情
    getGoodsDetails(productId) {
	    return this.get({
	        url: `${baseUrl}/we_account/product_display?product_id=${productId}`
        })
    }

    // 修改商品信息
    setGoodsDetails(username,productId,productName,defaultCost,defaultPrice,desc,exchangeType,exchangeRate) {
	    return this.post({
	        url: `${baseUrl}/we_account/edit-product`,
            headers: {'Content-Type':'application/x-www-form-urlencoded'},
            body: {
                room_id:username,
                product_id:productId,
                title:productName,
                default_cost:defaultCost,
                default_price:defaultPrice,
                desc:desc,
                exchange_type:exchangeType,
                exchange_rate:exchangeRate,
            }
        })
    }

	// 获取搜索的分类信息
    getSearchCate(value) {
	    return this.get({
	        url: `${baseUrl}/we_account/vague_cate?cate=${value}`
        })
    }

    // 获取搜索的商品
    getSearchProduct(value) {
        return this.get({
            url: `${baseUrl}/we_account/vagueSearchProduct?product_name=${value}`
        })
    }

    // 获取搜索的买家
    getSearchUser(value) {
        return this.get({
            url: `${baseUrl}/we_account/vague_search_user?customer=${value}&type=3`
        })
    }

    // 加单
    addOrder(product_name,quantity,cost,price,nickname,product_id,remark,cate_name,has_payed,prepay_money,addr_id,exchange_type,exchange_rate) {
        return this.post({
            url: `${baseUrl}/we_account/add_order?title=${product_name}&desc=&quantity=${quantity}&cost=${cost}&price=${price}&nickname=${nickname}&productid=${product_id || -1}&remark=${remark}&cate=${cate_name}&prepay_money=${prepay_money}&has_payed=${has_payed}&addr_id=${addr_id}&exchange_type=${exchange_type}&exchange_rate=${exchange_rate}`,
            headers: {'Content-Type':'application/x-www-form-urlencoded'},
        })
    }

    // 修改定金
    setPrepayMoney(oid,value) {
	    return this.post({
	        url: `${baseUrl}/we_account/set_prepay_money`,
            headers: {'Content-Type':'application/x-www-form-urlencoded'},
            body: {
	            order_id: oid,
                prepay_money: value
            }
        })
    }

    // 修改订单是否已付, status = 1, 已付
    setOrderPayStatus(oid,status) {
        return this.post({
            url: `${baseUrl}/we_account/update_order_pay_status`,
            headers: {'Content-Type':'application/x-www-form-urlencoded'},
            body: {
                order_id: oid,
                has_payed: status,
            }
        })
    }

    // 获取客户订单信息列表, status = 1, 预购清单订单信息 status = 2, 收款发货订单信息
    getCustomerOrderList(cid,status) {
        return this.post({
            url: `${baseUrl}/we_account/get_customer_order_info_list`,
            headers: {'Content-Type':'application/x-www-form-urlencoded'},
            body: {
                c_id: cid,
                status: status
            }
        })
    }

    // 获取客户地址信息
    getCustomerAddress(cid) {
        return this.post({
            url: `${baseUrl}/we_account/get_customer_detail_info_list`,
            headers: {'Content-Type':'application/x-www-form-urlencoded'},
            body: {
                pageNo: 0,
                pageSize: 30,
                c_id: cid,
            }
        })
    }

    // 添加客户地址信息
    addCustomerAddress(name,cid,tel,address,isDefault) {
        return this.post({
            url: `${baseUrl}/we_account/customer_info_add`,
            headers: {'Content-Type':'application/x-www-form-urlencoded'},
            body: {
                name: name,
                cid: cid,
                tel: tel,
                address: address,
                is_default: isDefault
            }
        })
    }

    // 删除客户地址信息
    delCustomerAddress(cId,addrId) {
	    return this.post({
	        url: `${baseUrl}/we_account/address/unavailable`,
            headers: {'Content-Type':'application/x-www-form-urlencoded'},
            body: {
                c_id: cId,
                addr_id: addrId,
            }
        })
    }

    // 修改客户地址信息
    setCustomerAddress(name,cid,tel,address,isDefault) {
        return this.post({
            url: `${baseUrl}/we_account/customer_info_update`,
            headers: {'Content-Type':'application/x-www-form-urlencoded'},
            body: {
                name: name,
                id: cid,
                tel: tel,
                address: address,
                is_default: isDefault,
            }
        })
    }

    // 修改订单地址信息
    setOrderAddress(orderID,addrID) {
        return this.post({
            url: `${baseUrl}/we_account/update_order_address`,
            headers: {'Content-Type':'application/x-www-form-urlencoded'},
            body: {
                order_id: orderID,
                addr_id: addrID
            }
        })
    }

    // 获取汇率列表
    getExchangeRateList() {
        return this.post({
            url: `${baseUrl}/we_account/get_exchange_rate_list`,
            headers: {'Content-Type':'application/x-www-form-urlencoded'},
        })
    }

    // 修改汇率列表的汇率
    setExchangeRate(exchangeType,exchangeRate) {
        return this.post({
            url: `${baseUrl}/we_account/set_exchange_rate`,
            headers: {'Content-Type':'application/x-www-form-urlencoded'},
            body: {
                exchange_type: exchangeType,
                exchange_rate: exchangeRate
            }
        })
    }

    // 新增汇率
    addExchangeRate(exchangeName,exchangeRate) {
        return this.post({
            url: `${baseUrl}/we_account/add_exchange_rate`,
            headers: {'Content-Type':'application/x-www-form-urlencoded'},
            body: {
                exchange_name: exchangeName,
                exchange_rate: exchangeRate
            }
        })
    }

    // 删除汇率
    delExchangeRate(type) {
        return this.post({
            url: `${baseUrl}/we_account/delete_exchange_rate`,
            headers: {'Content-Type':'application/x-www-form-urlencoded'},
            body: {
                exchange_type: type
            }
        })
    }

    /**************************************
     **功能说明：注册流程
     **************************************/
    // 发送手机号注册验证码 返回flag: 1,发送成功 flag: 0,该手机号已注册
    requestRegisterTelCode(tel) {
	    return this.post({
	        url: `${baseUrl}/we_account/register/tel/request_code`,
            headers: {'Content-Type':'application/x-www-form-urlencoded'},
            body: {
	            tel:tel
            }
        })
    }

    // 校验手机号注册验证码 返回flag: 1,验证成功 flag: 0,验证码有误
    verifyRegisterTelCode(tel,code) {
        return this.post({
            url: `${baseUrl}/we_account/register/tel/code_verify`,
            headers: {'Content-Type':'application/x-www-form-urlencoded'},
            body: {
                tel:tel,
                code:code
            }
        })
    }

    // 设置密码 返回flag: 1, 注册成功 flag: 0,注册失败
    setPwd(tel,code,pwd) {
        return this.post({
            url: `${baseUrl}/we_account/register/tel/create`,
            headers: {'Content-Type':'application/x-www-form-urlencoded'},
            body: {
                tel:tel,
                code:code,
                pwd:pwd
            }
        })
    }

    // 设置完善个人信息
    setUserInformation(nickname,sex,province,city) {
        return this.post({
            url: `${baseUrl}/we_account/register/info/compelete`,
            headers: {'Content-Type':'application/x-www-form-urlencoded'},
            body: {
                nickname:nickname,
                sex:sex,
                province:province,
                city:city
            }
        })
    }

    // 获取个人信息
    getUserInformation() {
        return this.post({
            url: `${baseUrl}/we_account/personal/info/get`,
            headers: {'Content-Type':'application/x-www-form-urlencoded'},
        })
    }

    /**************************************
     **功能说明：忘记密码，重置密码流程
     **************************************/
    // 发送手机号忘记密码验证码 返回flag: 1,发送成功 flag: 0,该手机号尚未注册
    requestForgetPwdTelCode(tel) {
        return this.post({
            url: `${baseUrl}/we_account/forgetpwd/tel/request_code`,
            headers: {'Content-Type':'application/x-www-form-urlencoded'},
            body: {
                tel:tel
            }
        })
    }

    // 校验手机号忘记密码验证码 返回flag: 1,验证成功 flag: 0,验证码有误
    verifyForgetPwdTelCode(tel,code) {
        return this.post({
            url: `${baseUrl}/we_account/forgetpwd/tel/code_verify`,
            headers: {'Content-Type':'application/x-www-form-urlencoded'},
            body: {
                tel:tel,
                code:code
            }
        })
    }

    // 重置密码,新密码 返回flag: 1,密码修改成功
    resetPwd(pwd) {
        return this.post({
            url: `${baseUrl}/we_account/forgetpwd/reset_pwd`,
            headers: {'Content-Type':'application/x-www-form-urlencoded'},
            body: {
                pwd:pwd
            }
        })
    }
}

export default new HttpService;