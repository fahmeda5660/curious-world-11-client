import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { TabPanel } from 'react-tabs';
   
const Relaxing = () => {
    const [relaxingToy, setRelaxingToy] = useState([]);

    useEffect(() => {
        fetch("https://curious-world.vercel.app/categoryrelaxing")
            .then((res) => res.json())
            .then((data) => setRelaxingToy([...data]));
    }, []);
    return (
        <div className='grid md:grid-cols-12 gap-4 justify-center items-center'>

            {
                relaxingToy.map(relaxing =>
                    <div className='col-span-6'>
                        <div className=" card card-side bg-base-100 shadow-xl" key={relaxing?._id}>
                            <figure><img src={relaxing.photoUrl} className='w-48 h-48' alt="Movie" /></figure>
                            <div className="px-6 py-3">
                                <h2 className="text-left text-3xl font-bold">{relaxing.toyName}</h2>
                                <h2 className="text-left">Price: {relaxing.price}</h2>
                                <h2 className="text-left">Rating: {relaxing.rating}</h2>
                                <div className="card-actions justify-start">
                                    <Link to={`/categoryRelaxing/${relaxing._id}`}><button className='px-6 py-2 bg-purple-500 text-white font-bold rounded-md mt-3'>View Details</button></Link>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default Relaxing;