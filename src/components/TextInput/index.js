import React, { useState } from 'react';
import PropTypes from 'prop-types';
import eyeIcon from '../../assets/eye-icon.svg';
import eyeSlashIcon from '../../assets/eye-slash-icon.svg';
import './styles.css';

const TextInput = (props) => {
  const [inputType, setInputType] = useState('text');

  const onChange = (e) => {
    const { value } = e.target;
    props.onChange(props.name, value);
  };

  const onClick = () => {
    if (inputType === 'text') {
      setInputType('password');
    } else {
      setInputType('text');
    }
  };

  return (
    <div className="custom-text-input">
      <div className="title-box">
        <div className="title-left">{props.titleLeft}</div>
        {props.titleRight && <div className="title-right">{props.titleRight}</div>}
      </div>

      <div className="input-box">
        <input
          className="custom-input"
          type={inputType}
          value={props.value}
          name={props.name}
          onChange={onChange}
        />

        {!!props.value && props.isPasswordInput && (
          <div className="eye-icon" onClick={onClick}>
            {inputType === 'text' ? (
              <img src={eyeIcon} alt="Eye Icon"></img>
            ) : (
              <img src={eyeSlashIcon} alt="Eye Slash Icon"></img>
            )}
          </div>
        )}

        {!!props.leftElement && <div className="left-element">{props.leftElement}</div>}

        {!!props.rightElement && <div className="right-element">{props.rightElement}</div>}
      </div>
    </div>
  );
};

TextInput.defaultProps = {
  value: undefined,
  name: '',
  onChange: () => {},
  titleLeft: 'enter password',
  titleRight: 'available: 50 EUR',
  isPasswordInput: true,
  rightElement: null,
  leftElement: null,
};

TextInput.propTypes = {
  value: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  titleLeft: PropTypes.string,
  titleRight: PropTypes.string,
  isPasswordInput: PropTypes.bool,
  rightElement: PropTypes.element,
  leftElement: PropTypes.element,
};

export default TextInput;
