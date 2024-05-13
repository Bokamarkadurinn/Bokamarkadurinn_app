"use client"
import { useState } from 'react';
import Admin from '@/app/ui/admin';
import Notandi from '@/app/ui/notandi';

export default function Home() {
  // State to toggle between admin and notandi
  const [isAdmin, setIsAdmin] = useState(false);

  // Function to toggle between admin and notandi for demo purposes
  const toggleUserRole = () => {
    setIsAdmin(prev => !prev);
  };

  return (
    <main>
      {/* Conditional rendering based on user role */}
      {isAdmin ? <Admin /> : <Notandi />}

      {/* Button to toggle between admin and notandi */}
      <button onClick={toggleUserRole}>
        Toggle User Role: {isAdmin ? 'Admin' : 'Notandi'}
      </button>
    </main>
  );
}