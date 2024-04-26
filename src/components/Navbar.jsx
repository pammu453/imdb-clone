import React from 'react'
import NavbarItem from './NavbarItem'

const Navbar = () => {
    return (
        <div className='flex justify-center gap-4 border-t-2 border-b-2 p-4 max-w-6xl mx-auto'>
            <NavbarItem title="Trending" param="fetchTrending" />
            <NavbarItem title="Top Rated" param="fetchTopRated" />
        </div>
    )
}

export default Navbar
