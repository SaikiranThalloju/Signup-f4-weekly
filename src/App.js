import React, { useState } from 'react';

const App = () => {
  const [details, setDetails] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(false);
  const [isValidConfirmPassword, setIsValidConfirmPassword] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDetails({ ...details, [name]: value });

    if (name === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setIsValidEmail(emailRegex.test(value));
    }

    if (name === 'password') {
      setIsValidPassword(value.length >= 8);
    }


    if (name === 'confirmPassword') {
      setIsValidConfirmPassword(value === details.password);
    }
  };

  const handleSubmit = () => {
    if (isValidEmail && isValidPassword && isValidConfirmPassword) {
      alert('Form Submitted Successfully');
    } else {
      alert('Form Cannot be Submitted');
    }
  };

  return (
    <div className='signup'>
      <h3>Email</h3>
      <input
        type='email'
        name='email'
        placeholder='Enter your Email'
        value={details.email}
        onChange={handleInputChange}
        style={{ border: isValidEmail ? '2px solid green' : '2px solid red' }}
      />
      {!isValidEmail && <p style={{ color: 'red' }}>Enter a valid email address</p>}

      <h3>Password</h3>
      <input
        type='password'
        name='password'
        placeholder='Password'
        value={details.password}
        onChange={handleInputChange}
        style={{ border: isValidPassword ? '2px solid green' : '2px solid red' }}
      />
      {!isValidPassword && <p style={{ color: 'red' }}>Password must be at least 8 characters</p>}

      <h3>Confirm Pasword</h3>
      <input
        type='password'
        name='confirmPassword'
        placeholder='Confirm Password'
        value={details.confirmPassword}
        onChange={handleInputChange}
        style={{
          border: isValidConfirmPassword ? '2px solid green' : '2px solid red',
        }}
      />
      {!isValidConfirmPassword && (
        <p style={{ color: 'red' }}>Passwords do not match</p>
      )}

      <button onClick={handleSubmit}>Sign Up</button>
    </div>
  );
};

export default App;
