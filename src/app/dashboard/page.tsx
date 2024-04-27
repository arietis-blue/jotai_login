"use client";
import React, { useEffect, useState } from 'react';
import { useAtom } from 'jotai';
import { userAtom } from '../store/authAtom';

const TestComponent = () => {
  const [user, setUser] = useAtom(userAtom);
  const [loading, setLoading] = useState(true); // ローディング状態を追加

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(storedUser);
    }
    setLoading(false); // ローカルストレージからの読み込みが完了したらローディングを終了
  }, [setUser]);

  return (
    <div className="flex items-center justify-center w-full h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg px-8 py-4 max-w-md text-center">
        <h3 className="text-xl font-semibold text-gray-900">Current User</h3>
        <p className="mt-2 text-lg text-gray-600">
          {loading ? 'Loading...' : (user || "No user logged in")}
        </p>
      </div>
    </div>
  );
};

export default TestComponent;
