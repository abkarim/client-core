import { useState } from 'react';
import SubmitButton from '../../components/buttons/SubmitButton';
import EmailInput from '../../components/input/EmailInput';
import Label from '../../components/Label';
import PasswordInput from '../../components/input/PasswordInput';
import Link from '../../components/Link';
import CheckboxInput from '../../components/input/CheckboxInput';
import useUpdatePageTitle from '../../hooks/useUpdatePageTitle';

function Login() {
  useUpdatePageTitle('Login');

  const [data, setData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });

  const toggleRememberMe = () => {
    setData((data) => ({ ...data, rememberMe: !data.rememberMe }));
  };

  const updateData = (e) => {
    setData((data) => ({ ...data, [e.target.name]: e.target.value }));
  };

  const login = () => {};

  return (
    <div className="bg-white p-4 max-w-lg flex-grow rounded-sm shadow-2xl">
      <div className="p-2"></div>
      <h1 className="text-3xl text-gray-900 font-semibold tracking-normal font-lato">
        Login Page
      </h1>

      <div className="p-2"></div>
      <Label>Email</Label>
      <EmailInput name="email" value={data.email} onInput={updateData} />

      <div className="p-1"></div>

      <Label>Password</Label>
      <PasswordInput
        name="password"
        value={data.password}
        onInput={updateData}
      />

      <div className="flex justify-between mt-1">
        <div>
          <CheckboxInput
            checked={data.rememberMe}
            onChange={toggleRememberMe}
          />
          <span className="ml-1"></span>
          <Label onClick={toggleRememberMe}>remember me</Label>
        </div>
        <div>
          <Label>
            <Link to={`/forgot-password`}>forgot password?</Link>
          </Label>
        </div>
      </div>

      <div className="p-2"></div>
      <SubmitButton onClick={login}>Login</SubmitButton>
      <div className="p-2"></div>
    </div>
  );
}

export default Login;
