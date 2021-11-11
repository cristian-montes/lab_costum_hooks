import React from 'react';
import { NavLink, useLocation} from 'react-router-dom';



export  const Header = () =>{
    let location = useLocation();


    let redirectLink = null;
    if(location.pathname !== '/') {
        redirectLink=<NavLink exact activeClassName="selected" to="/"> Home </NavLink>
    }

    return(
        <div>
            <div>
            {redirectLink}
            </div>
        </div>
    )
}