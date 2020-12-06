import { routerMiddleware, routerReducer } from 'react-router-redux'
import { applyMiddleware } from 'redux'
import thunkMiddleware from './middlewares/thunk'
import promiseMiddleware from './middlewares/promise'
import errorMiddleware from './middlewares/error'
import loadingMiddleware from './middlewares/loading'

import { createStore } from 'src/utils/injectReducer'

export default (history) => {
    return createStore(
        {
            router: routerReducer,
        },
        applyMiddleware(
            routerMiddleware(history),
            thunkMiddleware,
            loadingMiddleware,
            promiseMiddleware,
            errorMiddleware,
        )
    )
}