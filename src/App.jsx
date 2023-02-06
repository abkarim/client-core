import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import './assets/css/App.css';

function importLazy(path) {
  return lazy(() => import(path));
}

const Login = importLazy('./pages/auth/Login');

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
