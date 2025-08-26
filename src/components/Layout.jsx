import { Outlet } from "react-router-dom";
import Nav from "./Nav.jsx";

function Layout() {
  return (
    <>
      <Nav />
      <div className="content">
        {}
        <Outlet />
      </div>
    </>
  );
}

export default Layout;
