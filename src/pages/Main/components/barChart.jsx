import React, { Component } from 'react'
import Echart from 'components/Echart'
import './barChart.less'
import { barOption } from './chartOption'

class BarChart extends Component {
    render() {
        const { xData, data, title, legend } = this.props
        const option = {
            ...barOption,
            title: {
                ...barOption.title,
                text: title,
            },
            legend: {
                ...barOption.legend,
                data: [legend],
            },
            xAxis: {
                ...barOption.xAxis,
                data: xData,
            },
            series: {
                ...barOption.series,
                data,
            }
        }
        return (
            <div className='bar-page'>
                <Echart option={option} />
            </div>
        )
    }
}

export default BarChart