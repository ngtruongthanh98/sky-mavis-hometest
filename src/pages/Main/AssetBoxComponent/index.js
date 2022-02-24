import React from 'react';
import UER_COIN from './assets/UER-1.png';
import YEN_COIN from './assets/YEN-1.png';
import './styles.scss';

const AssetBoxComponent = () => {
  return (
    <div className="asset-box-component">
      <div className="asset-box-component-title">Assets</div>
      <div className="currency-box-list">
        <div className="currency-box-element">
          <img className="currency-icon" src={UER_COIN} alt="EUR" />

          <div className="currency-value-box">
            <div className="foreign-coin">50 UER</div>

            <div className="vnd-coin">1,531,972 VND</div>
          </div>
        </div>

        <div className="currency-box-element">
          <img className="currency-icon" src={YEN_COIN} alt="YEN" />

          <div className="currency-value-box">
            <div className="foreign-coin">10,000 YEN</div>

            <div className="vnd-coin">2,103,317 VND</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssetBoxComponent;
