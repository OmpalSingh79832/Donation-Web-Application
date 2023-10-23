import React from 'react'
import { useNavigate } from "react-router-dom";

import Logo2 from "../../asset/logo2.png"
const Footer = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className="footer-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-2">
                            <div className="about-footer">
                                <p>About Us</p>
                                <span onClick={() => navigate("/about-chairperson")}>To know more about MayaWebTech Click Here</span>
                                <img onClick={() => navigate("/")} src={Logo2} alt='' />
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <ul className="focus-area">
                                <p>FOCUS AREAS</p>
                                <li onClick={() => navigate("/about-chairperson")}><i></i> About the Chairperson</li>
                                <li onClick={() => navigate("/maya-foundation")}><i></i> MayaWebtech Foundation</li>
                                <li onClick={() => navigate("/careers")}><i></i> Career</li>
                                <li onClick={() => navigate("/rural-transform")}><i></i> Rural Transformation</li>
                                <li onClick={() => navigate("/health")}><i></i> Health</li>
                                <li onClick={() => navigate("/education")}><i></i> Education</li>
                                <li onClick={() => navigate("/sports-development")}><i></i> Sports for Development</li>
                                <li onClick={() => navigate("/women-empowerment")}><i></i> Women Empowerment</li>
                                <li onClick={() => navigate("/gallery")}><i></i> Gallery</li>
                            </ul>
                        </div>
                        <div className="col-lg-3">
                            <div className="contact-footer">
                                <p>CONTACT</p>
                                <span><i class="fa-regular fa-envelope me-2"></i>info@mayawebtech.com</span>
                                <button class="read-more btn footer-btn">CAUTION NOTICE</button>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="sign-in-footer">
                                <p>SIGN UP FOR UPDATES</p>
                                <span>To keep yourself updated on latest news and programs at Reliance Foundation, drop in your E-mail ID</span>
                                <input type='' />
                                <button class="read-more btn submit-btn">SUBMIT</button>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className='terms-condition'>
                    &copy;2023. All rights reserved. Terms & Conditions. Privacy Policy.
                </div>
            </div>

        </>
    )
}

export default Footer