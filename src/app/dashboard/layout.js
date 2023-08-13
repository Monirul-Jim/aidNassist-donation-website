import React from 'react';

const DashboardLayout = ({children}) => {
    return (
        <div>
            <h1>This is dashboard sidebar</h1>
            {children}
        </div>
    );
};

export default DashboardLayout;