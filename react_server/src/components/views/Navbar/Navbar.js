import { Menu, Button } from 'antd';
import React from 'react';
import './Navbar.css';

import { MenuOutlined } from '@ant-design/icons';
import RightMenu from './Sections/RightMenu';
import reactRogo from './Sections/logo192.png';

function Navbar() {
  return (
    <nav className='nav_menu'>
      <div className='nav_menu_home'>
        <a href='/' style={{ color: 'rgb(4, 135, 175)' }}>
          FTclone
          {/* <img
            style={{ width: '40px', height: '40px' }}
            src={reactRogo}
            alt='react_logo'
          /> */}
        </a>
      </div>
      <RightMenu />
    </nav>
  );
}

export default Navbar;
