import React from 'react';

const Footer = () => {
   
    const root = {
        height: '16.2vh',
        backgroundColor: '#97fdc1',
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        flexDirection: 'column',
        
    }
    return (
        <footer style={root}>
            &copy; Web2 {new Date().getFullYear()}
        </footer>
    );

}

export default Footer;