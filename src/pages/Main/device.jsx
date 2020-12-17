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
    getAllData = deviceId => { 
        this.props.getItemCostTrend({ name: 'itemCostTrend', deviceId })
        this.props.getItemCostPart({ name: 'itemCostPart', deviceId })
        this.props.getIncomeCostTrend({ name: 'incomeCostTrend', deviceId })
        this.props.getSinglediaTrend({ name: 'singlediaTrend', deviceId })
        this.props.getSinglediaCount({ name: 'departmentSinglediaCount', deviceId })
        this.props.getItemWorkload({ name: 'itemWorkload', deviceId })
        this.props.getItemReturnrateYear({ name: 'itemReturnrateYear', deviceId })
        this.props.getItemIncomeInfo({ name: 'itemIncomeInfo', deviceId })

        this.props.getTotalReturnRate({ name: 'totalReturnRate', deviceId })
        this.props.getTotalSinglediaCount({ name: 'itemSinglediaCountYear', deviceId })
        this.props.getCompareReturnRate({ name: 'compareReturnRate', deviceId })
    }
    render() {
        const {
            itemList,
            itemCostTrend,
            itemCostPart,
            incomeCostTrend,
            singlediaTrend,
            singleCount,
            workload,
            returnrateYear,
            itemIncomeInfo,
            totalRate,
            totalSinglediaCount,
            compareRate,
        } = this.props
        let trendData = []
        let trendX = []
        singlediaTrend.forEach(item => { 
            trendX.push(item.date)
            trendData.push(item.singledia_num)
        })
        let curData = []
        let curX = []
        singleCount.forEach(item => { 
            curX.push(item.department)
            curData.push(item.num)
        })
        return (
            <div className='device-page'>
                <div className="device-up">
                    <div className="device-scroll">
                        <SwiperVert callback={this.getAllData} data={itemList} />
                    </div>
                    <div className="device-info">
                        <DeviceInfo data={{returnrateYear, itemIncomeInfo, totalRate, totalSinglediaCount, compareRate}} />
                    </div>
                </div>
                <div className="device-down">
                    <div className="device-income">
                        <Income data={itemCostTrend} series={itemCostPart} />
                    </div>
                    <div className="device-chart">
                        <div className="device-chart-left">
                            <div className="chart-wrap">
                                <Cost data={incomeCostTrend} />
                            </div>
                            <div className="chart-wrap">
                                <BarChart title='检查人次近12月趋势' xData={trendX} data={trendData} />
                            </div>
                        </div>
                        <div className="device-chart-right">
                            <div className="chart-wrap">
                                <DeviceWorkload data={workload} />
                            </div>
                            <div className="chart-wrap">
                                <BarChart title='科室当年工作量排行(前10)' xData={curX} data={curData} legend='本年检查人次 (万)' />
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
            itemCostTrend: device.itemCostTrend,
            itemCostPart: device.itemCostPart,
            incomeCostTrend: device.incomeCostTrend,
            singlediaTrend: device.singlediaTrend,
            singleCount: device.singleCount,
            workload: device.workload,
            returnrateYear: device.returnrateYear,
            itemIncomeInfo: device.itemIncomeInfo,
            totalRate: device.totalRate,
            totalSinglediaCount: device.totalSinglediaCount,
            compareRate: device.compareRate,
        }
    }, {
        ...actions
    }
)(Device)