import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout,
} from 'react-icons/md';
import Image from 'next/image';
import MenuLink from './menuLink/menuLink';
import { auth, signOut } from '@/app/auth';

const menuItems = [
  {
    title: '导航',
    list: [
      {
        title: '首页',
        path: '/dashboard',
        icon: <MdDashboard />,
      },
      {
        title: '用户',
        path: '/dashboard/users',
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: '产品',
        path: '/dashboard/products',
        icon: <MdShoppingBag />,
      },
      {
        title: '交易',
        path: '/dashboard/transactions',
        icon: <MdAttachMoney />,
      },
    ],
  },
  {
    title: '分析',
    list: [
      {
        title: '收入',
        path: '/dashboard/revenue',
        icon: <MdWork />,
      },
      {
        title: '报道',
        path: '/dashboard/reports',
        icon: <MdAnalytics />,
      },
      {
        title: '团队',
        path: '/dashboard/teams',
        icon: <MdPeople />,
      },
    ],
  },
  {
    title: '用户',
    list: [
      {
        title: '设置',
        path: '/dashboard/settings',
        icon: <MdOutlineSettings />,
      },
      {
        title: '帮助',
        path: '/dashboard/help',
        icon: <MdHelpCenter />,
      },
    ],
  },
];
const Sidebar = async () => {
  const { user } = await auth();

  return (
    <div className="sticky top-10">
      <div className="mb-4 flex items-center gap-5">
        <Image className="rounded-full" src={'/noavatar.png'} alt="" width="50" height="50" />
        <div className="flex	 flex-col">
          <span className="font-medium">{user.username}</span>
          <span className="text-sm">用户</span>
        </div>
      </div>
      <ul className="list-none">
        {menuItems.map((cat) => (
          <li key={cat.title}>
            <span className="text-base font-bold">{cat.title}</span>
            {cat.list.map((item) => (
              <MenuLink item={item} key={item.title} />
            ))}
          </li>
        ))}
      </ul>
      <form
        action={async () => {
          'use server';
          await signOut();
        }}
      >
        <button className="flex w-full items-center border-none bg-none p-4">
          <MdLogout />
          &nbsp; 登出
        </button>
      </form>
    </div>
  );
};
export default Sidebar;
