import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { TextInput, Container, Text, Button } from '@mantine/core';

export default function Join() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const login = async () => {
    try {
      const { data } = await axios.post('auth/sign_up', {
        email,
        password,
        name,
        phone: `+91${phone}`,
        confirmPassword,
      });

      axios.defaults.headers.common.Authorization = `Bearer ${data.token}`;

      localStorage.setItem('token', data.token);
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <Container
      className='f f-c jc-b ai-c'
      style={{
        height: '50vh',
        width: '70vw',
      }}
    >
      <Text size='xl' weight={700}>
        Join Us!
      </Text>
      <TextInput
        placeholder='Name'
        required
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <TextInput
        placeholder='Phone'
        type='tel'
        required
        onChange={(e) => {
          setPhone(e.target.value);
        }}
      />
      <TextInput
        placeholder='Email Address'
        type='email'
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
      <TextInput
        placeholder='Password Confirm'
        type='password'
        required
        onChange={(e) => {
          setConfirmPassword(e.target.value);
        }}
      />
      <Button
        variant='gradient'
        gradient={{ from: 'indigo', to: 'cyan' }}
        onClick={login}
      >
        Sign Up
      </Button>
    </Container>
  );
}
