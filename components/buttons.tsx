'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Loader2 } from 'lucide-react';
import { signIn, signOut, useSession } from 'next-auth/react';

import { cn } from '@/lib/utils';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { Icons } from '@/components/icons';

import { Button } from './ui/button';

export function SignInButton() {
    const { data: session, status } = useSession();
    console.log(session, status);

    if (status === 'loading') {
        return (
            <Button variant="outline">
                <Loader2 className=" h-4 w-4 animate-spin" />
            </Button>
        );
    }

    if (status === 'authenticated') {
        return (
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>
                            <Icons.user className="h-6 w-6" />
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid gap-3 p-6 md:w-[300px] lg:w-[400px] lg:grid-cols-[.75fr_1fr]">
                                <li className="row-span-3">
                                    <NavigationMenuItem asChild>
                                        <div className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md">
                                            <Icons.user className="h-6 w-6" />
                                            <div className="mb-2 mt-4 text-lg font-medium">
                                                Welcome,{' '}
                                                {
                                                    session?.user?.name?.split(
                                                        ' '
                                                    )[0]
                                                }
                                                .
                                            </div>
                                        </div>
                                    </NavigationMenuItem>
                                </li>
                                <ListItem
                                    href="/user/dashboard"
                                    title="Your Dashboard"
                                >
                                    Change your desired technologies and more.
                                </ListItem>
                                <ListItem
                                    href="/"
                                    title="Log out"
                                    onClick={() => signOut()}
                                >
                                    Finish your session and log out.
                                </ListItem>
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        );
    }

    return (
        <Link href="/auth/signin">
            <Button variant="outline" className="text-black dark:text-white">
                Sign in
            </Button>
        </Link>
    );
}

export function SignOutButton() {
    return (
        <Button
            variant="outline"
            className="text-black dark:text-white"
            onClick={() => signOut()}
        >
            Sign out
        </Button>
    );
}

// eslint-disable-next-line react/display-name
const ListItem = React.forwardRef<
    React.ElementRef<'a'>,
    React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild className="w-[200px] ">
                <a
                    ref={ref}
                    className={cn(
                        'block w-24 select-none space-y-1 rounded-md p-3  leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">
                        {title}
                    </div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    );
});

{
    /* <ul className=' w-[200px] '>
<NavigationMenuLink>
    <ListItem href="/users/dashboard" title="Profile Dashboard">
       
        Change your technology preferences and more.
    </ListItem>
    <Link href={`/user/dashboard`}>Dashboard</Link>
</NavigationMenuLink>
<NavigationMenuLink>
    <ListItem onClick={() => signOut()} className='flex cursor-pointer items-center justify-center'>
        Sign out
    </ListItem>
</NavigationMenuLink>
</ul> */
}
