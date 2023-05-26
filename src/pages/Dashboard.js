import React, { useContext } from 'react'
import Nav from '../components/Nav'
import Sidebar from '../components/Sidebar'
import Container from '../components/Container'
import { UserContext } from '../UserContext'


const Dashboard = () => {

  // const {user, logout} = useContext(UserContext);

  return (
    <>
        <Nav/>
        <div className='flex'>
            <Sidebar/>
            <Container/>
        </div>
        
    </>
  )
}

export default Dashboard