import './navbar.css';
import React from 'react';


class Navbar extends React.Component {
    render() {
        return (
            <nav className="menu">
                <ul>
                    <li> 
                    <a>
                    <img  src="https://media-exp1.licdn.com/dms/image/C560BAQFjx9BEvafBEw/company-logo_200_200/0/1593613798582?e=2159024400&v=beta&t=du8UP2U5UHUBq84RjJZb2LDAWKQzCL_rKO535WUlY6M"  alt="" width="30px" height="30px"></img>
                    </a>
                    </li>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Exercises</a></li>
                </ul>
            </nav>
            
        )
      }
 
}

export default Navbar;