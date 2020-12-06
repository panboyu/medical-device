import { message } from 'antd'
import { TOKEN, local } from 'src/utils/storage'
export default function errorMiddleware({ dispatch }) {
    return next => action => {
        const { error, payload } = action
        if (error) {
            if (payload && payload.response) {
                let data = payload.response.data || {}
                if (data.status == 11) {     //  权限不足
                    
                } else if (data.status == 10) {     // token失效
                    local.removeItem(TOKEN)
                    window.location.href = '/login'
                }
            } else { 
                if (payload instanceof Error) {
                    throw new Error(payload)
                }
            }
        } else {
            return next(action)
        }
    }
}