import React from 'react'
import './Navbar.css'
import logo_tech from '../../assets/logo.png'
import search_icon_light from '../../assets/search-w.png'
import search_icon_dark from '../../assets/search-b.png'
import toggle_light from '../../assets/night.png'
import toggle_dark from '../../assets/day.png'
import { useAuth0, User } from "@auth0/auth0-react";
import { Link } from 'react-router-dom'

const Navbar = (props) => {

    const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();
    

    return (
        <div className='w-full flex fixed items-center justify-between top-0 left-0 py-4 px-6 z-50 bg-slate-300 '>
            <div className='flex items-center'>
                <img className='w-12 cursor-pointer' src={logo_tech} alt="TechZnews" />
                <h1 className='font-bold'>TECHzNEWS</h1>
            </div>

            <ul>
                <Link to="/home"><li onClick={() => props.setMenu("technology")} >Home</li></Link>
                <Link to="/tech"><li onClick={() => props.setMenu("technology")} >Technology</li></Link>
                <li onClick={() => props.setMenu("ai")} >AI</li>
                <li>Contact Us</li>
            </ul>

            <div className='search-box'>
                <input onChange={(e) => props.setSearch(e.target.value)} type="text" placeholder='Search here..' />
                <img src={search_icon_light} alt="" />
            </div>

            <div className='ml-8'>
                {isAuthenticated && <p> Welcome, <br />{user?.name} </p>}
            </div>

            <div>
            {
                isAuthenticated ? ( <div className='mt-2 ml-10 items-center font-sans'>
                <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-6 py-3 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                    LogOut
                </button>
            </div>)  : (<div className='mt-2 ml-10 items-center font-sans'>
                <button onClick={() => loginWithRedirect()} type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-6 py-3 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                    LogIn
                </button>
            </div>
            )
            }
            </div>
            
        </div>
    )
}

export default Navbar