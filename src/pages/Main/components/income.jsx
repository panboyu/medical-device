import React, { Component } from 'react'
import './income.less'
import Echart from 'components/Echart'
import { polarOption } from './chartOption'
import utils from 'utils/common'

class Income extends Component {

    renderYear = (year = 2020, value = 0, max) => { 
        let percentage = value/max * 100 * 0.9
        return <div className='year-item'>
            <span className='year-label'>{year}</span>
            <span className='year-outer'>
                <span className='year-inner' style={{ width: percentage + '%' }}></span>
                <span className='year-value'>{utils.keepTwo(value)}</span>
            </span>
        </div>
    }

    render() {
        const { data = [], series = [], title='年收入趋势' } = this.props
        let max = data.length ? data.sort((a, b) => { 
            return b.income - a.income
        })[0].income : 0
        let dataName = []
        let dataCost = []
        series.forEach(item => { 
            dataName.push(item.cost_item)
            dataCost.push(item.cost)
        })
        let option = {
            ...polarOption,
            radiusAxis: {
                ...polarOption.radiusAxis,
                data: dataName,
            },
            series: {
                ...polarOption.series,
                data: dataCost,
            }
        }
        return (
            <div className='income-page'>
                <div className='income-trend'>
                    <div className='income-title'>{title}</div>
                    <div className='income-year'>
                        {
                            data.map(item => { 
                                return this.renderYear(item.year, item.income || item.cost, max)
                            })
                        }
                    </div>
                </div>
                <div className="income-line">
                    <div className='income-line-item'></div>
                </div>
                <div className='income-cost'>
                    <div className='income-title income-title2'>总成本构成</div>
                    <div className='income-chart'>
                        <Echart option={option} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Income