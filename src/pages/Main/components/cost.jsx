import React, { Component } from 'react'
import Echart from 'components/Echart'
import { costOption } from './chartOption'
import './cost.less'

class Cost extends Component {
    render() {
        return (
            <div className='cost-page'>
                <Echart option={costOption} />
            </div>
        )
    }
}

export default Cost