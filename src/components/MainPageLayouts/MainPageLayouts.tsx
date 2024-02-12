import React from 'react';

import { SiderMenu } from '@components/SiderMenu/SiderMenu';
import { Layout } from 'antd';


export const MainPageLayouts: React.FC = () => {

    return (
        <Layout>
            <SiderMenu />
        </Layout>
    );
};
