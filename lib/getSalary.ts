import { capitalize } from './capitalize';

export const getJobSalary = (job: any) => {
    if (
        job?.job_salary_currency &&
        job?.job_max_salary &&
        job?.job_min_salary &&
        job?.job_salary_period
    ) {
        return `${
            job?.job_salary_currency === 'USD'
                ? '$'
                : job?.job_salary_currency === 'EUR'
                ? '€'
                : ''
        }${job?.job_min_salary} - ${
            job?.job_salary_currency === 'USD'
                ? '$'
                : job?.job_salary_currency === 'EUR'
                ? '€'
                : ''
        }${job?.job_max_salary} Per ${capitalize(
            job?.job_salary_period.toLowerCase()
        )}`;
    } else {
        return 'Not Listed';
    }
};
