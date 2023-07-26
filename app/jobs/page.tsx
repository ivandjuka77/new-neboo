'use client';

import React, { useState } from 'react';

import { JobTable } from '@/components/JobTable';

const JobsPage = () => {
    const [jobs, setJobs] = useState([]);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const url =
            'https://jsearch.p.rapidapi.com/search?query=Frontend%20Developer%20in%20Slovakia&page=1&num_pages=1&remote_jobs_only=true';
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key':
                    '1f3570d7a1msh7aaf63d2dc38c36p120ab8jsn678523f6ac2c',
                'X-RapidAPI-Host': 'jsearch.p.rapidapi.com',
            },
        };

        try {
            const response = await fetch(url, options);
            const result = await response.text();
            const data = JSON.parse(result);

            setJobs(data.data);
            console.log(data.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h1>Get jobs!</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="search" id="search" />
                <input type="submit" value="Search" />
            </form>
            <JobTable jobs={jobs} />
        </div>
    );
};

export default JobsPage;
