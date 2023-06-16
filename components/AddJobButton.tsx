'use client';

import { useRouter } from 'next/navigation';

import { Button } from './ui/button';

const testJob = {
    url: 'https://www.linkedin.com/jobs/collections/recommended/?currentJobId=3599005951',
    title: 'Frontend Developer',
    companyName: 'Voxwise',
    location: 'Bratislava',
    type: 'Part Time',
};

const AddJobButton = () => {
    const router = useRouter();
    const handlePostJob = async () => {
        const res = await fetch(window.location.origin + '/api/jobs', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(testJob),
        });
        router.refresh();
    };

    return (
        <Button
            variant="outline"
            className="mt-3 w-10/12"
            onClick={handlePostJob}
        >
            +
        </Button>
    );
};
export default AddJobButton;
