import React, { PureComponent } from 'react'
import './deviceInfo.less'

import l1 from 'images/l1.png'
import l2 from 'images/l2.png'
import l3 from 'images/l3.png'
import r1 from 'images/r1.png'
import r2 from 'images/r2.png'
import r3 from 'images/r3.png'
import xyImg from 'images/xiaoyi.png'
import earningsBg from 'images/earnings.png'

const rateObj = ['累计总收入同比', '去年同比', '去年当月同比']

const removeMark = (val) => { 
    return val ? +val.replace(/%$/gi, '') : val
}

class DeviceInfo extends PureComponent {

    renderRate = () => { 
        return rateObj.map(item => { 
            return <div className="rate-item">
                <span className='rate-label'>{item}</span>
                <span className='rate-outer'><span className='rate-inner'></span></span>
                <span className='rate-value'>87%</span>
            </div>
        })
    }

    render() {
        const { data = {} } = this.props
        const { returnrateYear, itemIncomeInfo, totalRate, totalSinglediaCount, compareRate } = data
        const [rate] = returnrateYear
        const [income] = itemIncomeInfo
        const [total] = totalRate
        const [totalCount] = totalSinglediaCount
        const [compare] = compareRate
        return (
            <div className='device-info-page'>
                <img src={l1} className='info-l1 info-img' />
                <img src={l2} className='info-l2 info-img' />
                <img src={l3} className='info-l3 info-img' />
                <img src={r1} className='info-r1 info-img' />
                <img src={r2} className='info-r2 info-img' />
                <img src={r3} className='info-r3 info-img' />
                <div className="info-benefit">
                    <img src={xyImg} />
                    <div className='benefit-content'>
                        <div className='benefit-per'>{rate ? removeMark(rate.return_rate) : 0}<span className='benefit-unit'>%</span></div>
                        <div className='benefit-des'>当年任务完成</div>
                    </div>
                </div>
                <div className="info-middle">
                    <div className="info-number">
                        <div className="check-total">
                            <div className='info-content-des'>
                                <div className='info-number-content'>{totalCount ? totalCount.singledia_num : 0}</div>
                                <div className='info-number-des'>本年总检查人数</div>
                            </div>
                        </div>
                        <div className="cure-total">
                            <div className='info-content-des'>
                                <div className='info-number-content'>{totalCount ? totalCount.treatment_num : 0}</div>
                                <div className='info-number-des'>本年总治疗人数</div>
                            </div>
                        </div>
                    </div>
                    <div className="info-rate">
                        <div className="rate-title">同比收益率</div>
                        <div className="rate-item">
                            <span className='rate-label'>累计总收入同比</span>
                            <span className='rate-outer'><span style={{ width: compare ? removeMark(compare.total_yield_rate) : 0 + '%' }} className='rate-inner'></span></span>
                            <span className='rate-value'>{compare ? compare.total_yield_rate : 0}</span>
                        </div>
                        <div className="rate-item">
                            <span className='rate-label'>去年同比</span>
                            <span className='rate-outer'><span style={{ width: compare ? removeMark(compare.last_year_yield_rate) : 0 + '%' }} className='rate-inner'></span></span>
                            <span className='rate-value'>{compare ? compare.last_year_yield_rate : 0}</span>
                        </div>
                        <div className="rate-item">
                            <span className='rate-label'>去年当月同比</span>
                            <span className='rate-outer'><span style={{ width: compare ? removeMark(compare.last_year_month_income_rate) : 0 + '%' }} className='rate-inner'></span></span>
                            <span className='rate-value'>{compare ? compare.last_year_month_income_rate : 0}</span>
                        </div>
                    </div>
                </div>
                <div className="info-earnings">
                    <div className="info-data">
                        <div className='info-data-wrap'>
                            <div className="data-item">
                                <span className="data-label">总收入(万元): </span>
                                <span className="data-value">{income ? income.total_income : 0}</span>
                            </div>
                            <div className="data-item">
                                <span className="data-label">总成本(万元): </span>
                                <span className="data-value">{income ? income.total_cost : 0}</span>
                            </div>
                        </div>
                        <div className="data-line"></div>
                        <div className='info-data-wrap'>
                            <div className="data-item">
                                <span className="data-label">本年收入(万元): </span>
                                <span className="data-value">{income ? income.year_income : 0}</span>
                            </div>
                            <div className="data-item">
                                <span className="data-label">本年成本(万元): </span>
                                <span className="data-value">{income ? income.year_cost : 0}</span>
                            </div>
                        </div>
                    </div>
                    <div className='earnings-content'>
                        <div className="earnings-wrap">
                            <div className='earnings-bg'>
                                <img src={earningsBg} />
                                <span className='earnings-value'>{total ? removeMark(total.total_return_rate) : 0}<span className='earnings-unit'>%</span></span>
                            </div>
                            <div className='earnings-des'>总收益</div>
                        </div>
                        <div className="earnings-wrap">
                            <div className='earnings-bg'>
                                <img src={earningsBg} />
                                <span className='earnings-value'>{total ? removeMark(total.year_return_rate) : 0}<span className='earnings-unit'>%</span></span>
                            </div>
                            <div className='earnings-des'>本年收益</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default DeviceInfo