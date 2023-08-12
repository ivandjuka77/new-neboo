'use client';

import React, { useState } from 'react';

import JobBoardForm from '@/components/JobBoardForm';
import { JobTable } from '@/components/JobTable';

const JobsPage = () => {
    const [jobs, setJobs] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const [url, setUrl] = useState('');

    const setJobState = (job: any) => {
        setJobs(job);
    };

    const setUrlState = (url: string) => {
        setUrl(url);
    };

    const setLoadingState = (loading: boolean) => {
        setLoading(loading);
    };

    // const handleLoadMore = async () => {
    //     setLoading(true);
    //     const options = {
    //         method: 'GET',
    //         headers: {
    //             'X-RapidAPI-Key':
    //                 '1f3570d7a1msh7aaf63d2dc38c36p120ab8jsn678523f6ac2c',
    //             'X-RapidAPI-Host': 'jsearch.p.rapidapi.com',
    //         },
    //     };

    //     const res = await fetch(`${url}&page=${jobs.length / 10 + 1}`, options);
    //     const data = await res.json();

    //     setJobs((jobs) => [...jobs, ...data.data]);
    //     setLoading(false);
    // };

    return (
        <div className="flex flex-col items-center">
            <JobBoardForm
                setJob={setJobState}
                setLoading={setLoadingState}
                setUrl={setUrlState}
            />
            <JobTable jobs={jobs} loading={loading} url={url} />
            {/* {jobs.length > 0 && jobs.length % 30 === 0 && (
                <Button
                    className="mt-5"
                    variant="outline"
                    onClick={handleLoadMore}
                >
                    Load More
                </Button>
            )} */}
        </div>
    );
};

export default JobsPage;
