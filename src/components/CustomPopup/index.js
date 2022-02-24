import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import CloseIcon from './assets/close-icon.svg';
import './styles.scss';
const CustomPopup = (props) => {
  const [show, setShow] = useState(false);

  const closeHandler = (e) => {
    setShow(false);
    props.onClose(false);
  };

  useEffect(() => {
    setShow(props.show);
  }, [props.show]);

  return (
    <div
      style={{
        visibility: show ? 'visible' : 'hidden',
        opacity: show ? '1' : '0',
      }}
      className="overlay"
    >
      <div className="popup">
        <div className="header">
          <div className="title">{props.title}</div>
          <span className="close-btn" onClick={closeHandler}>
            <img src={CloseIcon} alt="Close" />
          </span>
        </div>
        <div className="content">{props.children}</div>
      </div>
    </div>
  );
};

CustomPopup.propTypes = {
  title: PropTypes.string.isRequired,
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
export default CustomPopup;
