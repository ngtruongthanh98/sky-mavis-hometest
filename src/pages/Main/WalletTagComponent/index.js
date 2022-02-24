import React from 'react';
import CopyIcon from './assets/copy-icon.svg';
import RoninWhiteIcon from './assets/ronin-white.svg';
import './styles.scss';

const WalletTagComponent = () => {
  return (
    <div className="wallet-tag-component">
      <div className="wallet-header">
        <div className="info">
          <div className="name">My Wallet</div>
          <span className="serial-number">(7300 3777 3888 3334)</span>
        </div>

        <img className="icon-copy" src={CopyIcon} alt="Copy Icon" />
      </div>

      <div className="divider-bottom"></div>

      <div className="wallet-body">
        <div className="balance">
          <div className="usd">1,000 USD</div>
          <div className="vnd">23,046,000 VND </div>
        </div>

        <img src={RoninWhiteIcon} alt="Ronin White Icon" />
      </div>
    </div>
  );
};

export default WalletTagComponent;
