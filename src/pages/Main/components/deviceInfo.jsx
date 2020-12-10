import React, { Component } from 'react'
import './deviceInfo.less'

import l1 from 'images/l1.png'
import l2 from 'images/l2.png'
import l3 from 'images/l3.png'
import r1 from 'images/r1.png'
import r2 from 'images/r2.png'
import r3 from 'images/r3.png'
import xyImg from 'images/xiaoyi.png'
import numberBg from 'images/numberBg.png'
import earningsBg from 'images/earnings.png'

const rateObj = ['累计总收入同比', '去年同比', '去年当月同比']

class DeviceInfo extends Component {

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
                        <div className='benefit-per'>65<span className='benefit-unit'>%</span></div>
                        <div className='benefit-des'>当年任务完成</div>
                    </div>
                </div>
                <div className="info-middle">
                    <div className="info-number">
                        <div className="check-total">
                            <div className='info-content-des'>
                                <div className='info-number-content'>0003600000</div>
                                <div className='info-number-des'>本年总检查人数</div>
                            </div>
                        </div>
                        <div className="cure-total">
                            <div className='info-content-des'>
                                <div className='info-number-content'>0003600000</div>
                                <div className='info-number-des'>本年总治疗人数</div>
                            </div>
                        </div>
                    </div>
                    <div className="info-rate">
                        <div className="rate-title">同比收益率</div>
                        { this.renderRate()}
                    </div>
                </div>
                <div className="info-earnings">
                    <div className="info-data">
                        <div className='info-data-wrap'>
                            <div className="data-item">
                                <span className="data-label">总收入(万元): </span>
                                <span className="data-value">12313</span>
                            </div>
                            <div className="data-item">
                                <span className="data-label">总成本(万元): </span>
                                <span className="data-value">15321</span>
                            </div>
                        </div>
                        <div className="data-line"></div>
                        <div className='info-data-wrap'>
                            <div className="data-item">
                                <span className="data-label">本年收入(万元): </span>
                                <span className="data-value">456</span>
                            </div>
                            <div className="data-item">
                                <span className="data-label">本年成本(万元): </span>
                                <span className="data-value">633</span>
                            </div>
                        </div>
                    </div>
                    <div className='earnings-content'>
                        <div className="earnings-wrap">
                            <div className='earnings-bg'>
                                <img src={earningsBg} />
                                <span className='earnings-value'>47<span className='earnings-unit'>%</span></span>
                            </div>
                            <div className='earnings-des'>总收益</div>
                        </div>
                        <div className="earnings-wrap">
                            <div className='earnings-bg'>
                                <img src={earningsBg} />
                                <span className='earnings-value'>47<span className='earnings-unit'>%</span></span>
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