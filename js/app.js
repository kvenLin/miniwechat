window.app = {
	
	/**
	 * netty服务后端发布的url地址
	 */
	nettyServerUrl: 'ws://192.168.43.199:8088/ws',
	
	/**
	 * 后端服务发布的url地址
	 */
	serverUrl: 'http://192.168.43.199:8080',
	
	/**
	 * 图片服务器的url地址
	 */
	imgServerUrl: 'http://218.244.151.128:88/clf/',
		
	/**
	 * 判断字符串是否为空
	 * @param {Object} str
	 * true：不为空
	 * false：为空
	 */
	isNotNull: function(str) {
		if (str != null && str != "" && str != undefined) {
			return true;
		}
		return false;
	},
	
	/**
	 * 封装消息提示框，默认mui的不支持居中和自定义icon，所以使用h5+
	 * @param {Object} msg
	 * @param {Object} type
	 */
	showToast: function(msg, type) {
		plus.nativeUI.toast(msg, 
			{icon: "/image/"+ type +".png", verticalAlign: "center"})
	},
	/**
	 * 保存用户的全局对象
	 * @param {Object} user
	 */
	setUserGlobalInfo: function(user) {
		var userInfoStr = JSON.stringify(user);
		plus.storage.setItem("userInfo", userInfoStr);
	},
	
	/**
	 * 获取用户的全局对象
	 */
	getUserGlobalInfo: function() {
		var userInfoStr = plus.storage.getItem("userInfo");
		return JSON.parse(userInfoStr);
	},
	
	/**
	 * 退出后移除userinfo全局信息
	 */
	userLogout: function() {
		plus.storage.removeItem("userInfo");
	},
	
	/**
	 * 保存用户的联系人列表
	 * @param {Object} contactList
	 */
	setContactList: function(contactList) {
		var contactListStr = JSON.stringify(contactList);
		plus.storage.setItem("contactList", contactListStr);
	},
	
	/**
	 * 获取本地缓存中的联系人列表
	 */
	getContactList: function() {
		var contactListStr = plus.storage.getItem("contactList");
		if(!this.isNotNull(contactListStr)) {
			return [];
		}
		return JSON.parse(contactListStr);
	},
	
	/**
	 * 和后端的枚举对应
	 */
	CONNECT: 1 , 	// "第一次(或重连)初始化连接"
	CHAT: 2, 		//"聊天消息"
	SIGNED: 3, 		//"消息签收"
	KEEPALIVE: 4, 	//客户端保持心跳
	PULL_FRIEND: 5, //"拉取好友"
	
	/**
	 * 和后端的ChatMsgNio模型保持一致
	 * @param {Object} senderId
	 * @param {Object} receiverId
	 * @param {Object} msg
	 * @param {Object} msgId
	 */
	ChatMsg: function(senderId, receiverId, msg, msgId) {
		this.senderId = senderId;
		this.receiverId = receiverId;
		this.msg = msg;
		this.msgId = msgId;
	},
	
	/**
	 * 构建 DataContent 消息模型对象
	 * @param {Object} action
	 * @param {Object} chatMsgNio
	 * @param {Object} extend
	 */
	DataContent: function(action, chatMsgNio, extend) {
		this.action = action;
		this.chatMsgNio = chatMsgNio;
		this.extend = extend;
	},
	
}