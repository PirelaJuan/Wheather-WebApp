import { Outlet} from "react-router-dom";
import SideBar from "../components/SideBar.jsx";


const Layout = () => {
  return (
    <div>
    <SideBar />
    <Outlet />
  </div>
  );
};

export default Layout;