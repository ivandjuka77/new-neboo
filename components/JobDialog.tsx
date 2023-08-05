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

import AddJobButton from './AddJobButton';
import AddJobFromBoard from './AddJobFromBoard';
import { Button } from './ui/button';

const capitalize = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
};

const formatDate = (date: string) => {
    const d = new Date(date);
    // format date as dd.mm.yyyy
    return `${d.getDate()}.${d.getMonth() + 1}.${d.getFullYear()}`;
};

const getJobSalary = (job: any) => {
    if (
        job.job_salary_currency &&
        job.job_max_salary &&
        job.job_min_salary &&
        job.job_salary_period
    ) {
        console.log('all gucci');
        return `${job.job_salary_currency === 'USD' ? '$' : ''}${
            job.job_min_salary
        } - ${job.job_salary_currency === 'USD' ? '$' : ''}${
            job.job_max_salary
        } Per ${capitalize(job.job_salary_period.toLowerCase())}`;
    } else {
        console.log('not gucci');
        return 'Not Listed';
    }
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
                <div className="text-l mt-5 font-semibold tracking-tight">
                    <h1 className="mb-3 text-2xl font-semibold tracking-tight">
                        Experience & Skills
                    </h1>
                    <span>
                        Experience needed:{'  '}
                        {job.job_required_experience.experience_mentioned
                            ? Number(
                                  job.job_required_experience
                                      .required_experience_in_months
                              ) /
                                  12 +
                              ' years'
                            : 'Not Listed'}
                    </span>
                    <br />
                    <span>
                        Skills:{' '}
                        {job.job_required_skills
                            ? job.job_required_skills.join(', ')
                            : 'Not Listed'}
                    </span>
                </div>
                <div className="text-l mt-5 font-semibold tracking-tight">
                    <h1 className="mb-3 text-2xl font-semibold tracking-tight">
                        Salary Details
                    </h1>
                    <span>Salary: {getJobSalary(job)} </span>
                    <br />
                </div>
                <div className="flex">
                    <a
                        href={job.job_apply_link}
                        target="blank"
                        rel="noreferrer"
                    >
                        <Button variant="outline" className="mt-5 ">
                            Apply <ExternalLink className="ml-2 scale-75" />
                        </Button>
                    </a>
                    <AddJobFromBoard job={job} />
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default JobDialog;
