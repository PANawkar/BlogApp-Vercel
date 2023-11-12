import React from 'react'
import Blogs from '../components/Blogs'
import Header from '../components/Header'
import Pagination from '../components/Pagination'

const Home = () => {
  return (
    <div className='w-full max-w-[570px] h-full mx-auto'> 
      <Header />
      <div >
        <Blogs/>
        <Pagination/>
      </div>
    </div>
  )
}

export default Home
