'use client';

import { SyntheticEvent, useState } from 'react';
import { useRouter } from 'next/navigation';

async function fetchData(link: string) {
    const url = `https://linkedin-profiles1.p.rapidapi.com/extract?url=${link}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key':
                '1f3570d7a1msh7aaf63d2dc38c36p120ab8jsn678523f6ac2c',
            'X-RapidAPI-Host': 'linkedin-profiles1.p.rapidapi.com',
        },
    };

    try {
        const response = await fetch(url, options);
        let result: any = await response.text();
        result = JSON.parse(result);
        result = result?.graph['@graph'][0];

        const body = [
            {
                name: result?.name,
                jobTitle: result?.jobTitle[0],
                jobCompanyName: result?.worksFor[0]?.name,
                url: link,
            },
        ];
        console.log(body);

        // make a post request to /api/people with the data
        await fetch('/api/people', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        });

        // return data;
    } catch (error) {
        console.error(error);
    }
}

const LinkForm = () => {
    const router = useRouter();
    const handleSubmit = async (e: SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        const link = (e.target as HTMLFormElement).link.value;
        console.log(link);
        await fetchData(link);
        router.refresh();
    };

    return (
        <form className="grid container" onSubmit={handleSubmit}>
            <input type="text" id="link" name="link" placeholder="link" />
            <button type="submit">Submit</button>
        </form>
    );
};
export default LinkForm;
