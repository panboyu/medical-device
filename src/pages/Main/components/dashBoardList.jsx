import React, { Component } from 'react'
import DashBoard from './dashBoard'
import Swiper from "swiper/dist/js/swiper"

class DashBoardList extends Component {
    componentDidUpdate(preProps) {
        const { data } = this.props
        if (JSON.stringify(preProps.data) !== JSON.stringify(data)) {
            new Swiper('#swiper1', {
                loop: true,
                autoplay: 5000,
                direction: 'horizontal',
                slidesPerView: 6,
            })
        }
    }
    render() {
        const { data } = this.props
        return (
            <div id='swiper1' className='swiper-container main-down-wrap'>
                <div className="swiper-wrapper">
                    {
                        data.map(item => {
                            return <div className="dash-item swiper-slide"><DashBoard data={item} /></div>
                        })
                    }
                </div>
            </div>
        )
    }
}

export default DashBoardList