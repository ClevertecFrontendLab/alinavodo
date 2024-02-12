import React from 'react';

import './MenuList.css';

import {Menu} from 'antd';
import {CalendarTwoTone,HeartFilled, TrophyFilled, IdcardOutlined } from '@ant-design/icons';

import {setTwoToneColor } from '@ant-design/icons';

export const MenuList: React.FC = () => {
    setTwoToneColor('rgb(6, 17, 120)');
    return (
        <Menu className="menu-bar" >
            <Menu.Item key="calendar" icon={<CalendarTwoTone  style={{color: 'rgb(6, 17, 120)', fill: 'rgb(6, 17, 120)'}} />}>Календарь</Menu.Item>
            <Menu.Item key="heart" icon={<HeartFilled style={{color: 'rgb(6, 17, 120)'}} />}>Тренировки</Menu.Item>
            <Menu.Item key="trophy" icon={<TrophyFilled style={{color: 'rgb(6, 17, 120)'}} />}>Достижения</Menu.Item>
            <Menu.Item key="card" icon={<IdcardOutlined style={{color: 'rgb(6, 17, 120)'}} />}>Профиль</Menu.Item>
       </Menu>
    )
}
