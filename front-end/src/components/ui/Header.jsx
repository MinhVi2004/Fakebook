import { Link, useLocation } from "react-router-dom";
import "../../CSS/Header.css";

const Header = () => {
  const location = useLocation();

  // Kiểm tra trang hiện tại để thay đổi nội dung header
  const isHomePage = location.pathname === "/";
  const isProfilePage = location.pathname.includes("/profile");

  return (
    <header className="header">
      <div className="left">
        <Link to="/" className="logo">MySocial</Link>
        {isHomePage && <input type="text" placeholder="Tìm kiếm..." className="search" />}
      </div>
      <div className="right">
        {isHomePage && <Link to="/">🏠 Trang chủ</Link>}
        {isHomePage && <Link to="/messages">💬 Tin nhắn</Link>}
        {isHomePage && <Link to="/notifications">🔔 Thông báo</Link>}
        {<Link to={`/profile`}>👤 Trang cá nhân</Link>} {/* Dễ dàng thay đổi theo người dùng */}
      </div>
    </header>
  );
};

export default Header;
