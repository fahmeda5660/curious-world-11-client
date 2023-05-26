import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

const AllToysTable = ({toy, index}) => {
    const {user} = useContext(AuthContext)
    const {_id,photoUrl, toyName, sellerName, sellerEmail, price, rating, quantity, category, msg} = toy;
    // const toyDetails =(id)=>{
    //     console.log(id);
    // }
    const hitToast = ()=>{
     if(!user){
        return alert("You have to Login first!")
     }
    }
    return (
            <tr>
                <th>{index+1}</th>
                <th>{sellerName}</th>
                <th>{toyName}</th>
                <td>{category}</td>
                <td>{price}</td>
                <td>{quantity}</td>
                <td><Link to={`/AllToys/${toy._id}`}><button onClick={()=>hitToast()} className='px-6 py-2 bg-purple-500 text-white font-bold rounded-md mt-3'>View Details</button></Link></td>
                {/* <ToastContainer /> */}
            </tr>
    );
};

export default AllToysTable;