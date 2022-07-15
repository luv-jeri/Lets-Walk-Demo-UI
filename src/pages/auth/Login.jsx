import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { TextInput, Container, Text, Button } from '@mantine/core';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = async () => {
    try {
      const { data } = await axios.post('auth/sign_in', {
        email,
        password,
      });

      axios.defaults.headers.common.Authorization = `Bearer ${data.token}`;

      localStorage.setItem('token', data.token);

      console.log(data);
    } catch (e) {
      console.log(e.message);
    }
  };

  const getTours = async () => {
    try {
      const { data } = await axios.get('tours');
      console.log(data);
    } catch (e) {
      console.log(e.response.data);
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    axios.defaults.headers.common.Authorization = null;
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
      <Button
        variant='gradient'
        gradient={{ from: 'indigo', to: 'cyan' }}
        onClick={logout}
      >
        Logout
      </Button>
    </Container>
  );
}
