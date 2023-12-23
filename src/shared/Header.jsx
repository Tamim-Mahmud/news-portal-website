import React from 'react';
import logo from "../assets/logo.png"

const Header = () => {
    return (
        <div>
            <div className="mx-auto w-fit ">
                <img src={logo} alt="" className=' '/>
            </div>
        </div>
    );
};

export default Header;