import Navbar from '../ui/dashboard/navbar/navbar';
import Sidebar from '../ui/dashboard/sidebar/sidebar';

const Layout = ({ children }) => {
  return (
    <div className="flex">
      <div className="min-h-screen w-3/12 p-3">
        <Sidebar />
      </div>
      <div className="w-full p-3">
        <Navbar />
        {children}
      </div>
    </div>
  );
};
export default Layout;
