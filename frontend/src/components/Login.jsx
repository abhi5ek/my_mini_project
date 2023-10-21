import React from 'react'

export const Login = () => {
  return (
    <div className=''>
    <div className='d-flex justify-content-center bgimg'>
        <div className='col-md-3 '>

          <div className='card mt-5 mb-5 '>

            <div className='card-body'>
            <div className='fs-2 fw-bold color text-center'>LOGIN</div>
            <hr />

              <form action="">
                <label htmlFor="">EMAIL</label>
                <input type="email" className='form-control mb-3' />
                <label htmlFor="">PASSWORD</label>
                <input type="password" className='form-control mb-3' />
                 <button className='btn navbgcolor text-white mt-3'>LOGIN</button>
              </form>

            </div>

          </div>

        </div>
    </div>

    <div className='homebg'>
        <div className='container pt-3'>
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
