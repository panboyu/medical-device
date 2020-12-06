import React, { Component } from 'react'
import './header.less'

import headerBg from 'images/header_bg.png'

class Header extends Component {
    render() {
        return (
            <div className='header-page'>
                <img src={headerBg} alt="" />
                <div className="header-left">演示医院</div>
                <div className='header-title'>
                    <div className='header-title1'>医疗设备效率效益展示系统</div>
                    <div className='header-title2'>meidical device cost-benefit&efficiency analysis visualization system</div>
                </div>
                <div className='header-right'>2020-06-06 20:00:00</div>
            </div>
        )
    }
}

export default Header