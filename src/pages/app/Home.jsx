import useAuth from '../../context/Auth.context';

import { Button } from '@mantine/core';

export default function Home() {
  const { logout } = useAuth();
  return (
    <div>
      <Button onClick={logout}>Logout</Button>
    </div>
  );
}
