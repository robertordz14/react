import React from 'react';
import NavItem from '../NavItem/NavItem';
import { viewsEnum } from '../../../utils/constants';
import './Header.css';

const items = [
  { title: 'Home', id: viewsEnum.LANDING, path: '/', exact: true },
  { title: 'Exercises', id: viewsEnum.EXCERCISES, path: '/exercises', exact: false },
];

const Header = (props) => (
  <header className="Header">
    <div className="Header-logo">
      <img 
      className="logo" 
      src="https://cutt.ly/qb2eWmI" 
      alt="" />
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