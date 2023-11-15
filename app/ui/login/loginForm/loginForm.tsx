'use client';
import { authenticate } from '@/app/lib/actions';
import { useFormState } from 'react-dom';

const LoginForm = () => {
  const [state, formAction] = useFormState(authenticate, undefined);

  const inputClass = 'w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500';
  const buttonClass = 'w-full p-3 border-none cursor-pointer rounded-lg bg-blue-500 text-white font-bold';

  return (
    <form
      action={formAction}
      className="round-lg flex h-[500px] w-[500px] flex-col items-center justify-center gap-4 bg-white p-5"
    >
      <h1>登录</h1>
      <input type="text" required placeholder="username" name="username" className={inputClass} />
      <input type="password" placeholder="password" name="password" className={inputClass} required />
      {state && state}

      <button className={buttonClass} type="submit">
        登录
      </button>
    </form>
  );
};

export default LoginForm;
