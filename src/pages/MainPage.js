import React from 'react'
// import BlogDetail from '../components/BlogDetail'
import BlogList from '../components/BlogList'
import Navbar from '../components/Navbar'

const MainPage = () => {
    return (
    <div className='main'>
        <Navbar />
        <BlogList />    
    </div>
    )
}

export default MainPage