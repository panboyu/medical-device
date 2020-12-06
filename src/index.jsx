import React from 'react'
import ReactDOM from 'react-dom'
import createHistory from 'history/createBrowserHistory'
import configStore from './store'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'

import Router from './router'

const history = createHistory()
const store = configStore(history)
history.listen((location, action) => {
    // 路由变化终止之前页面请求
    sourceArr.map((item)=>item.type!=='public'&&Object.values(item)[0]())
    sourceArr.filter(item=>item.type=='public')
    // sourceArr=[];
  })
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