import React from 'react';
import { Button, Menu } from 'antd';
import './Header.css';

const Header: React.FC = () => {
  return (
    <div className="header">
      <div className="logo">Logo</div>
      <Menu mode="horizontal" className="nav-menu">
        <Menu.Item key="home">Ana Sayfa</Menu.Item>
        <Menu.Item key="academy">Akademi</Menu.Item>
        <Menu.Item key="services">Hizmetler</Menu.Item>
        <Menu.Item key="contact">İletişim</Menu.Item>
      </Menu>
      <div className="auth-buttons">
        <Button type="primary">Giriş Yap</Button>
        <Button type="default">Hemen Dene</Button>
      </div>
    </div>
  );
};

export default Header;
