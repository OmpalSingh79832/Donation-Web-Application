import { useEffect } from 'react'
import DirectImg from "../../asset/ig-icon-direct-engagement.png";
import LeavedImg from "../../asset/ig-icon-leverage-technology.png";
import ModeldevImg from "../../asset/ig-icon-model-development.png";
import LongTermImg from "../../asset/longterm-sustainability.png";
import OutComeImg from "../../asset/outcome-impact-orientation.png";
const MayaFoundation = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }, [])
    return (
        <>
            {/* About MayaWebTech Foundation*/}

            <div className='abot-foundation'>
                <div className='about-main'>
                    <h3>About Maya Web Tech Foundation</h3>
                </div>
                <div className="container">
                    <div className="row">
                        <div className='igbox clearfix'>
                            <ul className='clearfix'>
                                <li className='rounded-1'>
                                    <div className='roundcontent'>
                                        <div className="igtext">
                                            <img src={DirectImg} alt="" />
                                            <span>Direct Engagement</span>
                                        </div>
                                        <div className="handle">&nbsp;</div>
                                    </div>
                                </li>
                                <li className='rounded-1'>
                                    <div className='roundcontent'>
                                        <div className="igtext">
                                            <img src={LeavedImg} alt="" />
                                            <span>Leveraging Technology</span>
                                        </div>
                                        <div className="handle">&nbsp;</div>
                                    </div>
                                </li>
                                <li className='rounded-1'>
                                    <div className='roundcontent'>
                                        <div className="igtext">
                                            <img src={ModeldevImg} alt="" />
                                            <span className='model-dev'>Creating Models of Development</span>
                                        </div>
                                        <div className="handle">&nbsp;</div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <ul className='no-border clearfix'>
                            <li className='rounded-1'>
                                <div className='roundcontent long-team'>
                                    <div className="igtext">
                                        <img src={LongTermImg} alt="" />
                                        <span>Long Term Sustainability</span>
                                    </div>
                                    <div className="handle long-team-line">&nbsp;</div>
                                </div>
                            </li>
                            <li className='rounded-1'>
                                <div className='roundcontent outcome'>
                                    <div className="igtext">
                                        <img src={OutComeImg} alt="" />
                                        <span className='model-dev'>Outcome and Impact Orientation
                                        </span>
                                    </div>
                                    <div className="handle long-team-line">&nbsp;</div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 w-50">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni eius impedit laudantium, qui modi ratione similique voluptatum sint. Possimus vitae dicta a beatae, dolor dignissimos distinctio hic doloribus provident assumenda.
                            Cumque nostrum ea ullam distinctio nihil? Veniam exercitationem beatae labore iusto fugit ex molestiae tempora ipsam molestias aperiam quae maxime, quo, fugiat, reprehenderit vitae esse tempore sapiente consectetur eveniet voluptatem!
                            Odio pariatur nam impedit repudiandae cum? Nulla, libero quo. Animi, nostrum ipsum enim debitis consequatur tempore amet explicabo repudiandae rem incidunt error, repellendus laboriosam excepturi pariatur, officia eligendi. Voluptates, architecto?
                            Quisquam quaerat deleniti corrupti laboriosam repellat, temporibus mollitia in facilis. Provident facilis nesciunt mollitia excepturi ad! Necessitatibus voluptatibus eaque quos dolores quaerat rem suscipit nihil officia assumenda incidunt, voluptatum quae!
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi rerum quia consectetur voluptatum id facere modi, quas quod possimus iusto quos error? Laudantium assumenda quod culpa odio esse, est eligendi!
                            Minima, dicta explicabo? Odit, voluptatum dolor! Modi a sequi consequatur maiores! Sit esse consequatur explicabo accusamus dicta placeat inventore quasi modi voluptates illo iure soluta, odit odio. Ex, exercitationem nihil?
                        </div>
                        <div className="col-lg-6 w-50 mb-5">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil eaque ratione reprehenderit necessitatibus adipisci minus temporibus error magnam aliquid voluptate! Praesentium quia perferendis sit dolor nostrum eaque? Praesentium, dolorum exercitationem.
                            Blanditiis libero perferendis vitae culpa veritatis ullam. Fugiat molestiae sequi maxime cumque dolor optio mollitia explicabo voluptate nisi, neque, laboriosam commodi. Quis inventore sit assumenda exercitationem illum, voluptatem explicabo similique!
                            Numquam sint dolorem minus enim autem placeat laboriosam eaque ipsa, expedita nobis blanditiis esse maiores perspiciatis, officia libero vero, explicabo veritatis aliquid ad debitis! Odit nesciunt aut nostrum nobis ullam?

                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus harum aspernatur placeat fuga sequi minus iste amet dolor quas officiis! Dolorum voluptatibus aspernatur iure autem praesentium, in suscipit ducimus. Id.
                            Rem, obcaecati ut? Laborum quia quidem pariatur eos dicta ipsum debitis optio a atque, quisquam enim odio soluta maiores esse rerum ducimus eius adipisci voluptate maxime facere beatae molestiae deleniti.  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium quasi ab sint, eius harum ipsam, consectetur sequi blanditiis consequatur at cum labore fuga similique nulla cupiditate necessitatibus delectus ex debitis.
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default MayaFoundation