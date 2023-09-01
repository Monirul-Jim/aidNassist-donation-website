import Link from 'next/link';
import React from 'react';

const Blogsidebar = () => {
    return (
        <div className='bg-green-500 text-white p-10 text-2xl h-full rounded-xl '>
            <div><Link href="/blog/vblogs"><span>*</span>    Volanteers</Link></div>
            <div><Link href="/blog/dBlog"><span>*</span>    Donators</Link></div>
        </div>
    );
};

export default Blogsidebar;