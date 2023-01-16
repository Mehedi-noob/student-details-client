import { createBrowserRouter } from "react-router-dom";
import Home from "../Home";
import AddStudent from "../AddStudent";
import Main from "../Main/Main";
import UpStudent from "../UpStudent";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/addstudent',
                element: <AddStudent></AddStudent>
            },
            {
                path: '/student/:id',
                loader: ({params})=> fetch(`https://student-details-server.vercel.app/students/${params.id}`),
                element: <UpStudent></UpStudent>
            }

            
        ]
    },

])

export default router;