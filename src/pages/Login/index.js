import React, { useState, useCallback } from 'react';
import TextInput from '../../components/TextInput';
import './styles.css';

const LoginPage = () => {
  const [password, setPassword] = useState('');

  const onChange = useCallback((name, value) => {
    setPassword(value);
  }, []);

  return (
    <div className="custom-page">
      <div className="login-page">
        <TextInput value={password} name={password} onChange={onChange} />

        {password}
      </div>
    </div>
  );
};

export default LoginPage;
