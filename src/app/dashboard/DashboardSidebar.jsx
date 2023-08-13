import Link from 'next/link';
import React from 'react';

const DashboardSidebar = () => {
    return (
        <div>
            <Link className='block' href={'/dashboard/services'}>Dashboard Services</Link>
            <Link href={'/'}>Home</Link>
        </div>
    );
};

export default DashboardSidebar;