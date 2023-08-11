'use client';

import { useRouter } from 'next/navigation';

import { Button } from './ui/button';

const testJob = {
    url: 'https://www.linkedin.com',
    title: 'Frontend Developer',
    companyName: 'Google',
    location: 'Remote',
    type: 'Part Time',
    description: `About the role:
    Are you interested in working for top Silicon Valley and U.S. based companies? Turing’s clients are looking for passionate, experienced Front-End Engineers looking to build exceptional mobile & desktop web applications. This is an opportunity to work with a highly talented and global team of software engineers, designers, and program managers to drive forward new innovative experiences in close partnership with customers. Our projects are long term and full-time.
    
    About Turing.com:
    Turing’s mission is to unleash the world’s untapped human potential. We use AI to source, evaluate, hire, onboard, and manage engineers remotely (including the HR and compliance aspects) in a bigger platform that we call the “Talent Cloud”.
    
    We recently achieved unicorn status with a valuation of $1.1B, after raising over $140M in financing over four rounds of funding. 100+ companies including companies like Johnson & Johnson, Pepsi, Dell, Disney +, and Coinbase have hired Turing developers.
    
    Responsibilities:
    - Design and build efficient intuitive front-end applications
    - Work with product managers, designers, & engineers to deliver quality products
    - Interact with clients’ technical leadership, understand the requirements & execute them
    - Work with a wide range of systems & technologies to solve end-to-end problems
    
    Requirements:
    - Bachelor's degree (or equivalent) in Computer Science or relevant field
    - 3+ years of experience as a front-end developer (exceptions made based on skill level)
    - Proficient with HTML, CSS, and JavaScript
    - Have a strong understanding of core React/Angular principles
    - Experience with complex code bases, systems & source code control systems like Git
    - Experience in building and supporting mission-critical user-facing systems
    
    Preferred skills:
    - Experience in Unix/Linux, including basic commands and scripting
    - Fluency in English to collaborate with engineering managers
    - The ability to work full-time (40 hours/week) and a 4 hour overlap with U.S. time zones
    - You can function effectively without too much hand-holding and micromanagement
    
    What we offer:
    - Elite U.S. Jobs
    - Long-term, full-time opportunities
    - Flexibility to work from anywhere in the world
    - Better compensation
    - Career growth
    - Exclusive Developer Community
    - Upskilling workshops
    - Career development sessions
    - Networking meetups
    - Referral programs
    
    Once you join Turing, you'll never have to apply for another job!`,
    experience: '2 Years',
    salary: '€ 2,000 - 3,000',
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
            className="mt-3 w-8/12 text-black dark:text-white"
            onClick={handlePostJob}
        >
            +
        </Button>
    );
};
export default AddJobButton;
