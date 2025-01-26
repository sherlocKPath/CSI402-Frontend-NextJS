'use client';

import { useState, useEffect } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');

  useEffect(() => {
    const storedUserData = sessionStorage.getItem('userData');
    const expirationTime = sessionStorage.getItem('expirationTime');
    if (storedUserData && expirationTime) {
      const currentTime = new Date().getTime();
      if (currentTime > Number(expirationTime)) {
        sessionStorage.removeItem('userData');
        sessionStorage.removeItem('expirationTime');
        alert('เวลาของการลงทะเบียนชั่วคราวหมดอายุแล้ว กรุณาลงทะเบียนใหม่');
      }
    }
  }, []);

  const handleLogin = () => {
    const storedUserData = sessionStorage.getItem('userData');
    if (storedUserData) {
      const userData = JSON.parse(storedUserData);
      if (username === userData.username) {
        alert('ยินดีต้อนรับ! คุณสามารถใช้งานระบบได้');
        window.location.href = 'https://github.com/sherlocKPath/CSI402-Frontend-NextJS';
      } else {
        alert('ชื่อผู้ใช้งานไม่ถูกต้อง หรือไม่มีสิทธิ์ใช้งาน');
      }
    } else {
      alert('ไม่มีข้อมูลผู้ใช้งานในระบบ');
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
