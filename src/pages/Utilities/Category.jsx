import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCart from './NewsCart';

const Category = () => {
    const categoryNews =useLoaderData();
    console.log(categoryNews);
    return (
        <div>
            {categoryNews.map( news => <NewsCart key={news._id} news={news} />)}
        </div>
    );
};

export default Category;