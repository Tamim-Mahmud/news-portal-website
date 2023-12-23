import React from 'react';
import { useParams } from 'react-router-dom';

const Home = () => {
    const {id}=useParams();
    return (
        <div>
            this is Home {id}
        </div>
    );
};

export default Home;