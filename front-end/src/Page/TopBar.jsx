// TopBar.jsx
import React from "react";
import '../CSS/TopBar.css';
import { Link, useNavigate } from "react-router-dom";

const TopBar = () => {
     const username = sessionStorage.getItem("username"); // nếu có
     const [dropdownOpen, setDropdownOpen] = useState(false);
     const navigate = useNavigate();
   
     const handleLogout = () => {
       sessionStorage.clear();
       navigate("/signin");
     };
  const role = sessionStorage.getItem("userSignin").phanQuyen;
  return (
    <div className="top-bar">
      <div className="logo">Fakebook</div>
      <div className="nav-links">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Contact</a>
        {role === "Quản Trị Viên" && (
          <Link to="/admin" className="admin-button">Quản lý</Link>
        )}
      </div>
      <div className="user-dropdown" onClick={() => setDropdownOpen(!dropdownOpen)}>
          👤 {username || "User"}
          {dropdownOpen && (
            <div className="dropdown-menu">
              <Link to="/profile">Trang cá nhân</Link>
              <button onClick={handleLogout}>Đăng xuất</button>
            </div>
          )}
        </div>
    </div>
  );
};

export default TopBar;
