import React from 'react'
import ReactDOM from 'react-dom'
import createHistory from 'history/createBrowserHistory'
import configStore from './store'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'

import Router from './router'

import "swiper/dist/css/swiper.css"

const history = createHistory()
const store = configStore(history)

const render = Component => {
    /**
     * react-router 4.0开始不提供hashStory和browserStory
     * ConnectedRouter可以自动使用Provider的store
     * IntlProvider通过InjectIntl的方式注入，不依赖react的context
     **/
    ReactDOM.render(
        <AppContainer>
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <Component dispatch={store.dispatch} />
                </ConnectedRouter>
            </Provider>
        </AppContainer>, document.getElementById('app')
    )
}

render(Router)
if (module.hot) {
    module.hot.accept('./router', () => {
        render(Router)
        setTimeout(() => { render(Router) }, 200)
    })
}