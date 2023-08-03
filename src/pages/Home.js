import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import AppsSharpIcon from '@mui/icons-material/AppsSharp';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import Search from './Search';

function Home() {
  return (
    <div className='home'>
        <div className="home__header">
            <div className="home__headerLeft">
                <Link to="/about">
                    About
                </Link>
                

                <Link to="/store">
                    Store
                </Link>
            </div>

            <div className="home__headerRight">
            <Link to="/gmail">
                Gmail
            </Link>


            <Link to="/images">
                Images
            </Link>
            
                <AppsSharpIcon/>
                <AccountCircleSharpIcon/>
            </div>
        </div>

        <div className="home__body">
                <img src="Google1.jpg" alt="" />
                <div className="home__inputContainer">
                     <Search/>
                </div>
        </div>
        

        
    </div>
  )
}

export default Home
