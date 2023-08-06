export const getJobLocation = (job: any) => {
    return `${job.job_city ? job.job_city : 'Not Listed'}, ${
        job.job_state ? job.job_state : ''
    } (
        ${job.job_is_remote ? 'Remote' : 'Not Remote'})`;
};
