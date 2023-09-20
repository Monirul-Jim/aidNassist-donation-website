import Providers from '@/providers';
import React from 'react';
import DashboardSidebar from './DashboardSidebar/DashboardSidebar';

export const metadata = {
    title: 'Dashboard',
    description: 'By Matrix Coders Unity',
}




const DashboardLayout = ({ children }) => {
    return (
        <div>
            <Providers>
                {/* <DashboardSidebar />
                <div>
                    {children}
                </div> */}
                <div className="lg:flex md:mt-[86px] lg:mt-[86px] mb-1">
                    <div className="lg:w-[13%] w-[100%]"><DashboardSidebar /></div>
                    <div className="md:p-10 lg:p-10 px-3 lg:w-[100%]">{children}</div>
                </div>
            </Providers>
        </div>
    );
};

export default DashboardLayout;