import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';

const Home = () => {
    const [students, setStudents] = useState([])

    // Read operation 
    useEffect(() => {
        fetch('https://student-details-server.vercel.app/students')
            .then(res => res.json())

            .then(data => setStudents(data))

    }, [students]);
    console.log(students);

    // delete operation 
    const handleDelete = id => {
        fetch(`https://student-details-server.vercel.app/students/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success('Student deleted')
                    const remaining = students.filter(st => st._id !== id)
                    setStudents(remaining)


                }
            })
    }
    if(students.length === 0){
        return <h1 className='text-5xl text-center'>No students Available on the Database.</h1>
    }

    return (
        <div className='grid gap-5'>
            <h1 className='place-self-center text-5xl bg-gradient-to-r from-indigo-500 rounded-md p-5'>Students Details</h1>
            <div className='place-self-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-5'>
                {
                    students.map((student, id) => <div key={id} className='grid gap-3 bg-gradient-to-l from-indigo-500 border-2 border-fuchsia-400 p-5	rounded-lg'>
                        <h1 className='text-center text-2xl'>{student.fname} {student.lname}</h1>
                        <img className='h-[22vh] rounded-lg' src={student?.photoUrl} alt="student photo" />
                        <p>Department: {student.dept}</p>
                        <p>Phone: {student.phone}</p>
                        <p>Email: {student.mail}</p>
                        <div className='grid grid-cols-2 gap-5'>
                            <Link to={`/student/${student._id}`}><button className='border-2 rounded-full px-5 py-3 ease-in duration-300 bg-warning hover:bg-yellow-700 text-xl cursor-pointer	'>Update</button></Link>
                            <button onClick={()=>handleDelete(student._id)} className='border-2 rounded-full px-5 py-3 ease-in duration-300 bg-error hover:bg-red-700 text-xl cursor-pointer	'>Delete</button>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Home;