import { useFormik } from 'formik';
import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import * as Yup from 'yup';


const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is Required'),
  password: Yup.string().required('Password is Required')
});

export const Login = () => {

  const navigate = useNavigate();
  const loginform = useFormik({
    initialValues: {
      email : "",
      password : ""
    },
    onSubmit : async ( values ) => { 
      console.log(values) ;

      const res = await fetch('http://localhost:5000/user/authenticate',{
        method: 'POST',
        body: JSON.stringify(values),
        headers:{
          'Content-Type' : 'application/json'
        }
      });   

      console.log(res.status);

      if(res.status === 200){
        Swal.fire({
          icon : 'success',
          title :'Nice',
          text : 'Logged in Successfully'
        });
        
        const data = await res.json();
        sessionStorage.setItem('user',JSON.stringify(data));

      }else if(res.status === 401){
        Swal.fire({
          icon : 'success',
          title :'Success',
          text : 'logged In successfully'
        })
       navigate('/home');
      }else{
        Swal.fire({
          icon : 'error',
          title :'Error',
          text : 'Email or Password is incorrect'
        })
      }

      // write code to submit form to server
    },
    validationSchema : LoginSchema
  });


  return (
    <div className=''>
    <div className='d-flex justify-content-center bgimg'>
        <div className='col-md-3 '>

          <div className='card mt-5 mb-5 '>

            <div className='card-body'>
            <div className='fs-2 fw-bold color text-center'>LOGIN</div>
            <hr />

              <form onSubmit={loginform.handleSubmit}>
                <label htmlFor="">EMAIL</label>
                <span style={{color: 'red', fontSize:'0.7rem', marginLeft: 10}}>{loginform.errors.email}</span>
                <input type="email" className="form-control mb-3" name="email" onChange={loginform.handleChange} value={loginform.values.email}/>

                <label htmlFor="">PASSWORD</label>
                <span style={{color: 'red', fontSize:'0.7rem', marginLeft: 10}}>{loginform.errors.password}</span>
                <input type="password" className="form-control mb-3" name="password" onChange={loginform.handleChange} value={loginform.values.password} />

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
