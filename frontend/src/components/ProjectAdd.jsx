import { useFormik } from 'formik';
import React from 'react'

export const ProjectAdd = () => {
    const productForm = useFormik({
        initialValues:{
            name :"",
            image:"",
            description:"",
            technology:"",
            days:"",
            price:""
        },
        onSubmit : async ( values ) => {
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

  return (
    <div className='d-flex justify-content-center bgimg'>
        <div className='col-md-3'>
            <div className='card mt-5'>
                <div className='card-body text-uppercase'>

                <div className='text-center fs-2 fw-bold'>ADD NEW PRODUCT</div>
                <hr />

                    <form onSubmit={productForm.handleSubmit}>
                        <label htmlFor="">Project Name</label>
                        <input type="text" className='form-control mb-3' name='name' onChange={productForm.handleChange} value={productForm.values.name} />
                        
                        <label htmlFor="">Project Image</label>
                        <input type="file" className='form-control mb-3' name='image' onChange={productForm.handleChange} value={productForm.values.image} />

                        <label htmlFor="">Project Technology</label>
                        <input type="text" className='form-control mb-3' name='technology' onChange={productForm.handleChange} value={productForm.values.technology} />
                       
                        <label htmlFor="">Project Days</label>
                        <input type="text" className='form-control mb-3' name='days' onChange={productForm.handleChange} value={productForm.values.days} />
                       
                        <label htmlFor="">Project Price</label>
                        <input type="text" className='form-control mb-3' name='price' onChange={productForm.handleChange} value={productForm.values.price} />
                       
            

                        <button type='submit' className='btn btn-primary w-100'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    
  )
}


