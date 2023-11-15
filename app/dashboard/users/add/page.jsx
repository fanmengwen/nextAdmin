import { addUser } from '@/app/lib/actions';

const AddUserPage = () => {
  return (
    <div className="mt-4 bg-white p-4">
      <form action={addUser} className="flex flex-wrap justify-between">
        <input className="form-input m-2" type="text" placeholder="username" name="username" required />
        <input className="form-input m-2" type="email" placeholder="email" name="email" required />
        <input className="form-input m-2" type="password" placeholder="password" name="password" required />
        <input className="form-input m-2" type="phone" placeholder="phone" name="phone" />
        <select className="form-input m-2" name="isAdmin" id="isAdmin">
          <option value={false}>是否管理员</option>
          <option value={true}>是</option>
          <option value={false}>否</option>
        </select>
        <select className="form-input m-2" name="isActive" id="isActive">
          <option value={true}>是否活跃</option>
          <option value={true}>活跃</option>
          <option value={false}>不活跃</option>
        </select>
        <textarea name="address" id="address" className="form-input m-2" rows="16" placeholder="Address"></textarea>
        <button className="mt-4 w-full cursor-pointer border-none bg-[#1677ff] p-4 text-white shadow" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddUserPage;
