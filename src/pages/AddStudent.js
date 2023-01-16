import React from 'react';
import { toast } from 'react-hot-toast';
import userLogo from '../assets/logo/user.png'

const AddStudent = () => {
    const handleAddStudent = event => {
        event.preventDefault();
        const fname = event.target.fname.value;
        const lname = event.target.lname.value;
        const dept = event.target.dept.value;
        const mail = event.target.mail.value;
        const phone = event.target.phone.value;
        const photoUrl = event.target.photoUrl.value;

        const studentDetails = {

            fname,
            lname,
            dept,
            mail,
            phone,
            photoUrl
        }
        console.log(studentDetails);


        fetch('https://student-details-server.vercel.app/students', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(studentDetails)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success('successfully registered')
                    event.target.reset();
                }
            })
            .catch(error => {
                toast.error('Error Occured')

                console.error(error)});
    }

    return (
        <div className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-full h-full flex justify-center  font-semibold p-3'>
            <div className='grid grid-cols-1 gap-4 place-content-center'>
                <h1 className='text-5xl text-white'>Student registration form</h1>
                <img className='w-[20vh] rounded-[10px] justify-self-center' src={userLogo} alt="User Logo" />
                <form onSubmit={handleAddStudent} className='grid grid-cols-1 gap-5'>
                    <div className='flex flex-col'>
                        <label className='text-white'>First name:</label>
                        <input className='rounded p-3' type="text" id="fname" name="fname" />
                    </div>
                    <div className='flex flex-col'>
                        <label className='text-white'>Last name:</label>
                        <input className='rounded p-3' type="text" id="lname" name="lname" />
                    </div>
                    <div className='flex flex-col'>
                        <label className='text-white'>Department:</label>
                        <input className='rounded p-3' type="text" id="dept" name="dept" />
                    </div>
                    <div className='flex flex-col'>
                        <label className='text-white'>Email:</label>
                        <input className='rounded p-3' type="email" id="mail" name="mail" />
                    </div>
                    <div className='flex flex-col'>
                        <label className='text-white'>Phone Number:</label>
                        <input className='rounded p-3' type="text" id="phone" name="phone" />
                    </div>
                    <div className='flex flex-col'>
                        <label className='text-white'>Photo URL:</label>
                        <input className='rounded p-3' type="text" id="photoUrl" name="photoUrl" />
                    </div>
                    <input className='border-2 rounded-full px-5 py-3 ease-in duration-300 hover:bg-green-700 text-xl cursor-pointer	' type="submit" value="Submit" />
                </form>
            </div>
        </div>
    );
};

export default AddStudent;