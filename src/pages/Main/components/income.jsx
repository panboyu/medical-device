import React, { Component } from 'react'
import './income.less'
import Echart from 'components/Echart'
import { polarOption} from './chartOption'

class Income extends Component {

    renderYear = (year = 2020, p = 50, value = 50) => { 
        return <div className='year-item'>
            <span className='year-label'>{year}</span>
            <span className='year-outer'>
                <span className='year-inner' style={{ width: p + '%' }}></span>
                <span className='year-value'>{value}</span>
            </span>
        </div>
    }

    render() {
        return (
            <div className='income-page'>
                <div className='income-trend'>
                    <div className='income-title'>年收入趋势</div>
                    <div className='income-year'>
                        {this.renderYear()}
                        {this.renderYear(2019,80,80)}
                        {this.renderYear(2018,70,70)}
                        {this.renderYear(2017,60,60)}
                        {this.renderYear(2016,30,30)}
                        {this.renderYear(2015,15,15)}
                    </div>
                </div>
                <div className="income-line">
                    <div className='income-line-item'></div>
                </div>
                <div className='income-cost'>
                    <div className='income-title income-title2'>总成本构成</div>
                    <div className='income-chart'>
                        <Echart option={polarOption} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Income