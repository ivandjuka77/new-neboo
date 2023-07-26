'use client';

import React from 'react';
import { ExternalLink } from 'lucide-react';

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';

const capitalize = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
};

const formatDate = (date: string) => {
    const d = new Date(date);
    // format date as dd.mm.yyyy
    return `${d.getDate()}.${d.getMonth() + 1}.${d.getFullYear()}`;
};

const JobDialog = ({ job }: any) => {
    return (
        <Dialog>
            <DialogTrigger>{job.job_title}</DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        <a
                            href={job.job_apply_link}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center text-3xl tracking-tight "
                        >
                            <h1 className="mr-3">{job.job_title}</h1>
                            <ExternalLink />
                        </a>
                    </DialogTitle>
                    <DialogDescription className="text-xl font-semibold tracking-tight">
                        {job.employer_name}
                    </DialogDescription>
                </DialogHeader>
                <div className="text-l mt-5 font-semibold tracking-tight">
                    <h1 className="mb-3 text-2xl font-semibold tracking-tight">
                        Job details
                    </h1>
                    <span>
                        Type:{' '}
                        {capitalize(job.job_employment_type.toLowerCase())}
                    </span>
                    <br />
                    <span>
                        Location: {job.job_city ? job.job_city : 'Not Listed'}
                        {job.job_country ? ', ' + job.job_country : ''} (
                        {job.job_is_remote ? 'Remote' : 'Not Remote'})
                    </span>

                    <br />
                    <span>
                        Date posted:{' '}
                        {formatDate(job.job_posted_at_datetime_utc)}
                    </span>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default JobDialog;
