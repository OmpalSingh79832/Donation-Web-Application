import { useEffect } from 'react'
import Sports11 from "../../asset/spots11.jpeg";
import Sports22 from "../../asset/sport22.jpg"
const SpotsDev = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }, [])
    return (
        <>
            <div className="custom-section">
                <div className="about-main mb-4">
                    <h3>Sports For Development</h3>
                    <div className="health-home">
                        <img src={Sports11} alt="" />
                        <p className='lh-lg'>Maya Web Tech Foundation believes in sports as a medium to encourage lifelong learning, and to build character and leadership skills among the youth of India – our future nation builders. We believe that when children learn and play, communities grow and countries prosper. Besides using sports to empower the youth, we aim to create a platform for the champions of the future.
                            Besides, the Maya Web Tech Foundation Sports for Development platform nurtures sporting talent from across India at the grassroots stage and help them grow into high performers – through multi-pronged programmes, and in the process helps India set the bar high in sports.
                            Maya Web Tech Foundation believes in the power of collaboration to achieve the nation’s shared vision in sports. We forge partnerships with various sporting bodies to organise trainings and competitions, the development or improvement of sporting infrastructure to world-class standards and to ensure that budding talent have the necessary equipment to perform. The sports initiatives are free and open to all and have reached the remotest parts of the country, touching the lives of 2.15 crore youngsters since inception.</p>
                    </div>
                </div>

                {/* Reliance Foundation Olympics Initiatives */}

                <div className="custom-section">
                    <div className="about-main mb-4">
                        <h3>Reliance Foundation Olympics Initiatives</h3>
                    </div>
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="olmpic-img">
                                <img src={Sports22} alt="" />
                            </div>

                        </div>
                        <div className="col-lg-7">
                            <span className='zym-section-text mb-4'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis sequi hic pariatur molestiae quia aspernatur vitae possimus cumque in expedita magnam enim corrupti, dicta corporis aliquid architecto eum delectus eos.
                                Dolorem nobis earum aliquam fugiat eligendi magnam expedita ea vitae id quo perferendis nesciunt fugit cum accusantium, dicta eius laudantium deserunt ipsam mollitia velit eveniet quisquam iure. Dignissimos, ea deleniti.
                                Ipsum, fugit? Animi, ipsum quos voluptate, veniam, id nobis necessitatibus veritatis ab aspernatur sint dolorum magni! Hic magni, vero illo debitis perspiciatis modi sint voluptas, cupiditate temporibus exercitationem delectus praesentium.
                                Temporibus sapiente est sequi voluptatum quo nesciunt asperiores ut exercitationem deserunt ullam odit dolor, aspernatur fugiat esse itaque consequatur culpa. Nulla nobis sequi veritatis soluta iure ad vel et earum.
                                Minus qui, explicabo sit saepe quos fugit suscipit consectetur vero aspernatur est repudiandae? Provident incidunt quidem quaerat at cumque repellat dolorum reiciendis veniam! Voluptatem esse, assumenda repudiandae voluptas aliquid architecto.
                                Sunt commodi autem, deserunt exercitationem sapiente ducimus dicta velit et illo tenetur deleniti cum eveniet voluptate.
                            </span>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default SpotsDev