'use client';

import { Button } from './ui/button';

const testJob = {
    url: 'https://www.linkedin.com/jobs/collections/recommended/?currentJobId=3599005951',
    title: 'Software Engineer',
    companyName: 'Google',
    location: 'Bratislava',
    type: 'Full-time',
    contact: 'John Doe',
};

const handlePostJob = async () => {
    const res = await fetch('/api/jobs', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(testJob),
    });
};

const AddJobButton = () => {
    return (
        <Button
            variant="outline"
            className="mt-3 w-10/12"
            onClick={handlePostJob}
        >
            + AddJobButton
        </Button>
    );
};
export default AddJobButton;
