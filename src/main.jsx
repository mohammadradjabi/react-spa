import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route,Routes } from "react-router-dom";
import App from './App.jsx'
import Home from './Components/Home.jsx';
import About from './Components/About.jsx';
import Contact from './Components/Contact.jsx';
import Blog from './Components/Blog.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}>
        <Route path='/home' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/blog' element={<Blog/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
