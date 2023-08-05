'use client';

import { useRouter } from 'next/navigation';

import { useToast } from '@/components/ui/use-toast';

import { Button } from './ui/button';

const formatDate = (date: string) => {
    const d = new Date(date);
    // format date as dd.mm.yyyy
    return `${d.getDate()}.${d.getMonth() + 1}.${d.getFullYear()}`;
};

const capitalize = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
};

const getJobSalary = (job: any) => {
    if (
        job.job_salary_currency &&
        job.job_max_salary &&
        job.job_min_salary &&
        job.job_salary_period
    ) {
        return `${job.job_salary_currency === 'USD' ? '$' : ''}${
            job.job_min_salary
        } - ${job.job_salary_currency === 'USD' ? '$' : ''}${
            job.job_max_salary
        } Per ${capitalize(job.job_salary_period.toLowerCase())}`;
    } else {
        return 'Not Listed';
    }
};

const AddJobFromBoard = ({ job }: any) => {
    const { toast } = useToast();
    const jobData = {
        url: job.job_apply_link,
        title: job.job_title,
        companyName: job.employer_name,
        location: job.job_is_remote ? 'Remote' : 'Not Remote',
        datePosted: formatDate(job.job_posted_at_datetime_utc),
        type: capitalize(job.job_employment_type.toLowerCase()),
        experience: job.job_required_experience.experience_mentioned
            ? Number(
                  job.job_required_experience.required_experience_in_months
              ) /
                  12 +
              ' years'
            : 'Not Listed',
        salary: getJobSalary(job),
        skills: job.job_required_skills
            ? job.job_required_skills.join(', ')
            : 'Not Listed',
        description: job.job_description,
    };
    const router = useRouter();
    const handlePostJob = async () => {
        const res = await fetch(window.location.origin + '/api/jobs', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(jobData),
        });
        router.refresh();
        toast({
            title: 'Job Added to Board!',
            description: jobData.title,
        });
    };

    return (
        <Button
            variant="outline"
            className="ml-3 mt-5 "
            onClick={handlePostJob}
        >
            Save to Board
        </Button>
    );
};
export default AddJobFromBoard;
