import { useFormik } from 'formik';
import React, { useState } from 'react'

export const ProjectAdd = () => {

    const [selImg, setSelImg] = useState("");
    const productForm = useFormik({
        initialValues:{
            name :"",
            description:"",
            technology:"",
            days:"",
            price:""
        },
        onSubmit : async ( values,{ resetForm, setSubmitting } ) => {
            values.avatar = selImg;
            console.log(values);
      
            const res = await fetch('http://localhost:5000/project/addproject', {
              method: 'POST',
              body: JSON.stringify(values),
              headers: {
                'Content-Type' : 'application/json'
              }
            });
            console.log(res.status);
        }
    });

    
  const uploadFile = async (e) => {
    if (!e.target.files[0]) return;
    const file = e.target.files[0];
    setSelImg(file.name);
    const fd = new FormData();
    fd.append("myfile", file);

    const res = await fetch("http://localhost:5000/util/uploadfile", {
      method: "POST",
      body: fd,
    });

    console.log(res.status);

    if (res.status === 200) {
      console.log("File uploaded successfully");
    } else {
      console.log("File upload failed");
    }
  };


  return (
    <div className=''>
    <div className='d-flex justify-content-center bgimg'>
        <div className='col-md-3'>
            <div className='card mt-5 mb-5 '>
                <div className='card-body text-uppercase'>

                <div className='text-center color fs-2 fw-bold'>ADD NEW PROJECT</div>
                <hr />

                    <form onSubmit={productForm.handleSubmit}>
                        <label htmlFor="">Project Name</label>
                        <input type="text" className='form-control mb-3' name='name' onChange={productForm.handleChange} value={productForm.values.name} />
                        
                        <label htmlFor="">Project Image</label>
                        <input type="file" className='form-control mb-3' onChange={uploadFile} />

                        {/* <input type="file" className='form-control mb-3' name='avatar' onChange={productForm.handleChange} value={productForm.values.avatar} /> */}

                        <label htmlFor="">Project Technology</label>
                        <input type="text" className='form-control mb-3' name='technology' onChange={productForm.handleChange} value={productForm.values.technology} />
                       
                        <label htmlFor="">Project Days</label>
                        <input type="text" className='form-control mb-3' name='days' onChange={productForm.handleChange} value={productForm.values.days} />
                       
                        <label htmlFor="">Project Price</label>
                        <input type="text" className='form-control mb-3' name='price' onChange={productForm.handleChange} value={productForm.values.price} />
                       
            

                        <button type='submit' className='btn navbgcolor text-white w-100'>ADD PROJECT</button>
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


