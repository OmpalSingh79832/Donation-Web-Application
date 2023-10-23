import React, { useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import "../Responsive.css"
import { Autoplay, Navigation } from 'swiper/modules';




const Careers = () => {

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }, [])
    return (
        <>
            <div className="about-main">
                <h3>Careers Maya Web Tech</h3>
                <div className="container">
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
                    <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, dolor alias soluta amet magni, perferendis ipsa optio ducimus nostrum, molestias ea! Error illo explicabo labore amet distinctio ratione blanditiis ab.
                        Vel, esse nisi dolor reiciendis consequatur iste distinctio perferendis exercitationem dignissimos porro impedit laboriosam commodi numquam nemo omnis. Quas quidem ad deserunt placeat eligendi culpa fugit nisi exercitationem soluta quam!
                        Quod, sapiente distinctio. Quibusdam repudiandae deserunt cum, et excepturi a ratione minima quaerat, sunt neque voluptatibus quo laboriosam porro laudantium nobis veniam aliquam temporibus explicabo. Perferendis voluptatibus nesciunt iure laborum.
                        Harum explicabo inventore et adipisci sit labore atque libero! Porro et labore culpa ratione tempore? Cupiditate ducimus eius eligendi, tempore distinctio fuga assumenda nostrum doloremque quidem labore sit dignissimos quos?
                        Sunt cupiditate dolores praesentium laudantium voluptates. Voluptate deserunt, ipsum placeat mollitia autem atque laboriosam rem sed commodi consectetur repellendus fugiat explicabo ratione quasi quos soluta! Tempora doloremque alias distinctio id.</span>
                    <div><button class="read-more btn mt-4">CLICK HERE TO VISIT US IN LINKEDIN</button></div>

                </div>
            </div>


        </>
    )
}

export default Careers