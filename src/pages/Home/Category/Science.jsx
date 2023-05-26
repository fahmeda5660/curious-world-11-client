import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { TabPanel } from 'react-tabs';

const Science = () => {
    const [scienceToy, setScienceToy] = useState([]);

    useEffect(() => {
        fetch("https://curious-world.vercel.app/categoryScience")
            .then((res) => res.json())
            .then((data) => setScienceToy([...data]));
    }, []);
    // console.log(setScienceToy);

    return (
        <div className='grid md:grid-cols-12 gap-4 justify-center items-center'>

            {
                scienceToy.map(science =>
                    <div className='col-span-6'>
                        <div className=" card card-side bg-base-100 shadow-xl" key={science?._id}>
                            <figure><img src={science.photoUrl} className='w-48 h-48' alt="Movie" /></figure>
                            <div className="px-6 py-3">
                                <h2 className="text-left text-3xl font-bold">{science.toyName}</h2>
                                <h2 className="text-left">Price: {science.price}</h2>
                                <h2 className="text-left">Rating: {science.rating}</h2>
                                <div className="card-actions justify-start">
                                    <Link to={`/categoryScience/${science._id}`}>
                                    <button className='px-6 py-2 bg-purple-500 text-white font-bold rounded-md mt-3'>View Details</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default Science;