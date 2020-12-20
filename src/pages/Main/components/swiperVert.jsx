import React, { PureComponent } from 'react'
import './swiperVert.less'

import slideBg from 'images/slide.png'
import selectedImg from 'images/selected.png'

import Swiper from "swiper/dist/js/swiper"
import "swiper/dist/css/swiper.css"

class SwiperVert extends PureComponent {
    
    componentDidUpdate(preProps) { 
        const { data, callback } = this.props
        if (JSON.stringify(preProps.data) !== JSON.stringify(data)) { 
            new Swiper ('.swiper-container',{
                loop: true,
                autoplay: 5000,
                initialSlide: 2,
                slidesPerView: 5,
                direction: 'vertical',
                centeredSlides: true,
                onSlideChangeEnd: swipe => { 
                    callback && callback(data[swipe.realIndex].id)
                }
            })
        }
    }

    render() {
        const { data = [] } = this.props
        return (
            <div className='swiper-page'>
                <div className="swiper-container device-swiper">
                    <div className="swiper-cover"></div>
                    <img src={selectedImg} className='swiper-selected' />
                    <div className="swiper-wrapper">
                        {
                            data.map(item => {
                                return <div data-code={item.code} className="swiper-slide">
                                    <img src={slideBg} className='slide-bg' />
                                    <span>{item.code}</span>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default SwiperVert

