'use client';

import React from 'react';
import { CircleIcon, StarIcon } from '@radix-ui/react-icons';
import { ExternalLink } from 'lucide-react';
import ReactPlayer from 'react-player';

import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const MainPage = () => {
    return (
        <main className="text-center">
            <h1 className="mt-20 text-3xl font-bold leading-tight tracking-tighter text-black dark:text-white md:block md:text-5xl lg:leading-[1.1]">
                Strategize your job search with Neboo
            </h1>
            <p className="mt-5 text-lg font-semibold tracking-tight text-gray-500 md:text-xl">
                Your one-stop shop for getting your dream job.
            </p>

            <Card className="mt-16 flex items-center justify-around border-none p-8">
                <CardHeader className="text-left ">
                    <CardTitle className=" text-xl font-bold leading-tight tracking-tighter md:block md:text-3xl lg:leading-[1.1]">
                        Job Search
                    </CardTitle>
                    <CardDescription className="mt-5 text-lg font-semibold tracking-tight text-gray-500 md:text-xl">
                        Look through 1000s of job listings tailored to you.{' '}
                        <br /> Use the search filter to hunt for the exact job{' '}
                        <br />
                        you want and add it to your board.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <ReactPlayer
                        playing={true}
                        volume={0}
                        loop={true}
                        className="react-player"
                        url="https://i.imgur.com/m41oKH9.mp4"
                    />
                </CardContent>
            </Card>
            <Card className="mt-16 flex items-center justify-around border-none p-8">
                <CardContent>
                    <ReactPlayer
                        playing={true}
                        volume={0}
                        loop={true}
                        className="react-player"
                        url="https://i.imgur.com/zAJXpeH.mp4"
                    />
                </CardContent>
                <CardHeader className="text-left ">
                    <CardTitle className=" text-xl font-bold leading-tight tracking-tighter md:block md:text-3xl lg:leading-[1.1]">
                        Contacts List
                    </CardTitle>
                    <CardDescription className="mt-5 text-lg font-semibold tracking-tight text-gray-500 md:text-xl">
                        Add your contacts to your board and use them in your{' '}
                        <br />
                        board to keep track of your job search. You can add your{' '}
                        <br />
                        contacts manually or import with a LinkedIn URL.
                    </CardDescription>
                </CardHeader>
            </Card>
            <Card className="mt-16 flex items-center justify-around border-none p-8">
                <CardHeader className="text-left ">
                    <CardTitle className=" text-xl font-bold leading-tight tracking-tighter md:block md:text-3xl lg:leading-[1.1]">
                        My Board
                    </CardTitle>
                    <CardDescription className="mt-5 text-lg font-semibold tracking-tight text-gray-500 md:text-xl">
                        Keep track of your job search with your kanban-style
                        board. <br />
                        Assign contacts to jobs and keep track of your progress
                        - <br />
                        All job details are automatically added to your board.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <ReactPlayer
                        playing={true}
                        volume={0}
                        loop={true}
                        className="react-player"
                        url="https://i.imgur.com/RoMB3J2.mp4"
                    />
                </CardContent>
            </Card>
            <h1 className="mt-20 text-3xl font-bold leading-tight tracking-tighter text-black dark:text-white md:block md:text-5xl lg:leading-[1.1]">
                Check out the source code
            </h1>
            <p className="mt-5 text-lg font-semibold tracking-tight text-gray-500 md:text-xl">
                Check out the source code on GitHub and give it a star if you
                like it!
            </p>
            <div className="mt-10 flex items-center justify-center">
                <Card className="mb-16 w-[500px] ">
                    <CardHeader className="grid grid-cols-[1fr_110px] items-start gap-4 space-y-0">
                        <div className="space-y-1">
                            <CardTitle>ivandjuka77/neboo</CardTitle>
                            <CardDescription>
                                Kanban based job search application <br /> built
                                with Next.js and TailwindCSS
                            </CardDescription>
                        </div>
                        <a
                            href="https://github.com/ivandjuka77/new-neboo"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div className="bg-secondary text-secondary-foreground flex items-center justify-center space-x-1 rounded-md">
                                <Button
                                    variant="secondary"
                                    className="px-3 shadow-none"
                                >
                                    <StarIcon className="mr-2 h-4 w-4" />
                                    Star
                                </Button>
                                <Separator
                                    orientation="vertical"
                                    className="h-[20px]"
                                />
                                <ExternalLink className="scale-75 " />
                            </div>
                        </a>
                    </CardHeader>
                    <CardContent>
                        <div className="text-muted-foreground flex space-x-4 text-sm">
                            <div className="flex items-center">
                                <CircleIcon className="mr-1 h-3 w-3 fill-sky-400 text-sky-400" />
                                TypeScript
                            </div>
                            <div className="flex items-center">
                                <StarIcon className="mr-1 h-3 w-3" />1
                            </div>
                            <div>Updated August 2023</div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </main>
    );
};
export default MainPage;
