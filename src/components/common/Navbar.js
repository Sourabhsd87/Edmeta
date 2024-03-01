import React from 'react'

const Navbar = ({ toggleSidebar }) => {
  return (
    
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
            <div class="navbar-left d-flex align-items-center">
              
                {/* <!-- <button class="btn" type="button" data-toggle="collapse" data-target="#sidebar" aria-controls="sidebar" aria-expanded="false" aria-label="Toggle sidebar">
                  <i class="fa fa-solid fa-bars fa-lg"></i>
                </button> --> */}
              <button class="btn sidebar-toggle" onClick={toggleSidebar}>
                <i class="fa fa-solid fa-bars fa-lg"></i>
              </button>
              
            {/* <!-- <i class="fa fa-solid fa-bars fa-lg"></i> --> */}
            <a class="nav-link active" aria-current="page" href="#">Home</a>
            </div>
            
            <div class="navbar-right" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item"><button class="btn"><a class="nav-link active" type="" aria-current="page" href="#">Logout</a></button>
                  {/* <!-- <a class="nav-link active" type="" aria-current="page" href="#">Logout</a> --> */}
                </li>
                
              </ul>
            </div>
          </div>
        </nav>
    
  )
}

export default Navbar