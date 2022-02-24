import React, { useState, useCallback } from 'react';
import TextInput from '../../components/TextInput';
import NormalButton from '../../components/NormalButton';

import LogoIcon from '../../assets/ronin-fullcolor.svg';
import './styles.scss';

const LoginPage = () => {
  const [password, setPassword] = useState('');

  const onChange = useCallback((name, value) => {
    setPassword(value);
  }, []);

  const onClick = useCallback(() => {
    console.log('Helloooooo');
  }, []);

  return (
    <div className="custom-page">
      <div className="login-page">
        <img className="logo" src={LogoIcon} alt="Logo" />

        <div className="title-1">Ronin Wallet</div>
        <div className="title-2">Your Digital Passport</div>

        <TextInput
          value={password}
          name={password}
          onChange={onChange}
          titleLeft="enter password"
          placeholder="Enter your password"
        />

        <NormalButton className="unlock-btn" buttonName="Unlock" onClick={onClick} />
      </div>
    </div>
  );
};

export default LoginPage;
