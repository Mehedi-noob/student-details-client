import React from 'react';
import { toast } from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';

const UpStudent = () => {
    const student = useLoaderData();

    const handleUpdate = event => {
        event.preventDefault();

        const fname = event.target.fname.value;
        const lname = event.target.lname.value;
        const dept = event.target.dept.value;
        const mail = event.target.mail.value;
        const phone = event.target.phone.value;
        const photoUrl = event.target.photoUrl.value;

        const updatedDetails = {
            fname,
            lname,
            dept,
            mail,
            phone,
            photoUrl,
        }

        fetch(`https://student-details-server.vercel.app/students/${student._id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedDetails)
        })
        toast.success('Update Successfull')
    }
    console.log('student', student)
    return (
        <div className='bg-gradient-to-r from-green-500 to-red-500 w-full h-full flex justify-center  font-semibold p-3'>
            <div className='grid grid-cols-1 gap-4 place-content-center'>
                <h1 className='text-5xl text-white'>Update Student Details</h1>

                <form onSubmit={handleUpdate} className='grid grid-cols-1 gap-5'>
                    <div className='flex flex-col'>
                        <label className='text-white'>First name:</label>
                        <input className='rounded p-3' type="text" id="fname" name="fname" defaultValue={student.fname} />
                    </div>
                    <div className='flex flex-col'>
                        <label className='text-white'>Last name:</label>
                        <input className='rounded p-3' type="text" id="lname" name="lname" defaultValue={student.lname} />
                    </div>
                    <div className='flex flex-col'>
                        <label className='text-white'>Department:</label>
                        <input className='rounded p-3' type="text" id="dept" name="dept" defaultValue={student.dept} />
                    </div>
                    <div className='flex flex-col'>
                        <label className='text-white'>Email:</label>
                        <input className='rounded p-3' type="email" id="mail" name="mail" defaultValue={student.mail} />
                    </div>
                    <div className='flex flex-col'>
                        <label className='text-white'>Phone Number:</label>
                        <input className='rounded p-3' type="text" id="phone" name="phone" defaultValue={student.phone} />
                    </div>
                    <div className='flex flex-col'>
                        <label className='text-white'>Photo URL:</label>
                        <input className='rounded p-3' type="text" id="photoUrl" name="photoUrl" defaultValue={student.photoUrl} />
                    </div>
                    <input className='border-2 rounded-full px-5 py-3 ease-in duration-300 hover:bg-cyan-700 text-xl cursor-pointer	' type="submit" value="Update" />
                </form>
            </div>
        </div>
    );
};

export default UpStudent;