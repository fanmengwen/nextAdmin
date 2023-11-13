'use client';

import { authenticate } from '@/app/lib/actions';
import React from 'react';
import { useForm, useFormState } from 'react-hook-form';

const inputClass = 'w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500';
const buttonClass = 'w-full p-3 border-none cursor-pointer rounded-lg bg-blue-500 text-white font-bold';
const LoginForm = () => {
  const { register, handleSubmit, control } = useForm();
  const { errors } = useFormState(); // 使用 useFormState

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="round-lg flex h-[500px] w-[500px] flex-col items-center justify-center gap-4 bg-white p-5"
    >
      <h1>Login</h1>
      <input type="text" placeholder="username" name="username" className={inputClass} {...register('username')} />
      <input type="password" placeholder="password" name="password" className={inputClass} {...register('password')} />
      <button className={buttonClass} type="submit">
        Login
      </button>
      {/* {state && state} */}
    </form>
  );
};

export default LoginForm;
