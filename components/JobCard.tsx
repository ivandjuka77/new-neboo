'use client';

import { BellRing, Check, ExternalLink, Link } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet';
import { Textarea } from '@/components/ui/textarea';

import ContactCard from './ContactCard';
import DeleteJob from './DeleteJob';
import { JobNotes } from './JobNotes';
import { Checkbox } from './ui/checkbox';

export function JobCard({
    className,
    job,
    ...props
}: CardProps & { job: Job }) {
    return (
        <Sheet>
            <SheetTrigger className="w-10/12">
                <Card className={cn('mt-1 ', className)} {...props}>
                    <CardHeader>
                        <CardTitle className="text-left">{job.title}</CardTitle>
                        <CardDescription>
                            <div className="text-left">{job.companyName}</div>
                        </CardDescription>
                    </CardHeader>
                </Card>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>
                        <div>
                            <a
                                href={job.url}
                                target="_blank"
                                rel="noreferrer"
                                className=" mb-1 flex items-center"
                            >
                                <span className="mr-4 text-4xl tracking-tight">
                                    {job.title}
                                </span>

                                <ExternalLink />
                            </a>
                        </div>

                        <span className="text-2xl tracking-tight text-gray-400 ">
                            {job.companyName}
                        </span>
                    </SheetTitle>
                    <SheetDescription>
                        <div className="mt-5">
                            <span className="text-lg font-bold tracking-tight">
                                Location: {job.location}
                            </span>
                            <br />
                            <span className="text-lg font-bold tracking-tight">
                                Type: {job.type}
                            </span>
                            <br />
                            <div className="grid grid-cols-2 grid-rows-3  gap-x-5">
                                <ContactCard job={job} />
                                <Card
                                    className={cn('mt-5', className)}
                                    {...props}
                                >
                                    <CardHeader>
                                        <CardTitle className="text-left text-2xl">
                                            Activities
                                        </CardTitle>
                                        <CardDescription>
                                            <div className="mt-5 flex items-center space-x-2">
                                                <Checkbox id="applied" />
                                                <label
                                                    htmlFor="applied"
                                                    className="text-md font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                >
                                                    Applied
                                                </label>
                                            </div>
                                            <div className="mt-5 flex items-center space-x-2">
                                                <Checkbox id="call" />
                                                <label
                                                    htmlFor="call"
                                                    className="text-md font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                >
                                                    Screening call
                                                </label>
                                            </div>
                                            <div className="mt-5 flex items-center space-x-2">
                                                <Checkbox id="interview" />
                                                <label
                                                    htmlFor="interview"
                                                    className="text-md font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                >
                                                    Interview
                                                </label>
                                            </div>
                                            <div className="mt-5 flex items-center space-x-2">
                                                <Checkbox id="offer" />
                                                <label
                                                    htmlFor="offer"
                                                    className="text-md font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                >
                                                    Offer
                                                </label>
                                            </div>
                                        </CardDescription>
                                    </CardHeader>
                                </Card>

                                <JobNotes jobid={job.id} jobnote={job.notes} />

                                <div className="mt-10 flex justify-between">
                                    <DeleteJob jobid={job.id} />
                                </div>
                            </div>
                        </div>
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    );
}
