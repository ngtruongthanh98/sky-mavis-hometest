import React from 'react';
import HeaderComponent from './HeaderComponent';
import WalletTagComponent from './WalletTagComponent';
import ButtonRowComponent from './ButtonRowComponent';
import './styles.scss';

const MainPage = () => {
  return (
    <div className="custom-page">
      <div className="main-page">
        <HeaderComponent />

        <WalletTagComponent />

        <ButtonRowComponent />
      </div>
    </div>
  );
};

export default MainPage;
