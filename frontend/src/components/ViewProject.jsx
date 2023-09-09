import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export const ViewProject = () => {

  const [projectData, setProjectData] = useState(null);

  const { id } = useParams();

 

  const fetchProjectData = async (id) =>{
       
    const res = await fetch('http://localhost:5000/project/viewproject/'+id);
    console.log(res.status);
    const data = await res.json();
    setProjectData(data);
    // if(res.status===200){
    //   fetchProjectData();
    //   toast.success(data.name+'Deleted Successfully 😎🍔')  
    }

  
    useEffect(() => {
      fetchProjectData();
    }, []);
    
    
    const disp = () =>{
      if(projectData!==null)
       return <div className='col-md-4'>
                <div className='card'>

                <div className='m-auto h-50px'>
                    <img style={{height:'200px' , objectFit:'cover'}} className='card-img-top' src={projectData.avatar} alt="Not Available" />
                </div>
                      
                  <div className='card-body'>
                    {
                      <>
                        <h4>{projectData.name}</h4>
                        <h4>{projectData.technology}</h4>
                        <h4>{projectData.days}</h4>
                        <h4>{projectData.price}</h4>
                      </>
                      
                    }
  
                  </div>
  
                </div>
              </div>
    }

  

  return (
    <div className='bgimg pt-1'>
      <div className='container mt-5 '>

        
      </div>
      {disp(id)}
    </div>
  )
}
