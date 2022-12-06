import React from 'react'
import Homenotes from '../notes/Homenotes'
import Sidebar from './Sidebar'

const Home = () => {
  return (
    <div className="flex">
{window.location.pathname != "/login" ? <Sidebar /> : null}

  <div className="flex flex-col h-screen p-3 shadow" style={{width:'100%'}}>
    <Homenotes />
  </div>
</div>
  )
}

export default Home