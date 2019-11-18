import React from 'react';
import { Link } from 'react-router-dom';

export default props => ( 
    <nav class="flex flex-wrap bg-orange-600 lg:px-20 py-2 pl-5 pr-5">
        <div class="lg:hidden bg-orange-600 pr-4">
            <button class="navbar-burger px-2 py-2 border rounded text-white hover:text-white hover:border-white">
                <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
            </button>
        </div>
        <div className="flex-1 text-white mr-6 lg:pl-0 sm:pl-6">
            <Link to={'/'}>
                <span className="font-bold lg:text-3xl sm:text-xl">Quote Center</span>
            </Link>
        </div>
        <div>
            <button class="px-2 py-2 border rounded text-orange-200 border-orange-600 hover:text-white hover:border-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><title>Cart</title><path class="heroicon-ui" fill="white" d="M17 16a3 3 0 1 1-2.83 2H9.83a3 3 0 1 1-5.62-.1A3 3 0 0 1 5 12V4H3a1 1 0 1 1 0-2h3a1 1 0 0 1 1 1v1h14a1 1 0 0 1 .9 1.45l-4 8a1 1 0 0 1-.9.55H5a1 1 0 0 0 0 2h12zM7 12h9.38l3-6H7v6zm0 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm10 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/></svg>
            </button>
            <Link to={'/signinpage'}>
                <button className="px-2 py-2 border rounded text-orange-200 border-orange-600 hover:text-white hover:border-white heroicon-ui">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><title>Account</title><path  fill="white" d="M12 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm0-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm9 11a1 1 0 0 1-2 0v-2a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v2a1 1 0 0 1-2 0v-2a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v2z"/></svg>
                </button>
            </Link>
        </div>
    </nav>
);