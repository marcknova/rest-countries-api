import React from 'react'
import { Link } from 'react-router-dom'
import Toggle from './Toggle'

const Navbar = () => {
    return (
        <header className="shadow-md dark:bg-dark1">
            <nav className="p-5">
                <div className="flex justify-between">
                <div>
                    <h1 className="font-bold text-2xl mx-10 dark:text-white"><Link to="/">Where in the world?</Link></h1>
                </div>
                <div>
                    <Toggle/>
                </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar
