import React, { Component } from 'react'
import './device.less'
import Income from './components/income'
import DeviceInfo from './components/deviceInfo'
import Cost from './components/cost'
import BarChart from './components/barChart'
import DeviceWorkload from './components/deviceWorkload'
import SwiperVert from './components/swiperVert'

class Device extends Component {
    render() {
        return (
            <div className='device-page'>
                <div className="device-up">
                    <div className="device-scroll">
                        <SwiperVert />
                    </div>
                    <div className="device-info">
                        <DeviceInfo />
                    </div>
                </div>
                <div className="device-down">
                    <div className="device-income">
                        <Income/>
                    </div>
                    <div className="device-chart">
                        <div className="device-chart-left">
                            <div className="chart-wrap">
                                <Cost />
                            </div>
                            <div className="chart-wrap">
                                <BarChart />
                            </div>
                        </div>
                        <div className="device-chart-right">
                            <div className="chart-wrap">
                                <DeviceWorkload />
                            </div>
                            <div className="chart-wrap">
                                <BarChart />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Device