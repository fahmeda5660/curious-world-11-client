import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import legopic from "../../../assets/lego6.jpg"
import useTitle from '../../../hooks/useTitle';

const AddAToy = () => {

    // const service = useLoaderData();
    //     const { title, _id, price, img } = service;
    const { user } = useContext(AuthContext);
    useTitle("Add Toy");

    const handleAddToy = event => {
        event.preventDefault();

        const form = event.target;
        const photoUrl = form.url.value;
        const toyName = form.toyName.value;
        const sellerName = user?.displayName;
        const sellerEmail = user?.email;
        const price = parseInt(form.price.value);
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const category = form.category.value;
        const msg = form.msg.value;
        const toyInfo = {
            photoUrl, toyName, sellerName, sellerEmail, price, rating, quantity, category, msg
        }

        console.log(toyInfo);
        fetch('https://curious-world.vercel.app/addToy', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(toyInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    alert('Added a toy successfully')
                }
            })

    }

    return (
        <div className='container'>
            <h2 className='text-center text-3xl my-10'>Add a Another Toy From Here </h2>
            <div className='grid md:grid-cols-12 gap-4 justify-center items-center'>
                <div className='col-span-5'>
                    <img src={legopic} className='w-full h-auto -mt-16' alt="" />
                </div>
                <div className='col-span-7'>
                    <form onSubmit={handleAddToy}>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                            <div className="form-control">
                                <input type="text" defaultValue="https://i.guim.co.uk/img/media/24195953e6b191db2ae955be4f5ab7460cf0765d/0_374_3500_2100/master/3500.jpg?width=700&quality=85&auto=format&fit=max&s=3eae95106efb155e5442caa7b1a4b49e" name="url" placeholder='Enter Photo URL' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <input type="text" placeholder='Toy Name' name="toyName" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <input type="text" name="seller" defaultValue={user?.displayName} className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <input type="text" name="email" defaultValue={user?.email} placeholder="email" className="input input-bordered" />
                            </div>

                            <div className="form-control">
                                <input type="text" placeholder='Price' name="price" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <input type="text" placeholder='Rating' name="rating" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <input type="text" placeholder='Avaiable Quantity' name="quantity" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <select id="category" name="category" className="py-[13px]  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option selected>Choose a Category</option>
                                    <option value="Architect Lego">Architect Lego</option>
                                    <option value="Relaxing lego">Relaxing lego</option>
                                    <option value="Science Lego">Science Lego</option>
                                </select>

                            </div>
                        </div>

                        <div className='form-control mt-6'>
                            <textarea name="msg" placeholder='Message' className='w-full border rounded-md p-4' id="" cols="5" rows="4"></textarea>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn px-6 py-2 bg-purple-700 text-white mx-auto mb-8 hover:bg-purple-500 w-1/3" type="submit" value="Add A Toy" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddAToy;