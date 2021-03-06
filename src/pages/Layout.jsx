import React from 'react'
import Announcement from '../components/Announcement'
import Categories from '../components/Categories'
import Navbar from '../components/Navbar'
import Products from '../components/Products'
import Slide from '../components/Slide'

function Layout() {
  return (
    <div>
        <Announcement/>
        <Navbar/>
        <Slide/>
        <Categories/>
        <Products/>
    </div>
  )
}

export default Layout