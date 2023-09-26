import React from 'react'

const Form = () => {
    return (
        <div className=' justify-center'>
            <form action="" className='contactus'>
                <h1 className='text-base font-medium text-center py-6' style={{ color: "#3A0CA3" }}>Contact Us Now</h1>

                <div className="flex justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="344" height="5" viewBox="0 0 344 5" fill="none">
                        <path d="M2 1.5L342 2.97399" stroke="#3A0CA3" stroke-width="3" stroke-linecap="round" />
                    </svg>
                </div>
                <hr class="hr"></hr>

                <div className="flex justify-center items-center" style={{ height: "90%" }} >
                    <div style={{ maxWidth: "340px" }}>
                        <input class="in-field my-2 px-6" type="text" placeholder='Full Name' />
                        <input class="in-field my-4 px-6" type="text" placeholder='Email Address' />
                        <textarea class="text-field my-2 py-6 px-6" placeholder="Message" name="text" id="" cols="30" rows="5"></textarea>
                        <button className='Submit-btn my-4 text-white'>
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Form