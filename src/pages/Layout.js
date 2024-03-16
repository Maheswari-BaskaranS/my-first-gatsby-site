import React from 'react'
import Header from "./Header"
import Footer from "./Footer"
import Sidebar from "./Sidebar"
import './index.css';

const Layout = ({children}) => {
    return (
        <div >
          <Header/>
          <Sidebar/>
          <main>{children}</main>
          <Footer/>
        </div>
      )
}

export default Layout