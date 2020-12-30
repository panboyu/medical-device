import React, { Component } from 'react'
import './info.less'

import l1 from 'images/l1.png'
import l2 from 'images/l2.png'
import l3 from 'images/l3.png'
import r1 from 'images/r1.png'
import r2 from 'images/r2.png'
import r3 from 'images/r3.png'
import xyImg from 'images/xiaoyi.png'
import numberBg from 'images/numberBg.png'
import earningsBg from 'images/earnings.png'

const removeMark = (val) => {
    return val ? +val.replace(/%$/gi, '') : val
}

class Info extends Component {

    render() {
        const { data } = this.props
        const [item = {}] = data
        return (
            <div className='info-page'>
                <img src={l1} className='info-l1 info-img' />
                <img src={l2} className='info-l2 info-img' />
                <img src={l3} className='info-l3 info-img' />
                <img src={r1} className='info-r1 info-img' />
                <img src={r2} className='info-r2 info-img' />
                <img src={r3} className='info-r3 info-img' />
                <div className="info-benefit">
                    <img src={xyImg} />
                    <div className='benefit-content'>
                        <div className='benefit-per'>
                            {removeMark(item.total_yield_rate)}
                            <span className='benefit-unit'>%</span>
                        </div>
                        <div className='benefit-des'>总收益率</div>
                    </div>
                </div>
                <div className="info-middle">
                    <div className="info-number">
                        {/* <img src={numberBg} /> */}
                        <div className="check-total">
                            <div className='info-content-des'>
                                <div className='info-number-content'>{item.year_inspection_times}</div>
                                <div className='info-number-des'>本年总检查人数</div>
                            </div>
                        </div>
                    </div>
                    <div className="info-rate">
                        <div className="rate-title">同比收益率</div>
                        <div className="rate-item">
                            <span className='rate-label'>当年利润率</span>
                            <span className='rate-outer'><span style={{ width: removeMark(item.year_profit_rate) + '%' }} className='rate-inner'></span></span>
                            <span className='rate-value'>{item.year_profit_rate}</span>
                        </div>
                        <div className="rate-item">
                            <span className='rate-label'>去年同比</span>
                            <span className='rate-outer'><span style={{ width: removeMark(item.last_year_income_rate) + '%' }} className='rate-inner'></span></span>
                            <span className='rate-value'>{item.last_year_income_rate}</span>
                        </div>
                        <div className="rate-item">
                            <span className='rate-label'>去年当月同比</span>
                            <span className='rate-outer'><span style={{ width: removeMark(item.last_year_month_income_rate) + '%' }} className='rate-inner'></span></span>
                            <span className='rate-value'>{item.last_year_month_income_rate}</span>
                        </div>
                    </div>
                </div>
                <div className="info-earnings">
                    <div className="info-data">
                        <div className='info-data-wrap'>
                            <div className="data-item">
                                <span className="data-label">总收入(万元): </span>
                                <span className="data-value">{item.total_income}</span>
                            </div>
                            <div className="data-item">
                                <span className="data-label">总成本(万元): </span>
                                <span className="data-value">{item.total_cost}</span>
                            </div>
                        </div>
                        <div className="data-line"></div>
                        <div className='info-data-wrap'>
                            <div className="data-item">
                                <span className="data-label">本年收入(万元): </span>
                                <span className="data-value">{item.year_income}</span>
                            </div>
                            <div className="data-item">
                                <span className="data-label">本年成本(万元): </span>
                                <span className="data-value">{item.year_cost}</span>
                            </div>
                        </div>
                    </div>
                    <div className='earnings-content'>
                        <div className="earnings-wrap">
                            <div className='earnings-bg'>
                                <img src={earningsBg} />
                                <span className='earnings-value'>{removeMark(item.year_yield_rate)}<span className='earnings-unit'>%</span></span>
                            </div>
                            <div className='earnings-des'>本年收益率</div>
                        </div>
                        <div className="earnings-wrap">
                            <div className='earnings-bg'>
                                <img src={earningsBg} />
                                <span className='earnings-value'>{removeMark(item.last_year_yield_rate)}<span className='earnings-unit'>%</span></span>
                            </div>
                            <div className='earnings-des'>去年收益率</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Info