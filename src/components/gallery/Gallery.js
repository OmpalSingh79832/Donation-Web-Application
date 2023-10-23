import { useEffect } from 'react'
import MakingWomenImg from "../../asset/Making a difference with technology-img.jpg";
import PlayersImg from "../../asset/player-img.jpg";
import InspirationImg from "../../asset/inspiration-img.jpg";
import BharathimmtImg from "../../asset/bhart-himmt-img.jpg";

const Gallery = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }, [])
    return (
        <>
            {/* Gallery page  */}


            <div className='gallery-container'>
                <div className="container">
                    <h3 className="common-title">Gallery</h3>
                    <div className="row">
                        <div className="col-lg-3">
                            <div className='making-img'>
                                <img src={MakingWomenImg} alt='' />
                                <h3>Making a difference with technology</h3>
                                <p>Rural Transformation</p>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className='making-img'>
                                <img src={PlayersImg} alt='' />
                                <h3 className='education-sport'>Education and Sports for All</h3>
                                <p>Sports for Development</p>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className='making-img'>
                                <img src={InspirationImg} alt='' />
                                <h3>Women transforming lives with technology</h3>
                                <p>Women Empowerment</p>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className='making-img'>
                                <img src={BharathimmtImg} alt='' />
                                <h3>Reliance Foundation Scholarships</h3>
                                <p>Education</p>
                            </div>
                        </div>
                    </div>
                </div>
                <button class="read-more btn view-all-btn">VIEW ALL</button>


            </div>
        </>
    )
}

export default Gallery