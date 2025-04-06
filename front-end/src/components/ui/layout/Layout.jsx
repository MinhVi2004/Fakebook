import Header from "../Header";
import { Outlet } from "react-router-dom";

// Layout chung cho tất cả các trang
const Layout = () => {
  return (
    <div>
      <Header />
      <div className="main-content">
        <Outlet /> {/* Đây là nơi các trang con sẽ được render */}
      </div>
    </div>
  );
};

export default Layout;
