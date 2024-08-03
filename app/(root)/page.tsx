import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox';
import React from 'react'

const Home = () => {
  const loggedIn = { firstName: "Dradriga"};
  return (
    <section className='home'>
      {/* Primary part of the home page */}
      <div className='home-content'>
        <header className='home-headere'>
          <HeaderBox 
            type ="greeting"
            title = "welcome"
            user = {loggedIn?.firstName || "Guest"}
            subtext = "Access and manage your account and transactions efficiently."
          />

          <TotalBalanceBox 
            accounts = {[]}
            totalBanks = {1}
            totalCurrentBalance = {1250.35}
          />
        </header>
      </div>
    </section>
  )
}

export default Home