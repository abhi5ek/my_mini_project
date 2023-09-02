import React, { useState } from 'react'
import { useParams } from 'react-router-dom';

export const ViewProject = () => {

  const [ProjectList, setProjectList] = useState([]);
  const [viewproject, setviewproject] = useState([]);

  const { id } = useParams();

 

  const displayProjectData = () => {
    return <table className='table table-dark'>
      <thead>
        <tr>
          <th>PROJECT ID</th>
          <th>PROJECT NAME</th>
          <th>PROJECT DESCRIPTION</th>
          <th>PROJECT TECHNOLOGY</th>
          <th>ACTIONS</th>
        </tr>
      </thead>
      <tbody>
        {
          viewproject.map((project) =>
          (<tr>
            <td>{project._id}</td>
            <td>{project.name}</td>
            <td>{project.description}</td>
            <td>{project.technology}</td>


          </tr>))
        }
      </tbody>
    </table>
  }

  return (
    <div className='bgimg'>
      <div className='container mt-5 '>

        
      </div>
      viewimg
      {displayProjectData}
    </div>
  )
}
