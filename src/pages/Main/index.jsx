import React, { Component } from 'react'
import { connect } from 'react-redux'
import './index.less'

import * as actions from 'actions/Main'
import reducers from 'reducers/Main'
import { injectReducer } from 'src/utils/injectReducer'
injectReducer('main', reducers)

import Income from './components/income'
import Info from './components/info'
import DeviceWorkload from './components/deviceWorkload'
import Cost from './components/cost'
import BarChart from './components/barChart'
import DashBoard from './components/dashBoard'
import arrowLeft from 'images/arrowLeft.png'
import arrowRight from 'images/arrowRight.png'

class Main extends Component {
    componentDidMount() { 
        //`年收入趋势
        this.props.getYearIncome({ name: 'hospitalYearIncome' })
        //  总成本构成
        this.props.getHospitalAlllCost({ name: 'hospitalAlllCost' })
        //  当年收益概览
        this.props.getHospitalYearEarningsOverview({ name: 'hospitalYearEarningsOverview' })
        //  当年设备工作量排行前十
        this.props.getHospitalYearWorkloadRank({ name: 'hospitalYearWorkloadRank' })
        //  近12月趋势
        this.props.getHospitalTwelveMonthList({ name: 'hospitalTwelveMonthList' })
        //  科室当年工作量排行前十
        this.props.getHospitalYearDepartRank({ name: 'hospitalYearDepartRank' })
        //  六台设备效率分析 
        this.props.getHospitalSixCategoryItems({ name: 'hospitalSixCategoryItems' })
    }
    render() {
        const {
            yearIncome, allCost,
            erningsOverview,
            workloadRank,
            twelveMonthList,
            deparRank,
            sixCate,
        } = this.props
        return (
            <div className='main-page'>
                <div className='main-up'>
                    <div className="main-income">
                        <Income data={yearIncome} series={allCost} />
                    </div>
                    <div className="main-info-chart">
                        <div className="main-info">
                            <Info data={erningsOverview} />
                        </div>
                        <div className="main-chart">
                            <div className="main-chart-item">
                                <DeviceWorkload data={workloadRank} />
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
                        {
                            sixCate.map(item => { 
                                return <div className="dash-item"><DashBoard data={item} /></div>
                            })
                        }
                    </div>
                    <img src={ arrowLeft} className='arrow-left'/>
                    <img src={ arrowRight} className='arrow-right' />
                </div>
            </div>
        )
    }
}

export default connect(
    ({ main }) => { 
        return {
            yearIncome: main.yearIncome,
            allCost: main.allCost,
            erningsOverview: main.erningsOverview,
            workloadRank: main.workloadRank,
            twelveMonthList: main.twelveMonthList,
            deparRank: main.deparRank,
            sixCate: main.sixCate,
        }
    }, {
        ...actions
    }
)(Main)