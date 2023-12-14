import React from 'react'
import { NavLink } from 'react-router-dom'

const Home2 = () => {
  return (
    <div className='navbgcolor'>
      <nav className='navbar'>
        <div className='container'>
          <div className='navbar-brand fs-3 fw-bold' href="">FreelancerHub</div>
          <button class="btn btn-tranparent fs-3" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasWithBackdrop">
            <i class="fa-sharp fa-solid fa-bars"></i>
          </button>
          <div class="offcanvas offcanvas-top offcanvas-size-xl"  tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
          <div class="text-dark text-uppercase fw-bold">

            <ul>
              <li className='center'><a className='navtexttt' href="">abhishekk</a></li>
              <li className='center'><a className='navtexttt' href="">kumar</a></li>
            </ul>
                  
          </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Home2;
