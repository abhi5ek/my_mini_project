import React from 'react'

export const Login = () => {
  return (
    <div className='d-flex justify-content-center bgimg'>
        <div className='w-25 '>

          <div className='card signup-card text-white mt-5 mb-5'>

            <div className='card-body'>
            <div className='fs-2 fw-bold text-center'>LOGIN</div>
            <hr />

              <form action="">
                <label htmlFor="">EMAIL</label>
                <input type="email" className='form-control mb-3' />
                <label htmlFor="">PASSWORD</label>
                <input type="password" className='form-control mb-3' />
                 <button className='btn btn-primary mt-3'>SUBMIT</button>
              </form>

            </div>

          </div>

        </div>
    </div>
  )
}
