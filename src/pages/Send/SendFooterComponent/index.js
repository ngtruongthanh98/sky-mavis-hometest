import React, { useState } from 'react';
import NormalButton from '../../../components/NormalButton';
import CustomPopup from '../../../components/CustomPopup';
import './styles.scss';

const SendFooterComponent = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClickSend = () => {
    setShowModal(true);
  };

  return (
    <>
      <CustomPopup
        show={showModal}
        isCustomHeader
        customHeader={<div className="title">Successfully sent</div>}
        contentClassName="content-success-popup"
        customFooter={<NormalButton buttonName="OK" onClick={() => setShowModal(false)} />}
        customPopupClassName="popup-success"
      >
        <div className="text">
          Your <span className="bold">EUR</span> has been sent!
        </div>
        <div className="text">Thank you for using our service</div>
      </CustomPopup>

      <div className="send-footer-component">
        <NormalButton buttonName="Cancel" isWhite />

        <NormalButton buttonName="Send" onClick={handleClickSend} />
      </div>
    </>
  );
};

export default SendFooterComponent;
