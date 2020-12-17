import React, { Component } from 'react'
import Echart from 'components/Echart'
import { costOption } from './chartOption'
import './cost.less'

class Cost extends Component {
    render() {
        const { data = [] } = this.props
        let xData = []
        let data1 = []
        let data2 = []
        data.forEach(item => { 
            xData.push(item.month || item.date)
            data1.push(item.income)
            data2.push(item.cost)
        })
        const option = {
            ...costOption,
            xAxis: {
                ...costOption.xAxis,
                data: xData
            },
            series: [
                {
                    ...costOption.series[0],
                    data: data1,
                },
                {
                    ...costOption.series[1],
                    data: data2,
                },
            ]
        }
        return (
            <div className='cost-page'>
                <Echart option={option} />
            </div>
        )
    }
}

export default Cost