'use client';

import { Button } from './ui/button';

const SidebarMenu = () => {
    return (
        <div className=" items-left bg-background fixed z-10 col-span-1 flex h-[100vh] w-[100px] flex-col border-r pt-10 text-transparent transition-all delay-200 hover:w-[300px] hover:text-black dark:hover:text-white">
            <Button
                variant="ghost"
                className="mx-3 justify-start px-3 text-black dark:text-white "
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
