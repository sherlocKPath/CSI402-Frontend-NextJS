'use client';

import { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');

  const handleLogin = () => {
    if (username === 'admin') {
      alert('ยินดีต้อนรับ! คุณสามารถใช้งานระบบได้');
    } else {
      alert('ชื่อผู้ใช้งานไม่มีสิทธิ์ กรุณาลงทะเบียนเพื่อใช้งานชั่วคราว');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-6 border rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">ระบบตรวจสอบผู้ใช้งาน</h2>
      <input
        type="text"
        placeholder="ชื่อผู้ใช้งาน"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="mb-4 w-full p-2 border rounded text-black"
      />
      <button onClick={handleLogin} className="w-full p-2 bg-blue-500 text-white rounded">
        ตรวจสอบสิทธิ์
      </button>
    </div>
  );
};

export default Login;
