'use client';

import { useState } from 'react';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleRegister = () => {
    if (username && password && email) {
      const userData = { username, password, email };

      const expirationTime = new Date().getTime() + 1800000;

      sessionStorage.setItem('userData', JSON.stringify(userData));
      sessionStorage.setItem('expirationTime', expirationTime.toString());

      alert(`ลงทะเบียนสำเร็จ!\nชื่อผู้ใช้งาน: ${username}\nอีเมล: ${email}`);

      window.location.href = '/';
    } else {
      alert('กรุณากรอกข้อมูลให้ครบทุกช่อง');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-6 border rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">ลงทะเบียนใช้งานชั่วคราว</h2>
      <input
        type="text"
        placeholder="ชื่อผู้ใช้งาน"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="mb-4 w-full p-2 border rounded text-black"
      />
      <input
        type="password"
        placeholder="รหัสผ่าน"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="mb-4 w-full p-2 border rounded text-black"
      />
      <input
        type="email"
        placeholder="อีเมล"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="mb-4 w-full p-2 border rounded text-black"
      />
      <button onClick={handleRegister} className="w-full p-2 bg-green-500 text-white rounded">
        ลงทะเบียน
      </button>
    </div>
  );
};

export default Register;
