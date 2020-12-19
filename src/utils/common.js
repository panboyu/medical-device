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
	keepTwo(value) { 
		return Math.round(value * 100) / 100
	}
}

export default utils