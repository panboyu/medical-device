import React, { Component } from 'react'
import Echart from 'components/Echart'
import './barChart.less'
import { barOption } from './chartOption'

class BarChart extends Component {
    render() {
        return (
            <div className='bar-page'>
                <Echart option={barOption} />
            </div>
        )
    }
}

export default BarChart