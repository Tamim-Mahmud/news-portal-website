import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const LeftNav = () => {
    const [categories, setCategories] =useState([]);

    useEffect(()=>{
        fetch("http://localhost:5000/catagories")
        .then(res => res.json())
        .then(data=>setCategories(data))
        
    },[]);
    console.log(categories);
    return (
        <div className="bg-slate-200 p-5">
            <h2 className="text-lg">All Categories</h2>
            <div className="ml-5 mt-3">
                {
                    categories.map(category => <p className="mt-2" key={category.id}>
                        <NavLink to ={`category/${category.id}`} className="no-underline">{category.name}</NavLink>
                    </p> )
                }
            </div>
        </div>
    );
};

export default LeftNav;