import React from 'react'

const Customercard = () => {
    return (
        <div className='pb-6'>

            <div className="grid lg:grid-cols-4  grid-cols-1 gap-4  justify-center ">
                <div className="lg:col-span-2 flex justify-center lg:justify-end">
                    <div className="card px-6 flex items-center">
                        <img src="group.png" alt="" />
                        <h1 className='pl-2 font-medium text-xl'>72k+ Happy <br />
                            Customers</h1>
                    </div>
                </div>

                <div className="lg:col-span-2 flex items-center justify-center lg:justify-start">
                    <div className="card px-6 flex items-center">
                        <img src="/card2.png" alt="" />
                        <h1 className='pl-2 font-medium text-xl'>200+ New <br />
                            Listings Everyday!</h1>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Customercard