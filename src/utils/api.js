import axios from 'axios'

const methods = ['get', 'head', 'post', 'put', 'delete', 'options', 'patch']
const paramsMethods = ['get', 'delete']
class Api {
	constructor() {
		methods.forEach(
			method =>
				(this[method] = (path, data = {}, headers = {}) =>
					new Promise((resolve, reject) => {
						let config = {
							headers: {
								'Content-Type': 'application/json',
								...headers
							},
							timeout: 120000,
						}
						data = paramsMethods.indexOf(method) !== -1 ? { params: data, ...config } : data
						let _path = `/api${path}`
						axios[method](_path, data, config).then(res => {
							resolve(res.data)
						}).catch(error => {
							reject(error)
						})
				}))
		)
	}
}

export default new Api()
