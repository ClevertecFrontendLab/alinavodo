import React from 'react';

import { Layout, Typography } from 'antd';


const { Header } = Layout;
const { Text, Paragraph } = Typography;

import { SettingOutlined } from '@ant-design/icons';


export const HeaderMain: React.FC = () => {
    return (
        <>
       <Header style={{background: 'rgb(240, 245, 255)', minHeight: '169px', padding: '16px 24px' }}>
            <Text style={{ color: 'rgb(38, 38, 38)',
                         fontSize: '14px',
                         paddingTop: '16px',
                         fontWeight: '400',
                         lineHeight: '130%',
                         letterSpacing: '0%',
                         textAlign: 'left'
                        }}>
                Главная
            </Text>
            <div style={{ marginTop: '14px', display: 'flex', justifyContent: 'space-between'}}>
                        <Typography.Title
                            level={1}
                            style={{
                            color: 'rgb(38, 38, 38)',
                            margin: '0',
                            fontFamily: 'Inter',
                            fontWeight: 700,
                            fontSize: '38px',
                            lineHeight: '130%',
                            letterSpacing: '0%',
                            maxWidth: '900px',
                            textAlign: 'left'
                            }}
                        >
                            Приветствуем тебя в CleverFit — приложении, которое поможет тебе добиться своей мечты!
                        </Typography.Title>
                        <Paragraph
                            style={{
                                marginRight:'17px',
                            }}
                            className='header-setting'
                        ><SettingOutlined
                            style={{
                                marginLeft:'7px',
                                marginRight:'7px',
                            }}
                        />
                        <Text style={{  color: 'rgb(38, 38, 38)',
                                        fontSize: '14px',
                                        paddingTop: '16px',
                                        fontWeight: '400',
                                        lineHeight: '130%',
                                        letterSpacing: '0%',
                                        textAlign: 'left'
                                     }}>
                             Настройки
                        </Text>
                        </Paragraph>
                    </div>
       </Header>
        </>
    )
}
