import React, { useState } from 'react'
import {useFormik, validateYupSchema} from 'formik'
import { NavLink, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import Swal from 'sweetalert2';


const SignupSchema = Yup.object().shape({
  name: Yup.string().min(3,'Min 3 character required').required('Name is Required'),
  email: Yup.string().required('Email is Required'),
  password: Yup.string().min(4,'too short').required('Password is Required')
});

export const SignUp = () => {
  
  const signupForm = useFormik({

    initialValues: {
      name: "",
      email: "",
      password: ""
    },

    onSubmit : async (values,{resetForm}) => {
      console.log(values);
      // return;
      
      const res = await fetch('http://localhost:5000/user/add', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type' : 'application/json'
        }
      });
      console.log(res.status);
      if(res.status === 200){
        Swal.fire({
          icon : 'success',
          title : 'WellDone!',
          text : 'Registered Successfully 😎'
        })
        // navigate('/login');
      }else{
        Swal.fire({
          icon : 'error',
          title : 'Oops!',
          text : 'Something went wrong'
        })
      }
    },
    validationSchema : SignupSchema
  });


  return (
    <div className='d-flex justify-content-center bgimg'>
      <div className='col-md-3'>

        <div className='card mt-5'>

          <div className='card-body'>


            <form onSubmit={signupForm.handleSubmit}>
            <div className='text-center name-signup mb-3'>FreelancerHub</div>
            <div className='text-center fs-5 fw-bold mb-4'>Sign Up</div>
            <div className='text-center'>
            <button className='fb-btn w-100 text-white fs-5 fw-bold'>
               <NavLink className="nav-link fb-btn" to="https://www.facebook.com/login/">
               <i class="fa-brands fa-facebook"></i>Continue with facebook
              </NavLink>
            </button>
            </div>
            <hr />
              {/* <label htmlFor="">Name</label> */}
              <span style={{color: 'red', fontSize:'0.7rem', marginLeft: 10}}>{signupForm.errors.name}</span>
              <input type="text" className='form-control mb-1 ' name='name' onChange={signupForm.handleChange} value={signupForm.values.name} placeholder='Name'/>
              {/* <label htmlFor="">Email</label> */}
              <span style={{color: 'red', fontSize:'0.7rem', marginLeft: 10}}>{signupForm.errors.email}</span>
              <input type="email" className='form-control mb-1' name='email' onChange={signupForm.handleChange} value={signupForm.values.email} placeholder='Email'/>
              {/* <label htmlFor="">Password</label> */}
              <span style={{color: 'red', fontSize:'0.7rem', marginLeft: 10}}>{signupForm.errors.password}</span>
              <input height={'150'} type="password" className='form-control mb-1' name='password' onChange={signupForm.handleChange} value={signupForm.values.password} placeholder='Password' />
              
              {/* <div>
               <p className='fs-6 '> <input type="checkbox"/> I agree to the FreelancerHub <a href="">User Agreement</a> and <a href=''>Privacy Policy</a> </p>
              </div> */}

              <button type='submit' className='btn navbgcolor my-submit text-white w-100 mt-2 fs-5 fw-bold'>Join FreelencerHub</button>

            </form>
             <hr />
            <div className='col'>
                   <p>
                  already have an account? <a href="/login">login</a>
                   </p>
                    
            </div>

          </div>

        </div>

      </div>
    </div>
  )
}
