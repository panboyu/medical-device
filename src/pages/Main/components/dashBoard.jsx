import React, { Component } from 'react'
import './dashBoard.less'
import titleBg from 'images/titleBg.png'
import panelBg from 'images/panelBg.png'
import arrow from 'images/arrow.png'
import l1 from 'images/dashl1.png'
import l2 from 'images/dashl2.png'
import l3 from 'images/dashl3.png'
import r1 from 'images/dashr1.png'
import r2 from 'images/dashr2.png'
import r3 from 'images/dashr3.png'

class DashBoard extends Component {
    render() {
        return (
            <div className='dash-board-page'>
                <div className="dash-wrap">
                    <div className="dash-title">
                        <img src={titleBg} />
                        <span className='dash-title-content'>核磁共振成像系统</span>
                    </div>
                    <div className="dash-per">
                        <div className='dash-per-item'>
                            <span className='dash-label'>总收入</span>
                            <span className='dash-outer'><span className='dash-inner'></span></span>
                            <span className='dash-value'>1000万元</span>
                        </div>
                        <div className='dash-per-item'>
                            <span className='dash-label'>总成本</span>
                            <span className='dash-outer'><span className='dash-inner'></span></span>
                            <span className='dash-value'>610万元</span>
                        </div>
                    </div>
                    <div className='dash-earnings'>
                        <span className='dash-earnings-a'>收益率</span>
                        <span>
                            <span className='dash-earnings-b'>39%</span>
                            <span className='dash-earnings-a'>   x   </span>
                            <span className='dash-earnings-b'>004</span>
                        </span>
                        <span className='dash-earnings-a'>台</span>
                    </div>
                    <div className='dash-panel'>
                        <img src={panelBg} className='panel-bg'/>
                        <img src={arrow} className='dash-arrow' />
                        <span className='dash-panel-inner'>
                            <span>利用率</span>
                        </span>
                    </div>
                    <img src={l1} className='dash-l1 dash-border' />
                    <img src={l2} className='dash-l2 dash-border' />
                    <img src={l3} className='dash-l3 dash-border' />
                    <img src={r1} className='dash-r1 dash-border' />
                    <img src={r2} className='dash-r2 dash-border' />
                    <img src={r3} className='dash-r3 dash-border' />
                </div>
            </div>
        )
    }
}

export default DashBoard