import React from 'react'
import { Link } from 'react-router-dom'
import {HashLink} from 'react-router-hash-link'
import '../styles/header.scss'

export const Header = () => {
    return (
        <nav>
        <h1>uniwebsite</h1>
            <main>
            <Link to="/">Home</Link>
            <Link to={"/contact"}>Contact Us</Link>
            <HashLink to={"/#about"}>About Us</HashLink>
            <HashLink to={"/#portfolio"}>Portfolio</HashLink>
            <HashLink to={"/services"}>Services</HashLink>
            </main>
        </nav>
    )
}

export default Header
