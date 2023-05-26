import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import bannerBg from "../../../assets/formbg.png"

const SingleToyDeatils = () => {
    const { id } = useParams();
    const singleToyDetails = useLoaderData();
    console.log(singleToyDetails);
    const {_id, photoUrl, toyName, sellerName, sellerEmail, price, rating, quantity, category, msg} = SingleToyDeatils;
    return (
        <div>
        <div className='' style={{ backgroundImage: `url(${bannerBg})`, backgroundAttachment: "fixed", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
            {/* <h2>chef recipes page coming{chefRecipe.length}</h2> */}
            <div className='mb-8 container mx-auto py-16' >
                <div className="card lg:card-side bg-base-100 shadow-xl">
                    <figure><img className='w-full h-full min-h-[100px]' src={singleToyDetails.photoUrl} alt="Album" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-4xl font-bold">{singleToyDetails.toyName}</h2>
                        <div className='text-lg font-medium text-[#5c5959]'>
                            <div className='text-2xl font-bold'>
                            <p className='my-2'>{singleToyDetails.sellerName}</p>
                            <p><i>{singleToyDetails.sellerEmail}</i></p>
                            </div>
                            <div className='text-md font-semibold'>
                            <p className='my-1'>Toy Price: {singleToyDetails.price}</p>
                            <p className='mb-1'>Product Rating: {singleToyDetails.rating}</p>
                            <p className='mb-1'>Available Quantity: {singleToyDetails.quantity}</p>
                            <p>Detail Description: {singleToyDetails.msg}</p>
                            </div>
                        </div>
                        {/* <div className="card-actions justify-end">
                        <button className="btn btn-primary">Listen</button>
                    </div> */}
                    </div>
                </div>
            </div>

        </div>
    </div>
    );
};

export default SingleToyDeatils;