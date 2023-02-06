import { useState } from 'react';
import eyeOpen from '../../assets/img/eye-open.png';
import eyeClose from '../../assets/img/eye-close.png';

export default function PasswordInput({ ...props }) {
  const [type, setType] = useState('password');
  const [img, setImg] = useState(eyeOpen);

  const togglePassword = () => {
    if (type === 'password') {
      setImg(eyeClose);
      return setType('text');
    }
    setImg(eyeOpen);
    setType('password');
  };

  return (
    <div className="relative">
      <input
        type={type}
        className="bg-slate-50 border-2 p-1 rounded-sm w-full focus:border-gray-500 focus:outline-none text-lg text-gray-900"
        {...props}
      />
      <span
        onClick={togglePassword}
        className="inline-block absolute top-0 right-1 p-1 cursor-pointer"
      >
        <img alt="toggle" src={img} />
      </span>
    </div>
  );
}
