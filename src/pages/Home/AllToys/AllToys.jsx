import React, { useEffect, useState } from 'react';
import AllToysTable from '../AllToysTable/AllToysTable';
import useTitle from '../../../hooks/useTitle';

const AllToys = () => {

    const [toys, setToys] = useState([]);
    const [searchText, setSearchText] = useState("");

    useTitle("All Toys");

    useEffect(() => {
        fetch('https://curious-world.vercel.app/AllToys')
            .then(res => res.json())
            .then(data => setToys(data));
    }, [])

    const handleSearch = () => {
        fetch(`https://curious-world.vercel.app/getSearchByToyName/${searchText}`)
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setToys(data);
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
            <div className="search-box p-2 text-center">
          
          <div>
          <input
            onChange={(e) => setSearchText(e.target.value)}
            type="text"
            className="p-1 border-2 rounded-lg"
          />{" "}
          <button onClick={handleSearch} className='ml-4 px-6 py-2 bg-purple-500 text-white font-bold rounded-md mt-3'>Search</button>
          <button onClick={()=>ascending()} className='mr-4 ml-4 px-6 py-2 bg-purple-500 text-white font-bold rounded-md mt-3'>Ascending </button>
          <button onClick={()=>descending()} className='px-6 py-2 bg-purple-500 text-white font-bold rounded-md mt-3'>Descending </button>
        
          </div>
          </div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead className='text-center'>
                        <tr>
                            <th>#</th>
                            <th>Seller Name</th>
                            <th>Toy Name</th>
                            <th>Sub-Category</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th>View Details</th>
                        </tr>
                    </thead>
                    <tbody className='text-center'>
                        {/* row 1 */}
                        {
                            toys.map((toy,index) => <AllToysTable
                                key={toy._id}
                                toy={toy}
                                index={index}
                            ></AllToysTable>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllToys;