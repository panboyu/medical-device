import React, { PureComponent } from 'react'
import './swiperVert.less'

import AwesomeSwiper from 'react-awesome-swiper'
import slideBg from 'images/slide.png'
import selectedImg from 'images/selected.png'

const config = {
    loop: true,
    autoplay: {
      delay: 5000,
      stopOnLastSlide: false,
      disableOnInteraction: true,
    },
    centeredSlides: true,
    slidesPerView: 5,
    preloadImages: false,
    lazy: true,
    speed: 500,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    direction : 'vertical',
    pagination: {
      el: '.swiper-pagination',
      bulletElement : 'li',
      hideOnClick :true,
      clickable :true,
    },
}

class SwiperVert extends PureComponent {

    render() {
        const { data = [], callback } = this.props
        return (
            <div className='swiper-page'>
                <AwesomeSwiper
                    config={{
                        ...config,
                        on: {
                            slideChange: function () {
                                callback && callback(data[this.realIndex].id)
                            },
                        }
                    }}
                    className="device-swiper">
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
                </AwesomeSwiper>
            </div>
        )
    }
}

export default SwiperVert

