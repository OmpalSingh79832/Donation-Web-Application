import { useEffect } from 'react'

const ContactUs = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }, [])
    return (
        <>
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-lg-4 d-flex">
                        <div className="location-add">
                            <h5> <i class="fa-solid fa-location-dot"></i> OFFICE ADDRESS</h5>
                            <p className='fw-bold'>T-04 Sector-2 Noida Uttar Pradesh India </p>

                        </div>
                    </div>
                    <div className="col-lg-4 d-flex align-items-stretch">
                        <div className="location-add">
                            <h5><i class="fa-solid fa-phone" style={{ color: "rgba(13, 0, 255, 0.729)" }}></i> TOLL FREE NUMBER</h5>
                            <p className='fw-bold'> For queries related to the
                                programmes of MayaWebTech foundation,
                                you may reach the</p>
                            <span className='fw-bold' style={{ color: "green" }}>Toll Free Number - 1800 419 8800</span>
                        </div>
                    </div>
                    <div className="col-lg-4 d-flex align-items-stretch">
                        <div className="location-add">
                            <h5><i class="fa-solid fa-envelope" style={{ color: "rgba(13, 0, 255, 0.729)" }}></i> E-MAIL ADDRESS</h5>
                            <p className='fw-bold'>For any enquiries
                                or information, drop in a mail to</p>
                            <span className='fw-bold' style={{ color: "green", cursor: "pointer" }}>info@mayawebtech.com</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container get-in-touch">
                <div className="about-main">
                    <h3>Get In Touch</h3>
                </div>
                <div className="row text-center">
                    <div className="col-lg-6">
                        <div className='contact-name'>
                            <input type="name" placeholder='Name' />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className='contact-name'>
                            <input type="number" placeholder='Contact' />
                        </div>
                    </div>
                </div>
                <div className="row text-center mt-4">
                    <div className="col-lg-6">
                        <div className='contact-name'>
                            <input type="email" placeholder='Email' />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className='contact-name'>
                            <input type="text" placeholder='Sports for development ' />
                        </div>
                    </div>
                    <div className="comment">
                        <input type="text" placeholder='Comment' /> <br />
                        <button class="read-more btn mt-4 submit-btnn">SUBMIT</button>
                    </div>
                    <p className='text-start fw-bold mt-4 ms-4'>For any enquiries or information, drop in a mail to
                        <span className='' style={{ color: "blue", cursor: "pointer" }}> info@mayawebtech.com</span></p>
                </div>
            </div>


        </>

    )
}

export default ContactUs