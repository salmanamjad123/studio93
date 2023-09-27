import React, { useState } from 'react';
import { useDocumentData } from 'react-firebase-hooks/firestore';
import { db } from '../firebase';
import Swal from 'sweetalert2'; // Import SweetAlert

const Form = () => {
    const [userdata, setUserData] = useState({
        name: '',
        email: '',
        message: ''
    })

    let name, value;
    const postUserData = (e) => {
        name = e.target.name;
        value = e.target.value;
        setUserData({ ...userdata, [name]: value })

    }


    const isFormValid = () => {
        return userdata.name.trim() !== '' && userdata.email.trim() !== '' && userdata.message.trim() !== '';
      };
    
      const submitData = async (event) => {
        event.preventDefault();
    
        if (!isFormValid()) {
          // Display an error SweetAlert modal for empty fields
          Swal.fire({
            icon: 'error',
            title: 'Error!',
            text: 'Please fill in all fields before submitting.',
          });
          return;
        }
    
        try {
          const res = await fetch(
            'https://studio93-575e6-default-rtdb.firebaseio.com/userDataRecords.json',
            {
              method: 'POST',
              headers: {
                'Content-type': 'application/json',
              },
              body: JSON.stringify({
                name: userdata.name,
                email: userdata.email,
                message: userdata.message,
              }),
            }
          );
    
          if (res.ok) {
            setUserData({
              name: '',
              email: '',
              message: '',
            });
    
            // Display a success SweetAlert modal
            Swal.fire({
              icon: 'success',
              title: 'Data stored successfully!',
              text: 'Your data has been stored successfully.',
            });
          } else {
            // Display an error SweetAlert modal
            Swal.fire({
              icon: 'error',
              title: 'Error!',
              text: 'There was an error storing your data. Please try again.',
            });
          }
        } catch (error) {
          console.error('Error:', error);
    
          // Display an error SweetAlert modal
          Swal.fire({
            icon: 'error',
            title: 'Error!',
            text: 'There was an error storing your data. Please try again.',
          });
        }
      };
    
      
    

    return (
        <div className=' justify-center'>
            <form action="" className='contactus' method='POST'>
                <h1 className='text-base font-medium text-center py-6' style={{ color: "#3A0CA3" }}>Contact Us Now</h1>

                <div className="flex justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="344" height="5" viewBox="0 0 344 5" fill="none">
                        <path d="M2 1.5L342 2.97399" stroke="#3A0CA3" stroke-width="3" stroke-linecap="round" />
                    </svg>
                </div>
                <hr class="hr"></hr>

                <div className="flex justify-center items-center" style={{ height: "90%" }} >
                    <div style={{ maxWidth: "340px" }}>
                        <input
                            type="text"
                            id="name"
                            name='name'
                            value={userdata.name}
                            onChange={postUserData}
                            required
                            className="in-field my-2 px-6 " placeholder='Full Name' />
                        <input
                            id="email"
                            name='email'
                            value={userdata.email}
                            onChange={postUserData}
                            required
                            class="in-field my-4 px-6" type="text" placeholder='Email Address' />

                        <textarea
                            id="message"
                            name='message'
                            value={userdata.message}
                            onChange={postUserData}
                            required
                            class="text-field my-2 py-6 px-6" placeholder="Message" cols="30" rows="5"></textarea>
                        <button type="btn button" onClick={submitData} className='Submit-btn my-4 text-white'>
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Form