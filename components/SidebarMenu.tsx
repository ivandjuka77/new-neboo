'use client';

import { useEffect } from 'react';

import { Button } from './ui/button';

const SidebarMenu = () => {
    return (
        <div className=" items-left  col-span-1 flex h-[calc(100vh-72px)] w-[100px] flex-col  border-r pt-10 text-transparent transition-all delay-200 hover:w-[300px] hover:text-white">
            <Button
                variant="ghost"
                className="mx-3 justify-start px-3 text-white"
            >
                Jobs
            </Button>
            <Button
                variant="ghost"
                className="mx-3 justify-start px-3 "
                disabled
            >
                Contacts
            </Button>
        </div>
    );
};
export default SidebarMenu;
