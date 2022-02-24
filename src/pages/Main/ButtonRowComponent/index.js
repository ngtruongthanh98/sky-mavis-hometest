import React from 'react';
import IconButton from '../../../components/IconButton';
import SendIcon from './assets/send-icon.svg';
import SwapIcon from './assets/swap-icon.svg';
import DepositIcon from './assets/deposit-icon.svg';
import './styles.scss';

const ButtonRowComponent = () => {
  return (
    <div className="button-row-component">
      <IconButton source={DepositIcon} buttonName="Deposit" isDisabled />

      <IconButton source={SendIcon} buttonName="Send" />

      <IconButton source={SwapIcon} buttonName="Swap" isDisabled />
    </div>
  );
};

export default ButtonRowComponent;
