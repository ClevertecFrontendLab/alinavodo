import React from 'react';

import { SiderMenu } from '@components/SiderMenu/SiderMenu';
import { HeaderMain } from '@components/Header/Header';
import { ContentMain } from '@components/Content/Content';
import { Layout } from 'antd';


export const MainPageLayouts: React.FC = () => {

    return (
        <Layout>
            <SiderMenu />
            <Layout>
                <HeaderMain/>
                <ContentMain/>
            </Layout>
        </Layout>
    );
};
