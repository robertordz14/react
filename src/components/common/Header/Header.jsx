import React from 'react';
import NavItem from '../NavItem/NavItem';
import { viewsEnum } from '../../../utils/constants';
import logo from '../../../assets/images/arkus_logo.png';
import './Header.css';

const items = [
  { title: 'Home', id: viewsEnum.LANDING, path: '/', exact: true },
  { title: 'Exercises', id: viewsEnum.EXCERCISES, path: '/exercises', exact: false },
];

const Header = (props) => (
  <header className="Header">
    <div className="Header-logo">
      <img className="logo" src="https://media-exp1.licdn.com/dms/image/C560BAQFjx9BEvafBEw/company-logo_200_200/0/1593613798582?e=2159024400&v=beta&t=du8UP2U5UHUBq84RjJZb2LDAWKQzCL_rKO535WUlY6M" alt="" />
    </div>

    {items.map(item => (
      <NavItem
        exact={item.exact}
        key={item.title}
        path={item.path}
        title={item.title}
      />
    ))}
  </header>
);

export default Header;