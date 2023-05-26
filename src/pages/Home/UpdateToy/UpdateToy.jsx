import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UpdateToy = () => {
    const {user}=useContext(AuthContext);
    const {id} = useParams();
    const [toy, setToy] = useState([]);
    
    console.log(id);
    const updatedToy = useLoaderData();

    const handleToyUpdate = event => {
        event.preventDefault();

        const form = event.target;
        const photoUrl = form.url.value;
        const toyName = form.toyName.value;
        const sellerName = user?.displayName;
        const sellerEmail = user?.email;
        const price = parseInt(form.price.value);
        // const rating = form.rating.value;
        const quantity = form.quantity.value;
        // const category = form.category.value;
        const msg = form.msg.value;
        const toyInfo = {
            photoUrl, toyName, sellerName, sellerEmail, price, quantity, msg
        }

        console.log(toyInfo);
        fetch(`https://curious-world.vercel.app/MyToys/${id}`, {
            method: "PUT",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(toyInfo),
          })
            .then((res) => res.json())
            .then((data) => {
                setToy(data);
              if (data.acknowledged) {
                toast("Data Updated Successfully");
              }
            });

    }

    useEffect(() => {
        fetch(`https://curious-world.vercel.app/MyToys/${id}`)
            .then((res) => res.json())
            .then((data) => {
                console.log("hocche",data);
                setToy(data);
            });
            console.log("kisu ashe");
    }, []);
    
    return (
        <div className='container'>
        <h2 className='text-center text-3xl my-10'>Update Toy Price, Quantiy, Description From Here </h2>
                <div className=''>
                <form onSubmit={handleToyUpdate}>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                        <div className="form-control">
                            <input type="text" defaultValue="https://i.guim.co.uk/img/media/24195953e6b191db2ae955be4f5ab7460cf0765d/0_374_3500_2100/master/3500.jpg?width=700&quality=85&auto=format&fit=max&s=3eae95106efb155e5442caa7b1a4b49e" name="url" placeholder='Enter Photo URL' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <input type="text" placeholder='Toy Name' defaultValue={toy?.toyName}  name="toyName" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <input type="text" name="seller" defaultValue={user?.displayName} className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <input type="text" name="email" defaultValue={user?.email} placeholder="email" className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <input type="text" placeholder='Price' defaultValue={toy?.price}  name="price" className="input input-bordered" />
                        </div>
                        {/* <div className="form-control">
                            <input type="text" placeholder='Rating' name="rating" className="input input-bordered" />
                        </div> */}
                        <div className="form-control">
                            <input type="text" placeholder='Avaiable Quantity' defaultValue={toy?.quantity} name="quantity" className="input input-bordered" />
                        </div>
                        {/* <div className="form-control">
                            <select id="category" name="category" className="py-[13px]  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option selected>Choose a Category</option>
                                <option value="Architect Lego">Architect Lego</option>
                                <option value="Relaxing lego">Relaxing lego</option>
                                <option value="Science Lego">Science Lego</option>
                            </select>

                        </div> */}
                    </div>

                    <div className='form-control mt-6'>
                        <textarea name="msg" placeholder='Message' defaultValue={toy?.msg} className='w-full border rounded-md p-4' id="" cols="5" rows="4"></textarea>
                    </div>
                    <div className="form-control mt-6">
                        <input className="btn px-6 py-2 bg-purple-700 text-white mx-auto mb-8 hover:bg-purple-500 w-1/3" type="submit" value="Update Data" />
                        <ToastContainer />
                    </div>
                    
                </form>
            </div> 
    </div>
    );
};

export default UpdateToy;