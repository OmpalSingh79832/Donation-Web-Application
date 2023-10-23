import { useEffect } from 'react'
import Women11 from "../../asset/women11.webp";
import Women22 from "../../asset/women22.jpg";
import Women33 from "../../asset/women33.jpg";

const WomenEmp = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }, [])
    return (
        <>
            <div className="custom-section">
                <div className="about-main mb-4">
                    <h3>Women Empowerment</h3>
                    <div className="health-home">
                        <img src={Women11} alt="" />
                        <p className='lh-lg'>In about a decade, India will have the largest number of women in any country in the world. Empowered women mean a stronger and a better world and Maya Web Tech Foundation is committed to empowering women to play a catalytic role in bringing about transformational economic, environmental and social change. Towards achieving the UN SDGs, Maya Web Tech Foundation has been striving across all its core focus areas to support women across India to achieve their potential and gain agency over decisions that affect their lives. This is being done through various interventions including leadership capacity building, digital literacy, employment and skills development, improving women’s health and enhancing women’s opportunities in education, sports and arts.</p>
                    </div>
                </div>


                {/* Improving Women’s Health */}

                <div className="about-main mb-4">
                    <h3>Improving Women’s Health</h3>
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="research-center-text lh-lg ">
                                Maya Web Tech Foundation also works to increase women’s access to nutrition and health services, preventing anaemia and malnutrition and improving prenatal and postpartum care.

                                We have collaborated with the Bill & Melinda Gates Foundation, MSD for Mothers, Tata Trusts and the United States Agency for International Development (USAID) on Project ASMAN (Alliance for Saving Mothers and New-borns), a unique initiative that seeks to reduce maternal and neonatal mortality across Rajasthan and Madhya Pradesh. The project deploys innovative tech-enabled, facility-based interventions that help healthcare service providers provide high-quality care during childbirth and in the critical 48-60 hours just after delivery. It plays a major role in helping healthcare professionals monitor cases and equipping them to handle complications better. Over 7.5 lakhs mothers and newborns were reached through 81 government health facilities since the inception of the programme in 2015. During April 2018 to June 2021, 433,100 cases were registered and 165,000 (38%) high-risk cases were detected through the ASMAN app.

                                Under our Public Health Outreach Programme, women and adolescent girls are screened for anaemia across various rural locations. In addition, under our Rural Transformation initiatives, we have also been working to achieve nutritional security in rural households by helping communities set up Maya Web Tech Nutrition Gardens (RNGs) in their unused and waste lands.
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="research-cenetr-img">
                                <img src={Women22} alt="" />
                            </div>
                        </div>
                    </div>
                </div>


                {/* Improving Education Opportunities for Girls */}

                <div className="about-main mb-4">
                    <h3>Improving Education Opportunities for Girls</h3>
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="research-center-text lh-lg ">
                                Established in 1996, Maya Web Tech ensures inclusive and equitable education for meritorious students. The main objective of the programme is to provide financial support to the meritorious students so that they can complete their higher education without any disturbance. The scholarship unleashes the potential of the youth of India to grow into leaders in their respective fields. Cumulatively, 12,776 students have received the scholarship, approximately 50% of whom are girls.

                                Through our ‘Education and Sports for All’ initiative, Maya Web Tech Foundation promotes the need to bring together sporting talent and provides them with a platform to excel in sports. Between 2020-2021 Maya Web Tech Foundation supported four NGOs working to enhance education and/or sports for girls. These NGOs included Milaan, Sakhi for Girls, Slum Soccer, and Yuwa.
                                Maya Web Tech Foundation also supports girls in the communities around Maya Web Tech business locations, to help them realise their potential. In Shahdol, Madhya Pradesh, we operate bus services for 400 girls from local villages, encouraging parents to send their daughters to school and college, even in remote areas where transport services may be sporadic and unreliable.
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="research-cenetr-img">
                                <img src={Women33} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WomenEmp