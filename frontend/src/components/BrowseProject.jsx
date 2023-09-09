import React, { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast';
import { Link, NavLink } from 'react-router-dom';

export const BrowseProject = () => {

  const [ProjectList, setProjectList] = useState([]);
  // const [viewproject, setviewproject] = useState([]);

  const [masterList, setMasterList] = useState([]);

  const fetchProjectData = async () => {
    const res = await fetch('http://localhost:5000/project/getproject ');
    console.log(res.status);

    const data = await res.json();
    console.log(data);
    setProjectList(data);
    setMasterList(data);
  };

  const searchProject = async (e) => {
    const search = e.target.value;
    setProjectList(
      masterList.filter((project) => { return project.name.toLowerCase().includes(search.toLowerCase()) })
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


  useEffect( () => {
    fetchProjectData();
  },[]);

  const dispProjectData = () =>{
    return ProjectList.map((project) => {

       return   <div className='col-md-4'>
                  <div className='card mb-4'>

                  <div className='m-auto h-50px mt-3'>
                    <img style={{height:'200px' , objectFit:'cover'}} className='card-img-top' src={'http://localhost:5000/'+project.avatar} alt="Not Available" />
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
                                  <NavLink to={'/viewproject/'+project._id} className='btn btn-primary ms-auto me-1'>View Project</NavLink>
                              </div>
                            </div>
                          </>
                        
                      }
                  </div>
               </div>
            </div>
    });

  }


  return (
    <div className='bgimg'>

          <div className='container'>
          <h1 className='fs-2 fw-bold'>PROJECT INFO</h1>
          <hr/>
          <input onChange={searchProject} type="text" className='form-control form-control-lg mb-3' placeholder='Search Project Name...' />
          <div className='row'>
          
             {dispProjectData()}
          </div>

          </div>
          
    </div>
           
  )
}
