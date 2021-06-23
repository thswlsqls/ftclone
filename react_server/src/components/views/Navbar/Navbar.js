import { Menu, Button } from 'antd';
import React from 'react';
import './Navbar.css';

import { MenuOutlined } from '@ant-design/icons';
import RightMenu from './Sections/RightMenu'

function Navbar() {
    return (
        <nav className="nav_menu" >
            <div className="nav_menu_home">
                <a href="/" style={{color:'rgb(4, 135, 175)'}}>Home</a>
            </div>
            <RightMenu/>
        </nav>
    )
}

export default Navbar
