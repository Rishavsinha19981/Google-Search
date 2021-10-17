import React from 'react';
import"./home.css";
import AppsIcon from '@material-ui/icons/Apps';
import { Avatar } from '@material-ui/core';
import Search from './Search';

const Home = () => {
    return (
        <div className="home">
            <div className="home__header">
                <div className="home__headerleft">
                        <p>About</p>
                        <p>Store</p>
                </div>
                <div className="home__headerright">
                        <p>Gmail</p>
                        <p>images</p>
                        <AppsIcon/>
                        <Avatar/>
                </div>
            </div>

            <div className="home__body">
                <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="" />
                <div className="home__inputcontainer">
                        <Search/>
                </div>
            </div>
        </div>
    )
}

export default Home
