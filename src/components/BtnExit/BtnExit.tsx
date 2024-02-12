import React from 'react';

import Exit from './Exit.svg';

import {Menu} from 'antd';


export const BtnExit: React.FC = (windowWidth) => {
    windowWidth as Number;
    return (
        <>
       <Menu>
            <Menu.Item key="exit"
        icon={<img src={Exit} width='16px'></img> }
            // icon={<img src={Exit} width='16px'></img> }
            style={{display: 'flex', justifyContent: 'start', gap: '17px' }}

            >   Выход
            </Menu.Item>
       </Menu>
        </>
    )
}
