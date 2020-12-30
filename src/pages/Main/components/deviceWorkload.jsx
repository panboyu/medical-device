import React, { Component } from 'react'

import './deviceWorkload.less'

import Swiper from "swiper/dist/js/swiper"

class DeviceWorkload extends Component {
    state = { swiperHeight: 0 }
    componentDidUpdate(preProps) {
        const { data } = this.props
        if (JSON.stringify(preProps.data) !== JSON.stringify(data)) {
            new Swiper('#swiper2', {
                loop: true,
                autoplay: 1500,
                slidesPerView: 7,
                initialSlide: 0,
                direction: 'vertical',
            })
        }
    }

    componentDidMount() {
        this.setState({ swiperHeight: this.refDevice.clientHeight - this.refTitle.clientHeight })
    }

    renderItem = item => {
        return <div className="device-td swiper-slide">
            <span className='th1'>{item.name || item.code}</span>
            <span className='th2'>{item.sn}</span>
            <span className='th3'>{item.brand}</span>
            <span className='th4'>{item.year_inspection_times || item.num}</span>
        </div>
    }
    render() {
        const { data = [] } = this.props
        return (
            <div ref={c => this.refDevice = c} className='device-workload-page'>
                <div ref={c => this.refTitle = c}>
                    <div className="device-title">本年设备工作量排行(前10)</div>
                    <div className='device-th'>
                        <span className='th1'>设备名称</span>
                        <span className='th2'>资产编号</span>
                        <span className='th3'>品牌型号</span>
                        <span className='th4 th-lasth'>
                            <span className='th5'>当年检查</span>
                            <span className='th6'>人次(万次)</span>
                        </span>
                    </div>
                </div>
                <div style={{ height: this.state.swiperHeight }} id='swiper2' className="swiper-container device-table">
                    <div className="swiper-wrapper">
                        {
                            data.map(item => {
                                return this.renderItem(item)
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default DeviceWorkload