import React from 'react';

function Header() {
  return (
    <div className="d-flex justify-content-between align-items-center p-3 border-bottom bg-white shadow-sm">
      
      {/* Logo */}
      <div className="d-flex align-items-center">
        <img
          src="logo.png"
          alt="Worknest Logo"
          className="my-2 img-fluid"
          style={{ maxHeight: '60px', width: 'auto' }}
        />
      </div>

      {/* Icons + Logout */}
      <div className="d-flex align-items-center gap-3">
        <i className="bi bi-bell fs-5"></i>
        <i className="bi bi-person fs-5"></i>
        <i className="bi bi-gear fs-5"></i>
        <button className="btn btn-dark">Logout</button>
      </div>
    </div>
  );
}

export default Header;
