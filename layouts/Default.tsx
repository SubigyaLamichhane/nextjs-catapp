import React from 'react';
import { Nav } from '../components/Nav/Nav';

interface DefaultProps {
  children?: React.ReactNode;
}

const DefaultLayout: React.FC<DefaultProps> = ({ children }) => {
  return (
    <div>
      <Nav />
      <main>{children}</main>
    </div>
  );
};

export default DefaultLayout;
