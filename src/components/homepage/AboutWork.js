import { useEffect } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import Education from "../../asset/education-img.png"
import Sports from "../../asset/sport-img.png"
import HealthImg from "../../asset/health-img.png";
import Ruraltransform from "../../asset/rural-transform-img.png";
import WomenEmpower from "../../asset/women-empower-img.png";
import WomenEmpower2 from "../../asset/women-empower2-img.png";
import Education2 from "../../asset/education2-img.png";
import Sport2 from "../../asset/sport2-img.png";
import Gallery from '../gallery/Gallery';


const AboutWork = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }, [])
    return (
        <>
            <div className='about-work-container'>
                <div className="container">
                    <h3 className="common-title">Stories About Our Work</h3>
                    <div>
                        <div className="row-education custom-slider-2">
                            <Swiper watchSlidesProgress={true}
                                slidesPerView={2}
                                loop={true}
                                navigation={true} modules={[Navigation]}
                                className="mySwiper">
                                <div className="col-lg-6 slider-to-do">
                                    <SwiperSlide className='slider-gap'>
                                        <div className="education-d card-education">
                                            <img src={Education} alt='' />
                                            <h3 className="covid-item-title">RF Scholarships: Pursuing a career in neurosciences is Ananya’s dream</h3>
                                            <p className="covid-item-text">A first-year medical student of Maulana Azad Medical college, Delhi, Ananya
                                                is one of the recipients of the Reliance Foundation Undergraduate Scholarship.</p>
                                        </div>
                                    </SwiperSlide>
                                </div>
                                <div className="col-lg-6">
                                    <SwiperSlide className='slider-gap'>
                                        <div className="education-d card-education">
                                            <img src={Sports} alt='' />
                                            <h3 className="covid-item-title">Jyothi Yarraji, Gulveer Singh shine at Asian Athletics Championships</h3>
                                            <p className="covid-item-text">Reliance Foundation athletes, Jyothi Yarraji and Gulveer, won silver and
                                                bronze medals respectively at the Asian Athletics Championships in Bangkok, Thailand.</p>
                                        </div>
                                    </SwiperSlide>
                                </div>
                                <div className="col-lg-6">
                                    <SwiperSlide className='slider-gap'>
                                        <div className="education-d card-education">
                                            <img src={HealthImg} alt='' />
                                            <h3 className="covid-item-title">Taking healthcare access to women who need it the most</h3>
                                            <p className="covid-item-text">On International Women’s Day, women and girls from disadvantaged communities
                                                in Mumbai were screened at a health camp by Sir H.N. Reliance Foundation Hospital.</p>
                                        </div>
                                    </SwiperSlide>
                                </div>
                                <div className="col-lg-6">
                                    <SwiperSlide className='slider-gap'>
                                        <div className="education-d card-education">
                                            <img src={Ruraltransform} alt='' />
                                            <h3 className="covid-item-title">This farmer doubled his farm income with just one simple change</h3>
                                            <p className="covid-item-text">An inspiration for his fellow villagers, Jai Narayan Bairwa motivates other
                                                farmers in his community to adopt improved agricultural and horticultural practices.</p>
                                        </div>
                                    </SwiperSlide>
                                </div>

                                <div className="col-lg-6 slider-to-do">
                                    <SwiperSlide className='slider-gap'>
                                        <div className="education-d card-education">
                                            <img src={WomenEmpower} alt='' />
                                            <h3 className="covid-item-title">Milk Matters: Enabling women’s agency through better livestock management</h3>
                                            <p className="covid-item-text">Through Reliance Foundation, Basanti found that bit of empowerment, her identity
                                                and also found her voice as a person, as an empowered rural Indian woman.</p>
                                        </div>
                                    </SwiperSlide>
                                </div>
                                <div className="col-lg-6">
                                    <SwiperSlide className='slider-gap'>
                                        <div className="education-d card-education">
                                            <img src={WomenEmpower2} alt='' />
                                            <h3 className="covid-item-title">How women of Bidar made Har Ghar Tiranga a success</h3>
                                            <p className="covid-item-text">As India complated 75 years of independence, women in Karnataka's
                                                Bidar did their bit to support "Har Ghar Tiranga" initiative</p>
                                        </div>
                                    </SwiperSlide>
                                </div>
                                <div className="col-lg-6">
                                    <SwiperSlide className='slider-gap'>
                                        <div className="education-d card-education">
                                            <img src={Education2} alt='' />
                                            <h3 className="covid-item-title">Facilitating better education opportunities for children</h3>
                                            <p className="covid-item-text">Supporting the dreams of students from humble backgrounds,
                                                Reliance Foundation engages in multiple education initiatives.</p>
                                        </div>
                                    </SwiperSlide>
                                </div>
                                <div className="col-lg-6">
                                    <SwiperSlide className='slider-gap'>
                                        <div className="education-d card-education">
                                            <img src={Sport2} alt='' />
                                            <h3 className="covid-item-title">What builds world-class weightlifting talent? Let’s find out</h3>
                                            <p className="covid-item-text">Achinta Sheuli’s performances indicate that he can take the Indian weightlifting
                                                to greater heights with continual support and multi-dimensional expertise.</p>
                                        </div>
                                    </SwiperSlide>
                                </div>
                            </Swiper>
                            <button class="read-more btn about-btn">Read more</button>
                        </div>
                        <div className="row-education custom-slider-1">
                            <Swiper watchSlidesProgress={true}
                                slidesPerView={1}
                                loop={true}
                                navigation={true} modules={[Navigation, Autoplay]}
                                className="mySwiper">


                                <div className="col-lg-6 slider-to-do">
                                    <SwiperSlide className='slider-gap'>
                                        <div className="education-d card-education">
                                            <img src={Education} alt='' />
                                            <h3 className="covid-item-title">RF Scholarships: Pursuing a career in neurosciences is Ananya’s dream</h3>
                                            <p className="covid-item-text">A first-year medical student of Maulana Azad Medical college, Delhi, Ananya
                                                is one of the recipients of the Reliance Foundation Undergraduate Scholarship.</p>
                                        </div>
                                    </SwiperSlide>
                                </div>
                                <div className="col-lg-6">
                                    <SwiperSlide className='slider-gap'>
                                        <div className="education-d card-education">
                                            <img src={Sports} alt='' />
                                            <h3 className="covid-item-title">Jyothi Yarraji, Gulveer Singh shine at Asian Athletics Championships</h3>
                                            <p className="covid-item-text">Reliance Foundation athletes, Jyothi Yarraji and Gulveer, won silver and
                                                bronze medals respectively at the Asian Athletics Championships in Bangkok, Thailand.</p>
                                        </div>
                                    </SwiperSlide>
                                </div>
                                <div className="col-lg-6">
                                    <SwiperSlide className='slider-gap'>
                                        <div className="education-d card-education">
                                            <img src={HealthImg} alt='' />
                                            <h3 className="covid-item-title">Taking healthcare access to women who need it the most</h3>
                                            <p className="covid-item-text">On International Women’s Day, women and girls from disadvantaged communities
                                                in Mumbai were screened at a health camp by Sir H.N. Reliance Foundation Hospital.</p>
                                        </div>
                                    </SwiperSlide>
                                </div>
                                <div className="col-lg-6">
                                    <SwiperSlide className='slider-gap'>
                                        <div className="education-d card-education">
                                            <img src={Ruraltransform} alt='' />
                                            <h3 className="covid-item-title">This farmer doubled his farm income with just one simple change</h3>
                                            <p className="covid-item-text">An inspiration for his fellow villagers, Jai Narayan Bairwa motivates other
                                                farmers in his community to adopt improved agricultural and horticultural practices.</p>
                                        </div>
                                    </SwiperSlide>
                                </div>

                                <div className="col-lg-6 slider-to-do">
                                    <SwiperSlide className='slider-gap'>
                                        <div className="education-d card-education">
                                            <img src={WomenEmpower} alt='' />
                                            <h3 className="covid-item-title">Milk Matters: Enabling women’s agency through better livestock management</h3>
                                            <p className="covid-item-text">Through Reliance Foundation, Basanti found that bit of empowerment, her identity
                                                and also found her voice as a person, as an empowered rural Indian woman.</p>
                                        </div>
                                    </SwiperSlide>
                                </div>
                                <div className="col-lg-6">
                                    <SwiperSlide className='slider-gap'>
                                        <div className="education-d card-education">
                                            <img src={WomenEmpower2} alt='' />
                                            <h3 className="covid-item-title">How women of Bidar made Har Ghar Tiranga a success</h3>
                                            <p className="covid-item-text">As India complated 75 years of independence, women in Karnataka's
                                                Bidar did their bit to support "Har Ghar Tiranga" initiative</p>
                                        </div>
                                    </SwiperSlide>
                                </div>
                                <div className="col-lg-6">
                                    <SwiperSlide className='slider-gap'>
                                        <div className="education-d card-education">
                                            <img src={Education2} alt='' />
                                            <h3 className="covid-item-title">Facilitating better education opportunities for children</h3>
                                            <p className="covid-item-text">Supporting the dreams of students from humble backgrounds,
                                                Reliance Foundation engages in multiple education initiatives.</p>
                                        </div>
                                    </SwiperSlide>
                                </div>
                                <div className="col-lg-6">
                                    <SwiperSlide className='slider-gap'>
                                        <div className="education-d card-education">
                                            <img src={Sport2} alt='' />
                                            <h3 className="covid-item-title">What builds world-class weightlifting talent? Let’s find out</h3>
                                            <p className="covid-item-text">Achinta Sheuli’s performances indicate that he can take the Indian weightlifting
                                                to greater heights with continual support and multi-dimensional expertise.</p>
                                        </div>
                                    </SwiperSlide>
                                </div>
                            </Swiper>
                            <button class="read-more btn about-btn">Read more</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* GAllery Page  */}

            <Gallery />



        </>
    )
}

export default AboutWork