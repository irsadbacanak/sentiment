import React from 'react';
import { Select } from 'antd';
import { LinkedinOutlined,YoutubeOutlined, TwitterOutlined, InstagramOutlined } from '@ant-design/icons';
import './Upperheader.css';

const { Option } = Select;

const Upperheader: React.FC = () => {
  return (
    <div className="upperheader">
      <div className="social-media">
       
                        <a href="#"><TwitterOutlined style={{ fontSize: '24px', color: '#fff' }} /></a>
                        <a href="#"><InstagramOutlined style={{ fontSize: '24px', color: '#fff' }} /></a>
                        <a href="#"><LinkedinOutlined style={{ fontSize: '24px', color: '#fff' }} /></a>
                        <a href="#"><YoutubeOutlined style={{ fontSize: '24px', color: '#fff' }} /></a>

      </div>
      <div className="language-switcher">
        <Select defaultValue="EN" style={{ width: 100 }}>
          <Option value="en">EN</Option>
          <Option value="tr">TR</Option>
        </Select>
      </div>
    </div>
  );
};

export default Upperheader;
