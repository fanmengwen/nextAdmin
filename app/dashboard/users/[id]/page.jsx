import { updateUser } from '@/app/lib/actions';
import { fetchUser } from '@/app/lib/data';
import Image from 'next/image';

const SingleUserPage = async ({ params }) => {
  const { id } = params;
  const user = await fetchUser(id);

  return (
    <div className="mt-4 flex gap-6">
      <div className="w-max flex-1 p-4">
        <div className="relative mt-4 h-[300px]  w-full overflow-hidden">
          <Image src={user.img || '/noavatar.png'} alt="" fill />
        </div>
        <div className="mt-3 w-full text-center text-lg"> {user.username}</div>
      </div>
      <div className="flex-[3_3_0%] p-4">
        <form action={updateUser} className="flex flex-col">
          <input type="hidden" name="id" value={user.id} className="form-input" />
          <label className="form-label">用户名</label>
          <input type="text" name="username" placeholder={user.username} className="form-input" />
          <label className="form-label">邮箱</label>
          <input type="email" name="email" placeholder={user.email} className="form-input" />
          <label className="form-label">密码</label>
          <input type="password" name="password" className="form-input" />
          <label className="form-label">地址</label>
          <textarea type="text" name="address" placeholder={user.address} className="form-input" />
          <label className="form-label">是否管理员?</label>
          <select name="isAdmin" id="isAdmin" className="form-input">
            <option value={true} selected={user.isAdmin}>
              是
            </option>
            <option value={false} selected={!user.isAdmin}>
              N否
            </option>
          </select>
          <label className="form-label">是否开启</label>
          <select name="isActive" id="isActive" className="form-input">
            <option value={true} selected={user.isActive}>
              是
            </option>
            <option value={false} selected={!user.isActive}>
              否
            </option>
          </select>
          <button className="mt-4 w-full cursor-pointer border-none bg-[#1677ff] p-4 text-white shadow">更新</button>
        </form>
      </div>
    </div>
  );
};

export default SingleUserPage;
