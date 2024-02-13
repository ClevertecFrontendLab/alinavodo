import React, { useState, useEffect }  from 'react';

import 'antd/dist/antd.css'
import './SiderMenu.css';

import { Logo } from '@components/Logo/logo';
import { LogoCollapsed } from '@components/LogoCollapsed/LogoCollapsed';
import { BtnExit } from '@components/BtnExit/BtnExit';

import { Menu, Button, Layout } from 'antd';
import { CalendarTwoTone,HeartFilled, TrophyFilled, IdcardOutlined, MenuUnfoldOutlined, MenuFoldOutlined} from '@ant-design/icons';

import {setTwoToneColor } from '@ant-design/icons';

const { Sider } = Layout;


import Exit from '../BtnExit/Exit.svg'

//  interface SiderMenuProps  {
//     windowWidth: number,
//     // paginate: (arg: number) => void
// }


export const SiderMenu: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [windowWidth, setWindowWidth] = useState<number>(1440);
    const resizeHandler = () => {
        setWindowWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener('resize', resizeHandler);
        return () => {
            window.removeEventListener('resize', resizeHandler);
        };
    }, []);

    setTwoToneColor('rgb(6, 17, 120)');


    return (
        <Sider style={{ zIndex: `${windowWidth > 576 ? '0' : '1'}`, position: `${windowWidth > 360 ? 'relative' : 'fixed'}` }}
               theme='light'
               collapsed ={collapsed}
               collapsible
               width={windowWidth > 576 ? 208 : 106}
               trigger={null}
               collapsedWidth={windowWidth > 576 ? 64 : 0}

        >
            <div style={{position: 'absolute', top: '50%', left: '97%', zIndex: '2', width: '22px', height:'66px', clipPath:' polygon(10% 10%, 100% 29.68%, 100% 63.31%, 10% 90%)'}}>
                <Button type="text"
                        onClick={() => setCollapsed(!collapsed)}
                        icon={collapsed ? <MenuUnfoldOutlined style={{color: 'rgb(140, 140, 140))', background: 'rgb(255, 255, 255)', width: '20px', height: '66px', zIndex: '5' }}/> :
                        <MenuFoldOutlined style={{color: 'rgb(140, 140, 140))', background: 'rgb(255, 255, 255)',  width: '20px', height: '66px'}}/>}
                />
            </div>
            <div style={{width:'100%'}}>
                {collapsed ? <LogoCollapsed/> : <Logo/>}
                <Menu className="menu-bar" >
                    <Menu.Item key="calendar" icon={windowWidth > 576 ? <CalendarTwoTone style={{color: 'rgb(6, 17, 120)', fill: 'rgb(6, 17, 120)'}}/>: ''}>Календарь</Menu.Item>
                    <Menu.Item key="heart" icon={windowWidth > 576 ? <HeartFilled style={{color: 'rgb(6, 17, 120)'}} /> : ''}>Тренировки</Menu.Item>
                    <Menu.Item key="trophy" icon={windowWidth > 576 ? <TrophyFilled style={{color: 'rgb(6, 17, 120)'}} /> : ''}>Достижения</Menu.Item>
                    <Menu.Item key="card" icon={windowWidth > 576 ? <IdcardOutlined style={{color: 'rgb(6, 17, 120)'}} /> : ''}>Профиль</Menu.Item>
                </Menu>
            </div>
            {/* <BtnExit windowWidth={windowWidth}/> */}
            <Menu>
            <Menu.Item key="exit"
        icon={windowWidth > 576 ? <img src={Exit} width='16px'></img> : '' }
            // icon={<img src={Exit} width='16px'></img> }
            style={{display: 'flex', justifyContent: 'start', gap: '17px' }}

            >   Выход
            </Menu.Item>
       </Menu>
      </Sider>
    )
}


