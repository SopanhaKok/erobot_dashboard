import React from 'react'
import Datatable from '../../components/datatable/Datatable'
import NavBar from '../../components/navbar/NavBar'
import SideBar from '../../components/sidebar/SideBar'
import './home.scss'

const Home = () => {
  return (
    <div className='home'>
      <SideBar />
      <div className='home-container'>
        <NavBar />
        <Datatable />
      </div>
    </div>
  )
}

export default Home
