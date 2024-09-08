import React from 'react';
<<<<<<< Updated upstream

const HomePage = () => {
  return (
    <main>
      <h1>Expense Tracker</h1>
=======
import Guest from '../components/guest';
import { currentUser } from '@clerk/nextjs/server';
import AddTransaction from '../components/AddTransactions';

const HomePage = async () => {
  const user = await currentUser();
  if (!user){
    return <Guest />
  }

  return (
    <main>
      <h1>Welcome, {user.firstName}</h1>
      <AddTransaction/>
>>>>>>> Stashed changes
    </main>
  );
}

export default HomePage;
