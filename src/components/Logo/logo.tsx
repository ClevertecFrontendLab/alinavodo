import React from 'react';

import Log from './Logo.svg';
import './Logo.css';

export const Logo: React.FC = () => {
    return (
        <div className="logo">
            <div>
                <img src={Log}></img>
            </div>
        </div>
    )
}

