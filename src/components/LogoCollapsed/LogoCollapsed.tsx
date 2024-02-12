import React from 'react';

import Log from './logo_collapsed.svg';
import '../Logo/logo.css';

export const LogoCollapsed: React.FC = () => {
    return (
        <div className="logo">
            <div>
                <img src={Log}></img>
            </div>
        </div>
    )
}

