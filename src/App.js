import './App.css';
import { useState } from 'react';
import { TextInput, Container, Text, Button } from '@mantine/core';
import axios from 'axios';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = async () => {
    try {
      const { data } = await axios.post(
        'http://localhost:8000/api/v1/auth/sign_in',
        {
          email,
          password,
        },
        {
          withCredentials: true,
        }
      );

      localStorage.setItem('token', data.token);

      console.log(data);
    } catch (e) {
      console.log(e.message);
    }
  };

  const getTours = async () => {
    try {
      const { data } = await axios.get('http://localhost:8000/api/v1/tours', {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      console.log(data);
    } catch (e) {
      console.log(e.response.data);
    }
  };
  return (
    <Container
      style={{
        height: '30vh',
        width: '50vw',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'stretch',
      }}
    >
      <Text size='xl' weight={700}>
        LOGIN
      </Text>
      <TextInput
        placeholder='Email Address'
        required
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <TextInput
        placeholder='Password'
        type='password'
        required
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <Button
        variant='gradient'
        gradient={{ from: 'indigo', to: 'cyan' }}
        onClick={login}
      >
        Login
      </Button>
      <Button
        variant='gradient'
        gradient={{ from: 'indigo', to: 'cyan' }}
        onClick={getTours}
      >
        GET TOURS
      </Button>
    </Container>
  );
}

export default App;
