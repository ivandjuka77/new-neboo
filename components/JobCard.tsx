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
import { JobDescription } from './JobDescription';
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
                        <div className="mt-3">
                            <span className="text-lg font-bold tracking-tight">
                                Date posted:{' '}
                                {job.postedAt ? job.postedAt : 'N/A'}
                            </span>
                            <br />
                            <div className="grid  grid-cols-2 gap-x-5">
                                <Card
                                    className={cn('mt-5 ', className)}
                                    {...props}
                                >
                                    <CardHeader>
                                        <CardTitle className="text-left text-2xl">
                                            Details
                                        </CardTitle>
                                        <CardDescription>
                                            <div className="text-left">
                                                <span className="text-xl font-bold tracking-tight">
                                                    Type:{' '}
                                                    {job.type
                                                        ? job.type
                                                        : 'N/A'}
                                                </span>
                                                <br />

                                                <span className="text-xl font-bold tracking-tight">
                                                    Location:{' '}
                                                    {job.location
                                                        ? job.location
                                                        : 'Not Listed'}
                                                </span>

                                                <br />
                                                <span className="text-xl font-bold tracking-tight">
                                                    Remote:{' '}
                                                    {job.remote ? (
                                                        <Check />
                                                    ) : (
                                                        'No'
                                                    )}
                                                </span>

                                                <br />
                                                <span className="text-xl font-bold tracking-tight">
                                                    Salary:{' '}
                                                    {job.salary
                                                        ? job.salary
                                                        : 'Not Listed'}
                                                </span>
                                                <br />
                                            </div>
                                        </CardDescription>
                                        <br />
                                        <CardTitle className="text-left text-2xl">
                                            Experience & Skills
                                        </CardTitle>
                                        <CardDescription>
                                            <div className="text-left">
                                                <span className="text-xl font-bold tracking-tight">
                                                    Experience needed:{' '}
                                                    {job.experience
                                                        ? job.experience
                                                        : 'Not Listed'}
                                                </span>
                                                <br />

                                                <span className="text-xl font-bold tracking-tight">
                                                    Skills:{' '}
                                                    {job.skills
                                                        ? job.skills
                                                        : 'Not Listed'}
                                                </span>
                                            </div>
                                        </CardDescription>
                                    </CardHeader>
                                </Card>
                                <ContactCard job={job} />

                                <JobDescription
                                    jobid={job.id}
                                    jobdesc={job.description}
                                />
                                <JobNotes jobid={job.id} jobnote={job.notes} />
                            </div>
                            <div className="mt-10 flex justify-between">
                                <DeleteJob jobid={job.id} />
                            </div>
                        </div>
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    );
}
