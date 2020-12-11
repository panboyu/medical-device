import moment from 'moment'

const utils = {
    parseUrlParams() {
		let search = location.search
		if (search && search.startsWith('?')) {
			search = search.substr(1)
			let paramsArray = search.split('&')
			let result = {}
			paramsArray.forEach(params => {
				let pair = params.split('=')
				let key = pair[0]
				result[key] = pair[1]
			})
			return result
		}
		return null
	},
	//	判断微信浏览器
	isWechat() {
		var ua = window.navigator.userAgent.toLowerCase()
		return ua.match(/MicroMessenger/i) == 'micromessenger'
	},
	renderIcon(iconClass, size) {
		return <i className={`${iconClass}`} style={{fontSize:this.px2Rem(size)}}>
			<span className="path1"></span>
			<span className="path2"></span>
		</i>
	},
	//	判断是否来至APP
	isApp() { 
		return window.location.href.indexOf('fromApp') !== -1
	},
	px2Rem(px){
		return (px / 75) + 'rem'
	},
	formatTimeFromNow(time) {//time单位为秒
		if (!time) return time;  
        const nowsec = Math.floor(new Date().getTime()/1e3)
        const seconds = Math.abs(nowsec - time);  
		let r
		if (seconds < 60) {// 一分钟内 
			r = seconds == 0 ? "刚刚" : (seconds + "秒前")
        }else if (seconds >= 60 && seconds < 3600){// 一小时内  
            r = Math.floor(seconds / 60) + "分钟前";  
        }else if (seconds >= 3600 && seconds < 86400){// 一天内  
            r = Math.floor(seconds / 3600) + "小时前";  
        }else if (seconds >= 86400 && seconds < 2592000){// 三十天内  
            r = Math.floor(seconds / 86400) + "天前";  
        }else{// 日期格式  
            r = moment.unix(time).format("MM-DD HH:mm")
        }  
        return r
	},
	keepTwo(value) { 
		return Math.round(value * 100) / 100
	}
}

export default utils