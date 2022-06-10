import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import './css/Layout.css'


const Layout = () => {
    return (
        <div className='menulayout'>
            
            <>
            <nav className='navbar'>

                <div className='container-fluid'>

                    <div className='logo'>
                        <p className='navbar-brand'> Candy e-shop </p>
                        <img src='candiesN90.png' alt='caramelle'/>
                    </div>

                    <ul className='nav nav-tabs' role='tablist'>
                        
                        <li className='nav-item'>
                            <Link to={"/"} className='nav-link active' data-toggle='tab'> Home </Link>
                        </li>
                        
                        <li className='nav-item'>
                            <Link to={"/caramelle"} className='nav-link' data-toggle='tab'> Caramelle </Link>
                        </li>
                        
                        <li className='nav-item'>
                            <Link to={"/cioccolata"} className='nav-link' data-toggle='tab'> Cioccolata </Link>
                        </li>

                        <li className='nav-item'>
                            <Link to={"/eventi"} className='nav-link' data-toggle='tab'> Eventi </Link>
                        </li>

                        <li className='nav-item'>
                            <Link to={"/carrello"} className='nav-link' data-toggle='tab'> Carrello </Link>
                        </li>

                    </ul>
                
                </div>

            </nav>

            <Outlet/>
            </>

        </div>

    )
};

export default Layout;