import React, { useState } from 'react';
import TextInput from '../../../components/TextInput';
import StackIcon from '../assets/stack-icon.svg';
import USD_COIN from '../../Main/AssetBoxComponent/assets/USD-1.png';
import EUR_COIN from '../../Main/AssetBoxComponent/assets/EUR-1.png';
import YEN_COIN from '../../Main/AssetBoxComponent/assets/YEN-1.png';
import CustomPopup from '../../../components/CustomPopup';
import './styles.scss';

const SendBodyComponent = () => {
  const [showModal, setShowModal] = useState(false);

  const popupCloseHandler = () => {
    setShowModal(false);
  };

  const handleClickAssets = () => {
    setShowModal(true);
  };

  const renderAssetsModal = () => {
    return (
      <div className="asset-box-component">
        <div className="currency-box-list">
          <div className="currency-box-element">
            <img className="currency-icon" src={USD_COIN} alt="USD" />

            <div className="currency-value-box">
              <div className="foreign-coin">1,000 USD</div>

              <div className="vnd-coin">23,046,000 VND</div>
            </div>
          </div>

          <div className="currency-box-element">
            <img className="currency-icon" src={EUR_COIN} alt="EUR" />

            <div className="currency-value-box">
              <div className="foreign-coin">50 EUR</div>

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

  return (
    <React.Fragment>
      <CustomPopup onClose={popupCloseHandler} show={showModal} title="Assets">
        {renderAssetsModal()}
      </CustomPopup>

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
          rightElement={
            <img src={StackIcon} alt="Asset" onClick={handleClickAssets} aria-hidden="true" />
          }
          isDisabled
          className="asset"
        />

        <TextInput
          titleLeft="Amount"
          titleRight="available: 50 EUR"
          rightElement={<div className="text-component">MAX</div>}
        />
      </div>
    </React.Fragment>
  );
};

export default SendBodyComponent;
