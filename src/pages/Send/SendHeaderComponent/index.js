import React from 'react';
import IconBack from './assets/go-back-icon.svg';
import './styles.scss';

const SendHeaderComponent = () => {
  return (
    <div className="send-header-component">
      <div className="back-button">
        <img src={IconBack} alt="Back" />
      </div>

      <div className="title">Send Assets</div>
    </div>
  );
};

export default SendHeaderComponent;
