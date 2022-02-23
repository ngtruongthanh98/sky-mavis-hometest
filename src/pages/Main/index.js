import React from 'react';
import HeaderComponent from './HeaderComponent';
import WalletTagComponent from './WalletTagComponent';
import './styles.css';

const MainPage = () => {
  return (
    <div className="custom-page">
      <div className="main-page">
        <HeaderComponent />

        <WalletTagComponent />
      </div>
    </div>
  );
};

export default MainPage;
