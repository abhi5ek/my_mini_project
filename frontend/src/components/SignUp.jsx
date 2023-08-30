import React from 'react'
import {useFormik} from 'formik'


export const SignUp = () => {

  const signupForm = useFormik({
    initialValues: {
      firstname : "",
      lastname : "",
      email : "",
      passowrd : ""
    },
    onSubmit: async(values) => {
      const res = await fetch('/http://localhost:5000/project/addproject',{
        method : 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type' : 'application/json'
        }
      });
      console.log(res.status);
    }
  });



  return (
    <div className='d-flex justify-content-center'>
      <div className='w-25'>

        <div className='card signup-card'>

          <div className='card-body text-uppercase text-white'>

            <div className='text-center fs-2 fw-bold'>Sign Up</div>
            <hr />

            <form onSubmit={signupForm.handleSubmit}>

              <label htmlFor="">First Name</label>
              <span style={{color: 'red', fontSize: '0.7em', marginLeft: 10}}>{signupForm.errors.firstname}</span>
              <input type="text" className='form-control mb-3 ' name='firstname' onChange={signupForm.handleChange} value={signupForm.values.firstname}/>
              <label htmlFor="">Last Name</label>
              <input type="text" className='form-control mb-3' name='lastname' onChange={signupForm.handleChange} value={signupForm.values.lastname} />
              <label htmlFor="">Email</label>
              <input type="email" className='form-control mb-3' name='email' onChange={signupForm.handleChange} value={signupForm.values.email} />
              <label htmlFor="">Password</label>
              <input type="password" className='form-control mb-3' name='password' onChange={signupForm.handleChange} value={signupForm.values.passowrd} />

              <button className='btn btn-primary mt-3'>Submit</button>

            </form>

          </div>

        </div>

      </div>
    </div>
  )
}
