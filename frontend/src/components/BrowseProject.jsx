import React, { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';

export const BrowseProject = () => {

  const [ProjectList, setProjectList] = useState([]);
  const [viewproject, setviewproject] = useState([]);

  const fetchProjectData = async () => {
    const res = await fetch('http://localhost:5000/project/getproject ');
    console.log(res.status);

    const data = await res.json();
    console.log(data);
    setProjectList(data);
    setviewproject(data);
  };

  const searchProject = async (e) => {
    // const res = await fetch('http://localhost:5000/project/getproject');
    // console.log(res.status);

    // const data = await res.json();
    // console.log(data);
    // setProjectList(data)
    const search = e.target.value;
    setviewproject(
      ProjectList.filter((project) => { return project.name.toLowerCase().includes(search.toLowerCase()) })
    )
  }

  const deleteUser = async (id) => {
    const res = await fetch('http://localhost:5000/project/delproject/'+id,{method:'DELETE'});
    console.log(res.status);
    const data = await res.json();
    if(res.status===200){
      fetchProjectData();
      toast.success(data.name+'Deleted Successfully 😎🍔')  
    }
  }


  const viewUser = async (id) =>{
       
    const res = await fetch('http://localhost:5000/project/viewproject/'+id);
    console.log(res.status);
    const data = await res.json();
    // if(res.status===200){
    //   fetchProjectData();
    //   toast.success(data.name+'Deleted Successfully 😎🍔')  
    // }
       return <div className='col-md-4'>
                <div className='card'>

                <div className='m-auto h-50px'>
                    <img style={{height:'200px' , objectFit:'cover'}} className='card-img-top' src={data.image} alt="Not Available" />
                </div>
                      
                  <div className='card-body'>
                    {
                      <>
                        <h4>{data.name}</h4>
                        <h4>{data.technology}</h4>
                        <h4>{data.days}</h4>
                        <h4>{data.price}</h4>
                      </>
                      
                    }
  
                  </div>
  
                </div>
              </div>

  }


  useEffect( () => {
    fetchProjectData();
  },[]);

  const dispProjectData = () =>{
    return ProjectList.map((project) => {

       return   <div className='col-md-4'>
                  <div className='card '>

                  <div className='m-auto h-50px'>
                    <img style={{height:'200px' , objectFit:'cover'}} className='card-img-top' src={project.image} alt="Not Available" />
                    </div>

                  <div className='card-body'>
                      {
                          <>
                            <h4>{project.name}</h4>
                            <div className='row'>
                              <div className='col'>
                                  <button onClick={ () => { deleteUser(project._id) }} className='btn btn-danger'>Delete Project</button>
                              </div>
                              <div className='col d-flex m-auto me-0px'>
                                  <button onClick={ () => { viewUser(project._id) }} className='btn btn-primary ms-auto me-1'>View Project</button>
                              </div>
                            </div>
                          </>
                        
                      }
                  </div>
               </div>
            </div>
    });

  }

  // const displayProjectData = () =>{
  //   return <table className='table table-dark'>
  //         <thead>
  //           <tr>
  //             <th>PROJECT ID</th>
  //             <th>PROJECT NAME</th>
  //             <th>PROJECT DESCRIPTION</th>
  //             <th>PROJECT TECHNOLOGY</th>
  //             <th>ACTIONS</th>
  //           </tr>
  //         </thead>
  //         <tbody>
  //           {
  //             viewproject.map( (project) => 
  //             ( <tr>
  //               <td>{project._id}</td>
  //               <td>{project.name}</td>
  //               <td>{project.description}</td>
  //               <td>{project.technology}</td>

  //               <td>
  //                 <button onClick={ () => { deleteUser(project._id) }} className='btn btn-danger'>Delete</button>
  //               </td>

  //             </tr> ) )
  //           }
  //         </tbody>
  //       </table>
  // }
  
  return (
    <div className='bgimg'>

          <div className='container'>
          <h1 className='fs-2 fw-bold'>PROJECT INFO</h1>
          <hr/>
          <div className='row'>
          
             {dispProjectData()}
           
          </div>
          <input onChange={searchProject} type="text" className='form-control form-control-lg' placeholder='Search Project Name...' />

          </div>
    </div>
  )
}
