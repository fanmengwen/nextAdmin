'use client';
import { usePathname } from 'next/navigation';
import styles from './navbar.module.css';
// import { MdNotifications, MdOutlineChat, MdPublic, MdSearch } from 'react-icons/md';

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="flex items-center justify-between rounded-lg p-5">
      <div className="font-bold capitalize">{pathname.split('/').pop()}</div>
      <div className={styles.menu}>menu</div>
    </div>
  );
};

export default Navbar;
