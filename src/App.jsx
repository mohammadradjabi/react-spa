import React from 'react';
import Menu from './Components/Menu';
import { Link, Outlet } from 'react-router-dom';
import { IoMdSearch } from "react-icons/io";
import Footer from './Components/Footer';
const App = () => {
  return (
    <div className='wrapper'>
      <div className="menu">
        <div><div><p>AVADA HOME MADE</p> </div><div><input type="text" placeholder='search'/><span><IoMdSearch/></span></div></div>
        <div>
          <ul>
            <li><Link to="/home">HOME</Link></li>
            <li><Link to="/about">ABOUT</Link></li>
            <li><Link to="/contact">CONTACT</Link></li>
            <li><Link to="/blog">BLOG</Link></li>
          </ul>
        </div>
      </div>
      <Outlet/>
      <Footer/>
    </div>
  );
};

export default App;
