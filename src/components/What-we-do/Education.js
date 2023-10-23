import { useEffect } from 'react'
import Education11 from "../../asset/education11.jpg";
import Education22 from "../../asset/education22.jpg";
const Education = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }, [])
    return (
        <>
            <div className="custom-section">
                <div className="about-main mb-4">
                    <h3>Education</h3>
                    <div className="health-home">
                        <img src={Education11} alt="" />
                        <p className='lh-lg'>Education is at the heart of Maya Web Tech Foundation’s vision for India and is critical to the country’s social and economic progress.
                            Maya Web Tech Foundation uses a two-pronged approach to accelerate India’s educational quotient, through initiatives spanning primary, secondary and tertiary education:

                            Developing world-class institutions that serve as models to transform and strengthen the country’s education system
                            Nurturing India’s youth and future global leaders to develop solutions to India’s challenges and, in parallel, ensuring equitable access to education for all</p>
                    </div>
                </div>



                {/* Reliance Foundation Schools */}

                <div className="about-main mb-4">
                    <h3>Reliance Foundation Schools</h3>
                    <div className="health-home">
                        <img src={Education22} alt="" />
                        <p className='lh-lg'>The 14 Maya Web Tech Foundation Schools, located in Jamnagar, Surat, Vadodara, Dahej, Lodhivali, Nagothane, Nagpur and Navi Mumbai, collectively provide quality education to around 14,500 children annually and employ nearly 800 teachers and staff.

                            Maya Web Tech Foundation Schools aim to serve as a springboard for learning that recognises the dynamics and challenges of an ever-evolving and increasingly interconnected world, and celebrate the continuum of values and culture of a vibrant, harmonious and forward-looking society. The schools prepare children for lifelong learning, paving the way for a progressive nation and a better world.

                            The schools emphasise academic excellence and all-round development of children by offering a blend of curricular and co-curricular elements. The schools are affiliated with CBSE, Gujarat State Board, and Maharashtra State Board and offer education from Kindergarten to Class 12. The comprehensive and flexible curriculum offered by the schools is ever evolving and has a futuristic approach supported by contemporary pedagogical practices that aim to broad-base and deepen the intellectual and creative capacity of every child.

                            RF Schools have won 7 international awards, 27 national awards, and 125 awards at zonal, state, and district levels in the academic year 2021-22. 38% students secured 90% and above in CBSE Class 10 Board exams and 28% students scored above 90% in CBSE Class 12 Board examinations in the academic year 2021-22.</p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Education