import Navbar from '../ui/dashboard/navbar/navbar';
import Sidebar from '../ui/dashboard/sidebar/sidebar';
import Footer from '../ui/dashboard/footer/footer';

const Layout = ({ children }) => {
  return (
    <div className="flex">
      <div className="min-h-screen w-2/12 p-3">
        <Sidebar />
      </div>
      <div className="w-full bg-[#f0f2f8]">
        <Navbar />
        <div className="px-6 py-4">{children}</div>
        <Footer />
      </div>
    </div>
  );
};
export default Layout;
