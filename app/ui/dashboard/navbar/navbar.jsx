'use client';
import { usePathname } from 'next/navigation';
import styles from './navbar.module.css';
import { MdNotifications, MdOutlineChat, MdPublic, MdSearch } from 'react-icons/md';

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="flex items-center justify-between rounded-lg p-5">
      <div className="font-500 font-14 capitalize">{pathname.split('/').pop()}</div>
      <div className="flex items-center gap-5">
        <div className="round-lg flex items-center gap-3 p-2.5">
          <MdSearch />
          <input type="text" placeholder="Search..." className="border-none bg-transparent" />
        </div>
        <div className="flex gap-10">
          <MdOutlineChat size={20} />
          <MdNotifications size={20} />
          <MdPublic size={20} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
