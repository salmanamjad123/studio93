import React from 'react'
import CardAbout from '../components/CardAbout'

const Aboutus = () => {
    return (
        <>
            <div className="container mx-auto "  >
                <div style={{ marginTop: "3%" }} className="grid lg:grid-cols-4  grid-cols-1 gap-4 justify-center items-center">
                    <div className="lg:col-span-2 flex justify-center">
                        <div className="pt-20" style={{ width: '80%' }}>
                            <h1 className="title">WHO ARE WE</h1>
                            <h2 className="heading-about my-6">
                                Assisting individuals in locating the appropriate real estate.
                            </h2>
                            <p className="para">
                                Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec dignissim purus. Nulla convallis ipsum molestie nibh malesuada, ac malesuada leo volutpat. </p>



                            <div className='first pt-4'>
                                <div className="flex justify-center">
                                    <h1 className='roundimg'>
                                        <img className='rotate' src="/round.png" alt="" />
                                    </h1>
                                </div>
                                <div className="flex pt-20">
                                    <div>
                                        <img
                                          data-aos="fade-right"
                                          data-aos-duration="1000"
                                          data-aos-easing="ease-in-out"
                                        className='pt-12 ' src="/about1.png" alt="" />
                                    </div>
                                    <div>
                                        <img 
                                        data-aos="fade-down"
                                        data-aos-duration="1000"
                                        data-aos-easing="ease-in-out"
                                        src="/about2.png" alt="" />
                                        <img
                                        data-aos="fade-up"
                                        data-aos-duration="1000"
                                        data-aos-easing="ease-in-out"
                                        src="/about3.png" alt="" />
                                    </div>
                                </div>
                            </div>
                            <CardAbout />
                        </div>
                    </div>

                    <div className="lg:col-span-2 flex flex-col items-center justify-start">
                        <div className="second">
                            <div className="flex justify-center">
                                <h1 className='roundimg'>
                                    <img
                                        data-aos-delay="500"
                                        data-aos="fade-right"
                                        data-aos-duration="2000"
                                        data-aos-easing="ease-in-out"
                                        className="rotate" src="/round.png" alt="" />
                                </h1>
                            </div>
                            <div className="flex pt-20">
                                <div >
                                    <img
                                        data-aos="fade-right"
                                        data-aos-duration="1000"
                                        data-aos-easing="ease-in-out"
                                        className='pt-12' src="/about1.png" alt="" />
                                </div>
                                <div>
                                    <div data-aos="fade-down"
                                        data-aos-duration="1000"
                                        data-aos-easing="ease-in-out">
                                        <img

                                            src="/about2.png" alt="" />
                                    </div>

                                    <div data-aos="fade-up"
                                        data-aos-duration="1000"
                                        data-aos-easing="ease-in-out"
                                    >
                                        <img

                                            src="/about3.png" alt="" />
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>


                </div>

            </div>
        </>
    )
}

export default Aboutus