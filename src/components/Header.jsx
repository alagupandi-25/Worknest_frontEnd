import React from 'react';
import { useNavigate } from 'react-router-dom';

function Header() {
  
  const nav = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expiresAt');
    localStorage.removeItem('firstName');
    localStorage.removeItem('lastName');
    localStorage.removeItem('email');
    localStorage.removeItem('Role');

    nav('/login');
  };
  return (
    <div className="d-flex justify-content-between align-items-center p-3 border-bottom bg-white shadow-sm">
      
      <div className="d-flex align-items-center">
        <img
          src="logo.png"
          alt="Worknest Logo"
          className="my-2 img-fluid"
          style={{ maxHeight: '60px', width: 'auto' }}
        />
      </div>

      <div className="d-flex align-items-center gap-3">
        <i className="bi bi-bell fs-5"></i>
        <i className="bi bi-person fs-5"></i>
        <i className="bi bi-gear fs-5"></i>

        <button className="btn btn-dark" onClick = {handleLogout}>Logout</button>
      </div>
    </div>
  );
}

export default Header;
