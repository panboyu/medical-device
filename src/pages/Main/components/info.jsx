import React, { Component } from 'react'
import './info.less'

import l1 from 'images/l1.png'
import l2 from 'images/l2.png'
import l3 from 'images/l3.png'
import r1 from 'images/r1.png'
import r2 from 'images/r2.png'
import r3 from 'images/r3.png'
import xyImg from 'images/xiaoyi.png'

class Info extends Component {
    render() {
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
                        <div className='benefit-per'>65<span className='benefit-unit'>%</span></div>
                        <div className='benefit-des'>当年任务完成</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Info