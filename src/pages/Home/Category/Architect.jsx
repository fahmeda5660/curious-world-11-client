import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { TabPanel } from 'react-tabs';

const Architect = () => {
    const [architectToy, setAarchitectToy] = useState([]);

    useEffect(() => {
        fetch("https://curious-world.vercel.app/categoryArchitect")
            .then((res) => res.json())
            .then((data) => setAarchitectToy([...data]));
    }, []);
    console.log(architectToy);
    // const doLoginMsg=()=>{
    //     if(!user){
    //         return confirm("You have to log in first to view details")
    //     }
    // }
    return (
        <div className='grid md:grid-cols-12 gap-4 justify-center items-center'>

            {
                architectToy.map(architect =>
                    <div className='col-span-6'>
                        <div className=" card card-side bg-base-100 shadow-xl" key={architect?._id}>
                            <figure><img src={architect.photoUrl} className='w-48 h-48' alt="Movie" /></figure>
                            <div className="px-6 py-3">
                                <h2 className="text-left text-3xl font-bold">{architect.toyName}</h2>
                                <h2 className="text-left">Price: {architect.price}</h2>
                                <h2 className="text-left">Rating: {architect.rating}</h2>
                                <div className="card-actions justify-start">
                                    <Link to={`/categoryArchitect/${architect._id}`}><button className='px-6 py-2 bg-purple-500 text-white font-bold rounded-md mt-3'>View Details</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>

    );
};

export default Architect;