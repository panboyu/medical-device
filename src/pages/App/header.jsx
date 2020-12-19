import React, { Component } from 'react'
import moment from 'moment'
import './header.less'

import headerBg from 'images/header_bg.png'

class Header extends Component {
    state = {
        time: moment().format('YYYY-MM-DD HH:mm:ss')
    }
    
    componentDidMount() { 
        this.returnDate()
    }

    returnDate = () => { 
        this.timer = setInterval(() => {
            this.setState({ time: moment().format('YYYY-MM-DD HH:mm:ss') })
        }, 1000)
    }
    render() {
        return (
            <div className='header-page'>
                <img src={headerBg} alt="" />
                <div className="header-left">演示医院</div>
                <div className='header-title'>
                    <div className='header-title1'>医疗设备效率效益展示系统</div>
                    <div className='header-title2'>meidical device cost-benefit&efficiency analysis visualization system</div>
                </div>
                <div className='header-right'>{this.state.time}</div>
            </div>
        )
    }
}

export default Header