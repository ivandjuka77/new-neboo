'use client';

import React, { useState } from 'react';

import JobBoardForm from '@/components/JobBoardForm';
import { JobTable } from '@/components/JobTable';

const JobsPage = () => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(false);

    const setJobState = (job: any) => {
        setJobs(job);
    };

    const setLoadingState = (loading: boolean) => {
        setLoading(loading);
    };

    return (
        <div className="flex flex-col items-center">
            <JobBoardForm setJob={setJobState} setLoading={setLoadingState} />
            <JobTable jobs={jobs} loading={loading} />
        </div>
    );
};

export default JobsPage;
