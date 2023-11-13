'use client';
import { usePathname } from 'next/navigation';
import { MdNotifications, MdOutlineChat, MdPublic, MdSearch } from 'react-icons/md';

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="flex items-center justify-between bg-[#2a6495] p-3 text-white">
      <div className="font-500 font-14 capitalize">{pathname.split('/').pop()}</div>
      <div className="flex items-center gap-5">
        <div className="round-lg flex items-center gap-3 p-2.5">
          <MdSearch />
          <input
            type="text"
            placeholder="搜索..."
            className="focus:white block w-full rounded-md border-0 border-none bg-transparent py-1.5 pl-7 pr-20 text-gray-100 outline-none  ring-gray-300 focus:ring-2"
          />
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
