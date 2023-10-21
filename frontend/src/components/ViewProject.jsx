import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export const ViewProject = () => {

  const [projectData, setProjectData] = useState(null);

  const { id } = useParams();

  console.log(id);

 

  const fetchProjectData = async () =>{
       
    const res = await fetch('http://localhost:5000/project/viewproject/'+id);
    console.log(res.status);
    const data = await res.json();
    setProjectData(data);
    }

  
    useEffect(() => {
      fetchProjectData();
    }, []);
    
    
    const disp = () =>{
      if(projectData!==null)
       return <div className='col-md-4'>
                <div className='card'>

                <div className='m-auto h-50px mt-3'>
                    <img style={{height:'200px' , objectFit:'cover'}} className='card-img-top' src={'http://localhost:5000/'+projectData.avatar} alt="Not Available" />
                </div>
                      
                  <div className='card-body text-uppercase'>
                    {
                      <>
                      <h4 className='fs-1 d-flex justify-content-center navbgcolor text-white'>{projectData.name}</h4>
                        <hr />
                        <h4><i class="fa-solid fa-pen"></i> {projectData.technology}</h4>
                        <h4><i class="fa-regular fa-calendar-days"></i> {projectData.days} days</h4>
                        <h4>{projectData.price}</h4>
                      </>
                      
                    }
  
                  </div>
  
                </div>
              </div>
    }

  

  return (
    <div className=''>

    <div className='bgimg p-1'>
      <div className='container mt-5 mb-5 d-flex justify-content-center'>
      {disp(id)}    
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
