import { deleteUser } from '@/app/lib/actions';
import { fetchUsers } from '@/app/lib/data';
import Pagination from '@/app/ui/dashboard/pagination/pagination';
import Search from '@/app/ui/dashboard/search/search';
import Image from 'next/image';
import Link from 'next/link';

const UsersPage = async ({ searchParams }) => {
  const q = searchParams?.q || '';
  const page = searchParams?.page || 1;
  const { count, users } = await fetchUsers(q, page);

  return (
    <div className="mt-4 rounded-sm bg-white p-4">
      <div className="flex items-center justify-between">
        <Search placeholder="查找" />
        <Link href="/dashboard/users/add">
          <button className="w-[100px] cursor-pointer rounded-sm border-none bg-[#1677ff] p-2 text-center text-white">
            添加
          </button>
        </Link>
      </div>
      <table className="mt-2 w-full">
        <thead>
          <tr>
            <td>姓名</td>
            <td>邮箱</td>
            <td>创建时间</td>
            <td>权限</td>
            <td>状态</td>
            <td>操作</td>
          </tr>
        </thead>
        <tbody>
          {users?.map((user) => (
            <tr key={user.id}>
              <td>
                <div className="flex items-center gap-2">
                  <Image
                    src={user.img || '/noavatar.png'}
                    alt=""
                    width={40}
                    height={40}
                    className="rounded-lg object-cover"
                  />
                  {user.username}
                </div>
              </td>
              <td>{user.email}</td>
              <td>{user.createdAt?.toString().slice(4, 16)}</td>
              <td>{user.isAdmin ? '管理员' : '客户'}</td>
              <td>{user.isActive ? '活跃' : '不活跃'}</td>
              <td>
                <div className="flex gap-2">
                  <Link href={`/dashboard/users/${user.id}`}>
                    <button className="cursor-pointer border-none bg-transparent px-1  py-2 text-[#1677ff] outline-none">
                      查看
                    </button>
                  </Link>
                  <form action={deleteUser}>
                    <input type="hidden" name="id" value={user.id} />
                    <button className="cursor-pointer border-none bg-transparent px-1  py-2 text-[#1677ff] outline-none">
                      删除
                    </button>
                  </form>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination count={count} />
    </div>
  );
};

export default UsersPage;
