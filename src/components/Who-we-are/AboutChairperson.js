import React, { useEffect } from 'react'
import OmImg from "../../asset/g.jpeg"

import GroupImg from "../../asset/group-members.jpeg";
const AboutChairperson = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }, [])
    return (
        <>
            <div className='about-main'>
                <h3>About the Chairperson – Om Yadav</h3>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="om-img">
                                <img src={OmImg} alt='' />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="text-om">
                                <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem, minima nemo sed id voluptas ipsum provident voluptatum tempore aliquid, quae impedit soluta quasi non doloribus fugit sunt dicta libero illo.
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio illo commodi eveniet maxime quasi sapiente in culpa laudantium aspernatur necessitatibus. Veritatis nesciunt adipisci exercitationem cum, nisi laborum earum explicabo inventore.
                                    Eum a labore incidunt! Placeat illo reprehenderit facere a, rem sint omnis recusandae aliquam laboriosam deleniti! Porro totam, iste id voluptate nesciunt sint est eaque culpa, sequi omnis consequatur quidem.
                                    Earum officia est voluptates nam adipisci necessitatibus labore eum sequi, libero doloribus? Fugit omnis, totam nesciunt molestiae consequuntur dolor laudantium atque ad consequatur, quos libero quibusdam voluptate, quidem ipsa illum?
                                    Laudantium, vel! Nisi quibusdam quo dignissimos? Aut veniam sed error ut labore dolorem? Quae magnam, alias maiores consectetur vitae ipsa praesentium ad neque. Quis totam provident rerum odit earum. Et?
                                    nmj veritatis laudantium ullam aperiam iusto, labore quam culpa nihil modi nisi corrupti delectus vitae laborum!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            {/* Career Page */}
            <div className="about-main">
                <h3>Careers Maya Web Tech</h3>
                <div className="container">
                    <div className="row text-center">
                        <div className="col-lg-4 text-start mt-4">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum asperiores, fuga aliquam culpa deleniti cumque excepturi dolore vero perferendis eveniet commodi incidunt, tempore ducimus ratione natus numquam ullam repellat non.
                            Quis ex illum, atque, quasi aut error quod accusantium velit architecto corrupti porro repellendus nihil minima nam, quibusdam tempora repellat iusto in perferendis quia! Recusandae consequuntur fugiat reprehenderit sapiente nobis.
                            iusto, nostrum illo! Dolores repellat excepturi magnam cumque. <br />
                            <button class="read-more btn mt-4">Read more</button>

                        </div>
                        <div className="col-lg-4 group-img">
                            <img src={GroupImg} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutChairperson