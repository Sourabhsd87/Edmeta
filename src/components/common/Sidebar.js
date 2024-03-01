import React, { useState } from 'react';
import '../../styles/Sidebar.css'; // Make sure to adjust the path based on your project structure

const Sidebar = ({ isOpen }) => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }


  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`} id="sidebar">
      <div className="sidebar-title d-flex flex-column align-items-center justify-content-center">
        <a href="" className=" ">
          <svg width="60" height="60"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">!Font Awesome Free
            6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright
            2024 Fonticons, Inc.
            <path fill="#ffffff"
              d="M337.8 5.4C327-1.8 313-1.8 302.2 5.4L166.3 96H48C21.5 96 0 117.5 0 144V464c0 26.5 21.5 48 48 48H256V416c0-35.3 28.7-64 64-64s64 28.7 64 64v96H592c26.5 0 48-21.5 48-48V144c0-26.5-21.5-48-48-48H473.7L337.8 5.4zM96 192h32c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H96c-8.8 0-16-7.2-16-16V208c0-8.8 7.2-16 16-16zm400 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H512c-8.8 0-16-7.2-16-16V208zM96 320h32c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H96c-8.8 0-16-7.2-16-16V336c0-8.8 7.2-16 16-16zm400 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H512c-8.8 0-16-7.2-16-16V336zM232 176a88 88 0 1 1 176 0 88 88 0 1 1 -176 0zm88-48c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H336V144c0-8.8-7.2-16-16-16z" />
          </svg>
        </a>
        <h4 className="text-center text-white py-3 my-0">School Management</h4>
      </div>
      <hr className="my-1 bg-black" />
      <div className="sidebar-body">
        <ul className="nav nav-pills flex-column">
          <li className="nav-item">
            <a href="#" className="nav-link text-decoration-none text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                class="bi bi-person-circle" viewBox="0 0 16 16">
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                <path fill-rule="evenodd"
                  d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
              </svg>
              Profile
            </a>
          </li>
          <hr className="my-0 bg-black" />
          <li className="nav-item">
            <a href="#" className="nav-link text-decoration-none text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                class="bi bi-person-circle" viewBox="0 0 16 16">
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                <path fill-rule="evenodd"
                  d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
              </svg>
              Profile
            </a>
          </li>
          <hr className="my-0 bg-black" />
          <li className="nav-item">
            <a href="#" className="nav-link text-decoration-none text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                class="bi bi-person-circle" viewBox="0 0 16 16">
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                <path fill-rule="evenodd"
                  d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
              </svg>
              Profile
            </a>
          </li>
          <hr className="my-0 bg-black" />
          <li className="nav-item">
            <a href="#" className="nav-link text-decoration-none text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                class="bi bi-person-circle" viewBox="0 0 16 16">
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                <path fill-rule="evenodd"
                  d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
              </svg>
              Profile
            </a>
          </li>
          {/* Repeat the above list items as needed */}
          <hr className="my-0 bg-black" />
          <li className="nav-item">
            <a href="#" className="nav-link text-decoration-none text-white" onClick={toggleMenu}>
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                class="bi bi-person-circle" viewBox="0 0 16 16">
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                <path fill-rule="evenodd"
                  d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
              </svg>
              Edmeta School
              <i
              className={`fas fa-angle-right ${isMenuOpen ? 'fa-rotate-180' : 'fa-rotate-90'}`}
            ></i>
            </a>
            <ul className={`sub-nav-items nav ml-4 ${isMenuOpen ? 'show' : ''}`}>
              <li>
                <a href="#" className="nav-link text-decoration-none text-white">
                  <i className="far fa-circle nav-icon"></i>
                  Dashboard
                </a>
              </li>
              <hr />
              <li>
                <a href="#" className="nav-link text-decoration-none text-white">
                  <i className="far fa-circle nav-icon"></i>
                  Dashboard
                </a>
              </li>
              <hr />
              <li>
                <a href="#" className="nav-link text-decoration-none text-white">
                  <i className="far fa-circle nav-icon"></i>
                  Dashboard
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
