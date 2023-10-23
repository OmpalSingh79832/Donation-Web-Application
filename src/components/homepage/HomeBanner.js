import React, { useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import "../Responsive.css"
import { Autoplay, Navigation } from 'swiper/modules';
import AboutWork from "./AboutWork"
const HomeBanner = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }, [])
    return (
        <>


            <Swiper
                loop={true}
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Navigation, Autoplay]}
                className="mySwiper"
            >
                <div>
                    <SwiperSlide>
                        <div className='ambani-img'>
                            <p>Touching Lives - Reliance for India</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='innovation-img'>
                            <p>Click here to read Ideas, Innovation, Implementtion - our latest publication </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='reliance-foundation'>
                            <p>Click here to learn more about our dialogues in the UNGA week </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='pinapple-img'>
                            <p>Providing 360-degree support to help transform rural communities <br />Read more about our Rural Transformation initiatives</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='doctor-img'>
                            <p>Click here to read Ideas, Innovation, Implementtion - our latest publication <br />Read more about our Healthcare initiatives </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='chemistry-lab-img'>
                            <p>Transforming and supporting education in India <br />Read more about our Education initiatives </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='race-img'>
                            <p>Inspiring sports through country-wide, multi-sport platforms for children and youth of India <br />Read more about our Sports initiative </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='grass-img'>
                            <p>Supporting women in realising their dreams <br />Read more about our Women Empowerment initiatives </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='hospital-img'>
                            <p>Supporting the nation through the pandemic <br />Read more about our COVID-19 Response </p>
                        </div>
                    </SwiperSlide>
                </div>
            </Swiper>



            {/* What We Do Page  */}
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-lg-4 d-flex align-items-stretch">
                        <div className="whoweare">
                            <h2>Who we are</h2>
                            <p>Under the virtuous leadership of Smt. Nita M Ambani, Reliance
                                Foundation was set up in 2010 to provide impetus to various
                                philanthropic initiatives of Reliance Industries ltd.</p>
                            <div><button class="read-more btn">Read more</button></div>
                        </div>
                    </div>
                    <div className="col-lg-4 d-flex align-items-stretch">
                        <div className="whoweare">
                            <h2>What we do</h2>
                            <p> Rural Transformation, Health, Education, Sports for Development,
                                Women Empowerment, Disaster Management, Arts, Culture &amp Heritage and Urban Renewal.</p>
                            <div><button class="read-more btn">Read more</button></div>
                        </div>
                    </div>
                    <div className="col-lg-4 d-flex align-items-stretch">
                        <div className="whoweare">
                            <h2>Media</h2>
                            <p> Real-life stories of people whose lives have been touched by Reliance
                                Foundation; Photos, Videos, News, <br /> Press Releases <br /> and Events &amp; Updates.</p>
                            <div><button class="read-more btn">Read more</button></div>
                        </div>
                    </div>
                </div>
            </div>
            <AboutWork />


        </>
    )
}

export default HomeBanner





