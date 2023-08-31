import Providers from '@/providers';
import React from 'react';
import DashboardSidebar from './DashboardSidebar/DashboardSidebar';

export const metadata = {
    title: 'Dashboard',
    description: 'By Matrix Coders Unity',
  }
  



const DashboardLayout = ({children}) => {
    return (
        <div>
            <Providers>
            <DashboardSidebar/>
            {children}
            </Providers>
        </div>
    );
};

export default DashboardLayout;