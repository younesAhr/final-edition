import './../styles/nav.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars , faClose } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export default function Nav(){
    // varaible for changin the menu icon
    const [oc,setoc]=useState(faBars);
    // function for opning the menu and close it
    function menu(){
        if(oc == faBars){
            document.getElementById('navbar').classList="navbar1";
            setoc(faClose);
        }else{
            document.getElementById('navbar').classList="navbar";
            setoc(faBars);
        }
    }
        // function for closing the menu after clicking a link
    function link(){
        document.getElementById('navbar').classList="navbar";
        setoc(faBars);
    }
    return(
        <>
            <header className="head">
                <p className="logo">Zeta</p>
                <FontAwesomeIcon icon={oc} className='menu' onClick={menu}/>
                <nav className="navbar" id='navbar'>
                    <a href="" className="links" onClick={link}>Home</a>
                    <a href="" className="links" onClick={link}>Services</a>
                    <a href="" className="links" onClick={link}>About</a>
                    <a href="" className="links" onClick={link}>Contact</a>
                </nav>
                <Link className="login" to="/login">log in</Link>
            </header>
        </>
    )
}