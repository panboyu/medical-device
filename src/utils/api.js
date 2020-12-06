import axios from 'axios'
import { message } from 'antd'
import { local, TOKEN } from 'src/utils/storage'
var CancelToken = axios.CancelToken;
window.sourceArr = []
const methods = ['get', 'head', 'post', 'put', 'delete', 'options', 'patch']
const paramsMethods = ['get', 'delete']
class Api {
	constructor() {
		methods.forEach(method =>
			this[method] = (path, params = {}, headers = {}) => new Promise((resolve, reject) => {
				let token = local.getItem(TOKEN)
				let bearer = token ? { 'Authorization': 'Bearer ' + token } : {}
				let config = {
					headers: {
						'Content-Type': 'application/json',
						...bearer,
						...headers,
					},
					//timeout: 300000,
				}
				let publicPath = ['/accountinfo/remindusercheckcount', '/warninfo/allwarncount'];
				let longConnect = ['/warninfo/warn','/warninfo/health','/accountinfo/usercheckcount']
				config.cancelToken = new CancelToken(function (cancel) {
					// console.log(path,method)
					if (publicPath.indexOf(path) !== -1) {
						sourceArr.push({ [method + path]: cancel, key: method + path, type: 'public' })
					} else if(longConnect.indexOf(path) !== -1){
						sourceArr.push({ [method + path]: cancel, key: method + path, type: 'single' })
					}
				})
				// 添加响应拦截器
				axios.interceptors.response.use(function (response) {
					let delApi = response.config.method + response.config.url.split('?')[0].slice(4);
					sourceArr.map((item, index) => {
						if (item.key == delApi) {
							// console.log(delApi)
							sourceArr.splice(index, 1)
						}
					})
					// console.log(sourceArr.length)
					return response;
				}, function (error) {
					// 对响应错误做点什么
					return Promise.reject(error);
				});

				params = paramsMethods.indexOf(method) !== -1 ? { params: params, ...config } : params
				let _path = `/api${path}`
				const _s = new Date().getTime()
				_path = _path.indexOf("?") === -1 ? _path + "?t=" + _s : _path + "&t=" + _s
				axios[method](_path, params, config).then((res) => {
					let data = res && res.data
					if (res && res.headers && res.headers.etag) {
						data.etag = res.headers.etag
					}
					resolve(data)
				}).catch(error => {
					reject(error)
				})
			})
		)
	}
}

export default new Api