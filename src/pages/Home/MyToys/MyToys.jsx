import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import { FaRegEdit, FaTrash } from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useTitle from '../../../hooks/useTitle';

const MyToys = () => {
    const {id} = useParams();
    const { user } = useContext(AuthContext);
    const [toys, setToys] = useState([]);
    const [control, setControl] = useState(false);
    useTitle("My Toys");

    useEffect(() => {
        fetch(`https://curious-world.vercel.app/myToy/${user?.email}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setToys(data);
            });
    }, [user, control]);

    const handleDelete = (id) => {
        console.log(id);
        fetch(`https://curious-world.vercel.app/remove/${id}`, {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
        })
          .then((res) => res.json())
          .then((result) => {
            if (result?.deletedCount > 0) {
              setControl(!control);
              toast("Toy Deleted Successfully!");
            }
          });
      };


const ascending = () =>{
    fetch("https://curious-world.vercel.app/ascending", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("ascending" ,data);
        setToys(data)
      });
}
const descending = () =>{
    fetch("https://curious-world.vercel.app/descending", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(' dsc',data);
        setToys(data)
      });
}
    return (
        <div className='container mt-10'>
            <div className='text-center mb-6'>
            <button onClick={()=>ascending()} className='mr-4 px-6 py-2 bg-purple-500 text-white font-bold rounded-md mt-3'>Ascending </button>
            <button onClick={()=>descending()} className='px-6 py-2 bg-purple-500 text-white font-bold rounded-md mt-3'>Descending </button>
            </div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead className='text-center'>
                        <tr>
                            <th>No.</th>
                            <th>Profile</th>
                            <th>Seller Name</th>
                            <th>Seller Email</th>
                            <th>Toy Name</th>
                            <th>Sub-Category</th>
                            <th>Price</th>
                            <th>rating</th>
                            <th>Edit</th>
                            <th>Delete</th>
                            <th>Available Quantity</th>
                            <th>Details Description</th>
                        </tr>
                    </thead>
                    <tbody className='text-center'>
                        {/* row 1 */}
                        {
                            toys?.map((toy, index) => (
                                <tr>
                                    <th>{index + 1}</th>
                                    <td>
                                        <div className="flex items-center justify-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={toy.photoUrl} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>

                                        </div>
                                    </td>
                                    <th>{toy.toyName}</th>
                                    <th>{toy.sellerName}</th>
                                    <th>{toy.sellerEmail}</th>
                                    <td>{toy.category}</td>
                                    <td>{toy.price}</td>
                                    <td>{toy.rating}</td>
                                    <th className='text-xl text-purple-700'><Link to={`/MyToys/${toy?._id}`}><FaRegEdit></FaRegEdit></Link></th>
                                    
                                    <th onClick={() => handleDelete(toy?._id)} className='text-xl text-purple-700'><FaTrash></FaTrash></th>
                                    <td>{toy.quantity}</td>
                                    <td>{toy.msg}</td>
                                    <ToastContainer />
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyToys;