import React from 'react'

const Donation = () => {
    return (

        <>
            <div className="donation-main-section">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="donate-text">
                            <h3>Empower the Future of India with Maya Web Tech</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis, ratione? Fuga odit doloremque debitis, accusantium sed molestiae numquam alias deserunt incidunt? Asperiores ipsum harum quidem rerum enim placeat est laborum?
                                Dolore numquam modi esse eaque voluptatibus est quo enim odit, impedit non, fugit veniam accusamus error vitae qui? Ratione sapiente ex sed id magnam tenetur rem eligendi totam soluta debitis?
                                Veniam, error. Provident eaque, tempore eligendi cumque laboriosam temporibus, quo at dignissimos expedita ex, rem voluptatibus? Itaque ratione, dolore, ipsum ducimus optio eaque voluptates sunt placeat possimus explicabo rerum vel.
                                Aliquid doloribus nemo quod itaque tenetur voluptate unde distinctio, est rerum facilis culpa, ut ex quasi repellendus ducimus deserunt delectus tempore architecto numquam dolore suscipit, expedita aliquam assumenda amet. Deleniti?
                                Tenetur vel nihil alias repellendus explicabo assumenda voluptate cum corporis laborum quisquam sint dolorem veniam est dicta deserunt distinctio ea ab eum modi a molestiae, dignissimos nulla ullam porro. Nostrum Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga molestiae reiciendis nobis fugit accusamus tempora ipsam incidunt labore. Alias numquam nostrum reprehenderit adipisci nisi illum illo ut incidunt commodi vitae.
                                vero deleniti debitis. Ipsam a ad vitae fugiat, ullam illo atque suscipit deserunt omnis voluptate assumenda voluptatibus!
                                .</p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="donate-form">
                            <form action="">
                                <h5>50% Tax Exemption Under Section 80G*</h5>
                                <p>*Only Applicable for Indian Citizens</p>
                                <div className="citizen d-flex justify-content-between px-5">
                                    <p> <input type="radio" name='n' /> I am an Indian citizen</p>
                                    <p> <input type="radio" name='n' /> I am not an Indian citizen</p>
                                </div>

                                <div className="button-donate-all px-2 d-flex">
                                    <button> <input type="radio" name='name' /> &#x20B9;3000</button>
                                    <button> <input type="radio" name='name' /> &#x20B9;6000</button>
                                    <button> <input type="radio" name='name' /> &#x20B9;12000</button>
                                    <button> <input type="radio" name='name' /> &#x20B9;18000</button>
                                    <div className='textt'><input type="text" placeholder='  Min.   &#x20B9;800' /></div>
                                </div>

                                <div className="name-function d-flex mx-3 mt-3">
                                    <div className="col-lg-6 name-input">
                                        <input type="text" placeholder='  First Name*' />
                                    </div>
                                    <div className="col-lg-6 name-input">
                                        <input type="text" placeholder='  Last Name*' />
                                    </div>
                                </div>
                                <div className="scroll mx-3 mt-3">
                                    <textarea className='address-input' name="" placeholder='   Address*' id="" cols="51" rows="3"></textarea>
                                </div>
                                <div className="state d-flex mx-3 mt-2 ">
                                    <div className="col-lg-4 ">
                                        <input type="text" placeholder='   City*' style={{ height: "2.4rem", outline: "none" }} />
                                    </div>
                                    <div className="col-lg-4">
                                        <input type="text" placeholder='   State*' style={{ height: "2.4rem", outline: "none" }} />

                                    </div>
                                    <div className="col-lg-4">
                                        <input type="text" placeholder='  Postal code*' style={{ height: "2.4rem", outline: "none" }} />
                                    </div>
                                </div>
                                <div className="name-function d-flex mx-3 mt-3">
                                    <div className="col-lg-6 name-input">
                                        <input type="text" placeholder='  PAN NUMBER*' />
                                    </div>
                                    <div className="col-lg-6 name-input">
                                        <input type="number" placeholder='  Last Name*' />
                                    </div>
                                </div>
                                <div className="name-function d-flex mx-3 mt-3">
                                    <div className="col-lg-6 name-input date-iput">
                                        <input type="date" placeholder='  *' />
                                    </div>
                                    <div className="col-lg-6 name-input date-input">
                                        <input type="email" placeholder='  Email Id*' />
                                    </div>
                                </div>
                                <div className="text-center">

                                    <button className="donation-btn donated text-center" >DONATE NOW</button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Donation