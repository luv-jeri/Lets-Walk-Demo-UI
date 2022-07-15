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

  const [obj, setObj] = useState({});

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

  const click = (para) => {
    //` 't-3'
    setObj({
      [para]: obj[para] ? false : true,
    }); //`  {t-3: true}
  };
  const val = '';

  const object = {
    name: 'Mantine',
    [val]: 22,
  };

  const property = 'name';
  console.log(object.name);
  console.log(object[property]);

  return (
    <Container>
      <Button
        onClick={() => {
          click('t_1');
        }}
      >
        T-1
      </Button>
      <Button
        onClick={() => {
          click('t_2');
        }}
      >
        T-2
      </Button>
      <Button
        onClick={() => {
          click('t_3');
        }}
      >
        T-3
      </Button>
      <Button
        onClick={() => {
          click('t_4');
        }}
      >
        T-4
      </Button>
      <Button
        onClick={() => {
          click('t_5');
        }}
      >
        T-5
      </Button>

      <div>
        {obj.t_1 ? <Paper>T-1</Paper> : null}
        {obj.t_2 ? <Paper>T-2</Paper> : null}
        {obj.t_3 ? <Paper>T-3</Paper> : null}
        {obj.t_4 ? <Paper>T-4</Paper> : null}
        {obj.t_5 ? <Paper>T-5</Paper> : null}
      </div>
    </Container>
  );
}

export default App;

//  return <>{check ? <Application /> : <Auth />}</>;
