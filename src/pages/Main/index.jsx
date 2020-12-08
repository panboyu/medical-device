import React, { Component } from 'react'
import './index.less'

import Income from './components/income'
import Info from './components/info'
import DeviceWorkload from './components/deviceWorkload'
import Cost from './components/cost'
import BarChart from './components/barChart'
import DashBoard from './components/dashBoard'
import arrowLeft from 'images/arrowLeft.png'
import arrowRight from 'images/arrowRight.png'

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
                            <div className="main-chart-item">
                                <DeviceWorkload />
                            </div>
                            <div className="main-chart-item">
                                <Cost />
                            </div>
                            <div className="main-chart-item">
                                <BarChart />
                            </div>
                            <div className="main-chart-item">
                                <BarChart />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='main-down'>
                    <div className='main-down-wrap'>
                        <div className="dash-item"><DashBoard /></div>
                        <div className="dash-item"><DashBoard /></div>
                        <div className="dash-item"><DashBoard /></div>
                        <div className="dash-item"><DashBoard /></div>
                        <div className="dash-item"><DashBoard /></div>
                        <div className="dash-item"><DashBoard /></div>
                        <div className="dash-item"><DashBoard /></div>
                    </div>
                    <img src={ arrowLeft} className='arrow-left'/>
                    <img src={ arrowRight} className='arrow-right' />
                </div>
            </div>
        )
    }
}

export default Main