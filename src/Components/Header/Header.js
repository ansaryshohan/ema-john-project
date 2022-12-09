import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/UserContext';
import logo from "../../images/Logo.svg"
import './Header.css'

const Header = () => {
  const{user,logOut}=useContext(AuthContext)

  const handleLogOut=()=>{
      logOut()
      .then(()=>{})
      .catch(error=> console.log(error))
  }
  return (
     <nav className='nav-bar'>
           <img src={logo} alt="" />
           <div>
            <Link to="/shop">Shop</Link>
            <Link to="/orders">Orders</Link>
            <Link to="/inventory">Inventory</Link>
            <Link to="/About">About</Link>
            {
              user?.uid?
              <Link to="" onClick={handleLogOut}>Log Out</Link> :
              <>
              <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
              </>
            }
            <span>{user?.email}</span>
           </div>
    </nav>
  );
};

export default Header;