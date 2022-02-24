import React, { useState } from 'react';
import TextInput from '../../../components/TextInput';
import StackIcon from '../assets/stack-icon.svg';
import EUR_COIN from '../../Main/AssetBoxComponent/assets/EUR-24.png';
import CustomPopup from '../../../components/CustomPopup';
import AssetBoxComponent from '../../Main/AssetBoxComponent';
import './styles.scss';

const SendBodyComponent = () => {
  const [showModal, setShowModal] = useState(false);

  const popupCloseHandler = () => {
    setShowModal(false);
  };

  const handleClickAssets = () => {
    setShowModal(true);
  };

  return (
    <React.Fragment>
      <CustomPopup onClose={popupCloseHandler} show={showModal} title="Assets">
        {/* <h1>Hello This is Popup Content Area</h1>
        <h2>This is my lorem ipsum text here!</h2> */}

        <AssetBoxComponent />
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
