import React from 'react';
import HeaderComponent from './HeaderComponent';
import WalletTagComponent from './WalletTagComponent';
import ButtonRowComponent from './ButtonRowComponent';
import AssetBoxComponent from './AssetBoxComponent';
import './styles.scss';

const MainPage = () => {
  const onClickSend = () => {
    console.log('Send');
  };

  return (
    <div className="custom-page">
      <div className="main-page">
        <HeaderComponent />

        <WalletTagComponent />

        <ButtonRowComponent onClickSend={onClickSend} />

        <AssetBoxComponent />
      </div>
    </div>
  );
};

export default MainPage;
