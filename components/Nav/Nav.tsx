import Link from 'next/link';
import React from 'react';

interface NavProps {}

export const Nav: React.FC<NavProps> = ({}) => {
  return (
    <nav className="navbar bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <Link href="/" className="navbar-brand mb-0 h1">
            Navbar
          </Link>
        </a>
      </div>
    </nav>
  );
};
