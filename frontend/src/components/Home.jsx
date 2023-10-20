import React from 'react'
import React from 'react';
import Fade from 'react-reveal/Fade'
import { NavLink } from 'react-router-dom'

export const Home = () => {
  return (
    <div className=''>

    <div className='bgimg '>
    <div className='container pt-5 pb-5'>
    
      <Fade left>
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
      </Fade>

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

    <div className='homebg'>
        <div className='container pt-5 '>

          <div className='row fs-6 fw-bold '>

            <div className='col'>
              <h3 className='fs-3 fw-bold mt-3'>As used by</h3>
            </div>

            <div className='col mt-4'>
            <img src="https://images.crowdspring.com/blog/wp-content/uploads/2023/07/03162944/amazon-logo-1.png" alt="" height={'50px'} width={'180px'} />
            </div>

            <div className='col'>
              <img src="https://png.pngtree.com/png-clipart/20200721/original/pngtree-facebook-back-shadow-png-png-image_4839434.jpg" alt="" height={'70px'} width={'180px'} />
            </div>

            <div className='col'>
              <img src="data:image/png;base64,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" alt="" height={'70px'} width={'180'}/>
            </div>

            <div className='col'>
              <img src="data:image/png;base64,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" alt="" height={'70px'} width={'180'}/>
            </div>

          </div>
          <hr/>
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
