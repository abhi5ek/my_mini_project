import React from 'react'
import { NavLink } from 'react-router-dom'
import Fade from 'react-reveal/Fade'
import Bounce from 'react-reveal/Bounce'

export const Home = () => {
  return (
    <div className=''>

    <div className='bgimg '>
    <div className='container pt-5 pb-5'>
    
      <div>

          <Fade>
            <h1 className='fw-bold'>
            Hire the Best <br /> Freelancers for any job <br /> Online
            </h1>
          </Fade>
          
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
        <NavLink className="nav-link btnn fs-5" to="/signup">
          <Bounce>
            Hire a freelancer
          </Bounce>
          </NavLink>
        </button>
        <button className='btnn ms-5 text-white'>
        <NavLink className="nav-link btnn fs-5" to="/projectadd">
          <Bounce>

            Add project
            
          </Bounce>
          </NavLink>
        </button>
      </div >

      </div>  


    </div>

    </div>

    <div className='homebg'>
        <div className='container pt-5 '>
          <div className='mt-5'>
            <h1 className='fs-1 fw-bold '>need something done?</h1>
          </div>

          <div className='row mt-5 mb-5'>

            <div className='col'>
              <header className='fs-4 fw-bold'>
              Post a job
              </header>
              <h5 className='mt-4'>It’s free and easy to post a job. Simply fill in a title, description and budget and competitive bids come within minutes.</h5>
            </div>


            <div className='col'>
              <header className='fs-4 fw-bold'>
              Choose freelancers
              </header>
              <h5 className='mt-4'>No job is too big or too small. We've got freelancers for jobs of any size or budget, across 1800+ skills. No job is too complex. We can get it done!</h5>
            </div>

            <div className='col'>
              <header className='fs-4 fw-bold'>
              Pay safely
              </header>
              <h5 className='mt-4'>Only pay for work when it has been completed and you're 100% satisfied with the quality using our milestone payment system</h5>
            </div>

            <div className='col'>
              <header className='fs-4 fw-bold'>
              We’re here to help
              </header>
              <h5 className='mt-4'>Our talented team of recruiters can help you find the best freelancer for the job and our technical co-pilots can even manage the project for you.</h5>
            </div>

          </div>
          <hr />
          
          <div className='row mt-5 pb-5'>
            <div className='col md-1'>
               <h5>68,695,878 <br /> Registered Users</h5>
            </div>

            <div className='col md-1'>
               <h5>22,986,228 <br /> Total Jobs Posted</h5>
            </div>

            <div className='col md-6'>
               <p>Freelancer ® is a registered Trademark of Freelancer Technology Pty Limited (ACN 142 189 759) & Freelancer Online India Private Limited (CIN U93000HR2011FTC043854) <br /> Copyright © 2023 Freelancer Technology Pty Limited (ACN 142 189 759)</p>
            </div>
          </div>

        </div>
    </div>

    </div>
    
  )
}
