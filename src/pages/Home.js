import React from 'react';
import groupPhoto from '../assets/group-photo.png'
import './Home.css'

const Home = () => {
    return (
        <div className='content'>
            <div className="header">
                <h1>Welcome to Cricket Mania 🏏</h1>
                <h3>Here is where you can create your own dream cricket team before sending them off into the pitch!</h3>
            </div>
            <img src={groupPhoto} alt='group' className='group-img' />
        </div>
    )
}

export default Home;