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
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet';
import { Textarea } from '@/components/ui/textarea';

import { Checkbox } from './ui/checkbox';

type CardProps = React.ComponentProps<typeof Card>;

export function JobCard({ className, ...props }: CardProps) {
    return (
        <Sheet>
            <SheetTrigger className="w-10/12">
                <Card
                    className={cn('mt-5  cursor-pointer ', className)}
                    {...props}
                >
                    <CardHeader>
                        <CardTitle className="text-left">
                            Frontend Developer
                        </CardTitle>
                        <CardDescription>
                            <div className="text-left">Voxwise</div>
                        </CardDescription>
                    </CardHeader>
                </Card>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>
                        <div>
                            <a
                                href="https://tailwindcss.com/docs/width"
                                target="_blank"
                                rel="noreferrer"
                                className=" flex items-center mb-1"
                            >
                                <span className="text-4xl tracking-tight mr-4">
                                    Frontend Developer
                                </span>

                                <ExternalLink />
                            </a>
                        </div>

                        <span className="text-2xl text-gray-400 tracking-tight ">
                            Voxwise
                        </span>
                    </SheetTitle>
                    <SheetDescription>
                        <div className="mt-5">
                            <span className="text-lg font-bold tracking-tight">
                                Location: Bratislava
                            </span>
                            <br />
                            <span className="text-lg font-bold tracking-tight">
                                Type: Remote
                            </span>
                            <br />
                            <div className="grid grid-cols-2 grid-rows-3  gap-x-5">
                                <Card
                                    className={cn('mt-5', className)}
                                    {...props}
                                >
                                    <CardHeader>
                                        <CardTitle className="text-left text-2xl">
                                            Contact
                                        </CardTitle>
                                        <CardDescription>
                                            <div className="text-left mt-3">
                                                <span className="text-lg font-bold tracking-tight">
                                                    Name: John Doe
                                                </span>
                                                <br />
                                                <span className="text-lg font-bold tracking-tight">
                                                    Position: Recruiter
                                                </span>
                                                <br />
                                                <br />
                                            </div>
                                        </CardDescription>
                                    </CardHeader>
                                    <CardFooter>
                                        <div className=" flex items-center space-x-2">
                                            <Button
                                                variant="outline"
                                                className="mr-3"
                                            >
                                                Show Message
                                            </Button>
                                            <Checkbox id="message" />
                                            <label
                                                htmlFor="message"
                                                className="text-md font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                            >
                                                Message sent
                                            </label>
                                        </div>
                                    </CardFooter>
                                </Card>
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

                                <Card
                                    className={cn(
                                        'mt-5  col-span-2',
                                        className
                                    )}
                                    {...props}
                                >
                                    <CardHeader>
                                        <CardTitle className="text-left text-2xl">
                                            Notes
                                        </CardTitle>
                                        <CardDescription>
                                            <div className="mt-2 ">
                                                <Textarea
                                                    placeholder="Type your notes here."
                                                    className="resize-none xl:h-40 lg:h-32 w-full border-0 focus:ring-0 focus:border-gray-300"
                                                />
                                            </div>
                                        </CardDescription>
                                    </CardHeader>
                                </Card>
                            </div>
                        </div>
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    );
}
