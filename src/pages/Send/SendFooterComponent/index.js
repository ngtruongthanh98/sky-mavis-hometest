import React from 'react';
import NormalButton from '../../../components/NormalButton';
import './styles.scss';

const SendFooterComponent = () => {
  return (
    <div className="send-footer-component">
      <NormalButton buttonName="Cancel" isWhite />

      <NormalButton buttonName="Send" />
    </div>
  );
};

export default SendFooterComponent;
