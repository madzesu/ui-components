import React from 'react';
import NavLink from '../NavLink';
import { ROUTES } from '../../utils/constants';

const Navbar = () => {
  return (
    <div>
      <NavLink to={ROUTES.INDEX}>index</NavLink>
      <NavLink to={ROUTES.DEMO}>demo</NavLink>
    </div>
  );
};

export default Navbar;
