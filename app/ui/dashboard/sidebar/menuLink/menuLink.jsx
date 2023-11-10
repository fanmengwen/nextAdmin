'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const MenuLink = ({ item }) => {
  const pathname = usePathname();

  return (
    <Link
      href={item.path}
      className={`my-1 flex items-center gap-2 rounded-lg p-5 hover:bg-blue-200 ${
        pathname === item.path && 'bg-blue-200 text-blue-600'
      }`}
    >
      {item.icon}
      {item.title}
    </Link>
  );
};

export default MenuLink;
