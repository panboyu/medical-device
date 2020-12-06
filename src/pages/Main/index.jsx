import React, { Component } from 'react'
import './index.less'

import Income from './components/income'
import Info from './components/info'

class Main extends Component {
    render() {
        return (
            <div className='main-page'>
                <div className='main-up'>
                    <div className="main-income">
                        <Income />
                    </div>
                    <div className="main-info-chart">
                        <div className="main-info">
                            <Info />
                        </div>
                        <div className="main-chart">

                        </div>
                    </div>
                </div>
                <div className='main-down'>

                </div>
            </div>
        )
    }
}

export default Main