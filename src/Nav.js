import React from 'react';

const Nav = () => {
    let style = {
        width:"100%",
        backgroundColor:"black",
        color:"white",
        height:"auto",
        padding:"10px",
        
    }
    return (
        <div style={style}>
           <h3>Valentino</h3> 
           <p>List of Movies: </p>
        </div>
    );
};

export default Nav;