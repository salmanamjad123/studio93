import React from 'react'
import Form from '../components/Form'
import Slider from '../components/Slider'
import Customercard from '../components/Customercard'
import Marqueecom from '../components/Marqueecom'

const Hero = () => {
    return (
        <>

            <div className="main ">
                <div className="container mx-auto "  >
                    <div style={{ marginTop: "3%" }} className="grid lg:grid-cols-4  grid-cols-1 gap-4 justify-center items-center">
                        <div className="lg:col-span-2 flex justify-center">
                            <div className="mt-6" style={{ width: '80%' }}>
                                <h1 className="title">REAL ESTATE</h1>
                                <h2 className="heading my-6">
                                    Find a perfect home you love..!
                                </h2>
                                <p className="para">
                                    Etiam eget elementum elit. Aenean dignissim dapibus vestibulum. Integer a dolor eu sapien sodales vulputate ac in purus.
                                </p>
                                <Slider />
                            </div>
                        </div>

                        <div className="lg:col-span-2 flex items-center justify-center">
                            <Form />
                        </div>

                    </div>

                </div>
            </div>
            <div className="cardp" >
                <Customercard />
            </div>
            <div className="">
                <Marqueecom />
            </div>
        </>
    )
}

export default Hero