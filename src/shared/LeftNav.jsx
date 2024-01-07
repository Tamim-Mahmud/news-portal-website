import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import TodaysPick from './TodaysPick';

const LeftNav = () => {
    const [categories, setCategories] =useState([]);
    const [allnews , setAllNews] = useState([]);
    // const [todaysPick , setTodaysPick] = useState([]);

    useEffect(()=>{
        Promise.all([
            fetch("http://localhost:5000/catagories").then(res => res.json()),
            fetch("http://localhost:5000/category/0").then(res => res.json()),
        ])
        .then(([dataCatagories, dataTodaysPick])=>{
            setCategories(dataCatagories);
            setAllNews(dataTodaysPick);
        })
        
    },[]);
    

    const tempTodaysPick= allnews.filter(pick => pick.others_info.is_todays_pick===true)
    
    // console.log(tempTodaysPick);
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
            <div className="">
                <TodaysPick data = {tempTodaysPick}></TodaysPick>
            </div>
        </div>
    );
};

export default LeftNav;