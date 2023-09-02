import React from 'react'
import { NavLink } from 'react-router-dom'

export const Home = () => {
  return (
    <div className='bgimg '>
    <div className='container pt-5'>
    
      <div>
        <div className='fw-bold fs-1'>
          
            Hire the Best <br /> Freelancers for any job <br /> Online
           
        </div>
        <div className='mt-5'>
          <ul className='fs-4'>
            <li>World's largest freelance marketplace</li>
            <li>Any job you can possibly think of</li>
            <li>Save up to 90% & get quotes for free</li>
            <li>Pay only when you're 100% happy</li>
          </ul>
        </div>
      </div>

      <div className='mt-5'>

      <div>
        <button className='btnn text-white'>
        <NavLink className="nav-link btnn" to="/signup">
            Hire a freelancer
          </NavLink>
        </button>
        <button className='btnn ms-5 text-white'>
        <NavLink className="nav-link btnn" to="/projectadd">
            Add project
          </NavLink>
        </button>
      </div >

      </div>  


    </div>

    </div>
    
  )
}
