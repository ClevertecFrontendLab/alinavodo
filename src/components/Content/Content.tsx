import React from 'react';

import './Content.css';

import { Layout, Typography, Card, Col, Row } from 'antd';
import { CalendarTwoTone, HeartFilled, IdcardOutlined } from '@ant-design/icons';

const { Content } = Layout;

export const ContentMain: React.FC = () => {
    return (
        <Content style={{maxWidth: '772px', margin: '24px' }}>
            <Typography.Title
                level={5}
                style={{color: 'rgb(6, 17, 120)',
                        padding: '24px',
                        background: 'rgb(255, 255, 255)'
                    }}
            >
                      С CleverFit ты сможешь: <br/>
                — планировать свои тренировки на календаре, выбирая тип и уровень нагрузки;
                <br/>— отслеживать свои достижения в разделе статистики, сравнивая свои результаты с нормами и рекордами;
                <br/>— создавать свой профиль, где ты можешь загружать свои фото, видео и отзывы о тренировках;
                <br/>— выполнять расписанные тренировки для разных частей тела, следуя подробным инструкциям и советам профессиональных тренеров.

                </Typography.Title>
                <Typography.Title
                    level={4}
                    style={{
                    fontFamily:'Inter',
                    fontWeight: '500',
                    padding:'24px',
                    background: 'rgb(255, 255, 255)',
                    lineHeight: '130%',
                    color:'rgb(38, 38, 38)',
                    marginBottom: '16px',
                    fontSize: '20px',
                    }}
                >
                CleverFit — это не просто приложение, а твой личный помощник в мире фитнеса. Не откладывай на завтра — начни тренироваться уже сегодня!
                </Typography.Title>
                    <Row gutter={16}>
                    <Col span={8}>
                        <Card title="Расписать тренировки"
                              style={{maxWidth: '240px',
                                      boxShadow: 'inset 0px 1px 0px 0px rgb(240, 240, 240)',
                                      minHeight: '101px',
                              }}>
                        <HeartFilled />Тренировки
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card title="Назначить календарь"
                              style={{maxWidth: '240px',
                                      boxShadow: 'inset 0px 1px 0px 0px rgb(240, 240, 240)',
                                      minHeight: '101px',
                              }}>
                        <CalendarTwoTone />Календарь
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card title="Заполнить профиль"
                                style={{maxWidth: '240px',
                                      boxShadow: 'inset 0px 1px 0px 0px rgb(240, 240, 240)',
                                      minHeight: '101px',
                              }}>
                        <IdcardOutlined />Профиль
                        </Card>
                    </Col>
                    </Row>
        </Content>
    )
}
