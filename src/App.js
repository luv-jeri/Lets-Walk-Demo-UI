import Auth from './pages/auth/index';
import Application from './pages/app/index';
import { useState, useEffect } from 'react';
import { Button, Container, Paper } from '@mantine/core';

function App() {
  const [token, setToken] = useState(null);

  const [t_1, setT_1] = useState(false);
  const [t_2, setT_2] = useState(false);
  const [t_3, setT_3] = useState(false);
  const [t_4, setT_4] = useState(false);
  const [t_5, setT_5] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setToken(token);
    }
  }, []);

  const falser = () => {
    setT_1(false);
    setT_2(false);
    setT_3(false);
    setT_4(false);
    setT_5(false);
  };

  return (
    <Container>
      <Button
        onClick={() => {
          falser();
          setT_1(!t_1);
        }}
      >
        T-1
      </Button>
      <Button
        onClick={() => {
          falser();
          setT_2(!t_2);
        }}
      >
        T-2
      </Button>
      <Button
        onClick={() => {
          falser();
          setT_3(!t_3);
        }}
      >
        T-3
      </Button>
      <Button
        onClick={() => {
          falser();
          setT_4(!t_4);
        }}
      >
        T-4
      </Button>
      <Button
        onClick={() => {
          falser();
          setT_5(!t_5);
        }}
      >
        T-5
      </Button>

      <div>
        {t_1 ? <Paper>T-1</Paper> : null}
        {t_2 ? <Paper>T-2</Paper> : null}
        {t_3 ? <Paper>T-3</Paper> : null}
        {t_4 ? <Paper>T-4</Paper> : null}
        {t_5 ? <Paper>T-5</Paper> : null}
      </div>
    </Container>
  );
}

export default App;

//  return <>{check ? <Application /> : <Auth />}</>;
