import React from 'react'
import {Link} from 'react-router-dom'

const Navbar=()=>{
    return(
        <div>
            <nav style={{backgroundColor:'black'}}>
                <div class="nav-wrapper">
                    <Link to="/" className="brand-logo" style={{marginLeft:20}}>Book Finder</Link>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">

                             <li>
                          
                            </li>
                            <li>
                                <a href="sass.html">Popular Books</a>
                            </li>
                            <li>
                                <a href="badges.html">Recent Books</a>
                            </li>
                            <li>
                                <a href="collapsible.html">Profile</a>
                            </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;