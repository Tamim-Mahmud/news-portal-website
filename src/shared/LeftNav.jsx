import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {
    const [categories, setCategories] =useState([]);

    useEffect(()=>{
        fetch("http://localhost:5000/catagories")
        .then(res => res.json())
        .then(data=>setCategories(data))
        
    },[]);
    console.log(categories);
    return (
        <div className="bg-slate-200 p-3">
            <h2 className="text-lg">All Categories</h2>
            <div className="">
                {
                    categories.map(category => <p key={category.id}>
                        <Link>{category.name}</Link>
                    </p> )
                }
            </div>
        </div>
    );
};

export default LeftNav;