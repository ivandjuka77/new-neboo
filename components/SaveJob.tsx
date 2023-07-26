'use client';

import { Icons } from './icons';

const SaveJob = ({ props }: any) => {
    const handleJobSave = (e: any) => {
        e.target.closest('.save-button').classList.toggle('fill-white');
    };

    return (
        <Icons.bookmark
            className="save-button ml-4 w-[20px] cursor-pointer transition"
            onClick={(e: any) => handleJobSave(e)}
        />
    );
};

export default SaveJob;
