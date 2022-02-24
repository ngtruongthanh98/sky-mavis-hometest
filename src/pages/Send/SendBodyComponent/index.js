import React from 'react';
import TextInput from '../../../components/TextInput';
import StackIcon from '../assets/stack-icon.svg';
import EUR_COIN from '../../Main/AssetBoxComponent/assets/EUR-24.png';
import './styles.scss';

const SendBodyComponent = () => {
  return (
    <div className="send-body-component">
      <TextInput
        titleLeft="From"
        className="my-wallet"
        isDisabled
        leftElement={
          <div className="text-box">
            <div className="text-1">My Wallet</div>
            <div className="text-2">(7300...3334)</div>
          </div>
        }
      />

      <TextInput titleLeft="To" />

      <TextInput
        titleLeft="Asset"
        leftElement={
          <div className="custom-box">
            <img src={EUR_COIN} alt="EUR"></img>
            <span className="value">EUR</span>
          </div>
        }
        rightElement={<img src={StackIcon} alt="Asset" />}
      />

      <TextInput
        titleLeft="Amount"
        titleRight="available: 50 EUR"
        rightElement={<div className="text-component">MAX</div>}
      />
    </div>
  );
};

export default SendBodyComponent;
