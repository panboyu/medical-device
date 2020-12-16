import React, { Component } from 'react'
import { connect } from 'react-redux'
import './device.less'

import * as actions from 'actions/Main/device'
import reducers from 'reducers/Main/device'
import { injectReducer } from 'src/utils/injectReducer'
injectReducer('device', reducers)

import Income from './components/income'
import DeviceInfo from './components/deviceInfo'
import Cost from './components/cost'
import BarChart from './components/barChart'
import DeviceWorkload from './components/deviceWorkload'
import SwiperVert from './components/swiperVert'


class Device extends Component {
    componentDidMount() { 
        this.props.getItemList({ name: 'itemList' })
    }
    render() {
        const { itemList } = this.props
        console.log(itemList)
        return (
            <div className='device-page'>
                <div className="device-up">
                    <div className="device-scroll">
                        <SwiperVert data={itemList} />
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

export default connect(
    ({ device }) => { 
        return {
            itemList: device.itemList,
        }
    }, {
        ...actions
    }
)(Device)