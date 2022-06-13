import React from 'react';
import { Link} from 'react-router-dom';
import './Header.css'

const Header = (props) => {


    return ( 
        <header >
            <nav>
                <div className='logo'>
                    <img src={require('../images/2c4538a84923b74393c4b426d62f577a.jpg')} alt='logoCheems'/>
                </div>
                <div className='links'>
                    <Link className='link' to={`/`}>Home</Link>
                    <Link className='link' to={`/about`}>About</Link>
                    <Link className='link' to={`/contact`}>Contact</Link>
                    <Link className='link' to={`/notes`}>Notes</Link>
                </div>
            </nav>
        </header>
    );
    
}


export default Header;