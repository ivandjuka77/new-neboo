'use client';

import { Button } from './ui/button';

const SidebarMenu = () => {
    return (
        <div className=" items-left fixed z-10 col-span-1 flex h-[100vh] w-[100px] flex-col border-r bg-background pt-10 text-transparent transition-all delay-200 hover:w-[300px] dark:hover:text-white hover:text-black">
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
