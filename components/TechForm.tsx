'use client';

import { useState } from 'react';

const fetchData = async (text: String) => {
    const res = await fetch('/api/users/tech', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ tech: text }),
    });
};

const TechForm = () => {
    const [hintData, setHintData] = useState<string[]>([
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'Angular',
        'Vue.js',
        'Node.js',
        'Express.js',
        'MongoDB',
        'MySQL',
        'PostgreSQL',
        'Firebase',
        'ASP.NET',
        'Ruby on Rails',
        'Django',
        'Flask',
        'Laravel',
        'Symfony',
        'ASP.NET Core',
        'Spring Boot',
        'ASP.NET MVC',
        'jQuery',
        'Bootstrap',
        'Sass',
        'Less',
        'TypeScript',
        'GraphQL',
        'REST',
        'JSON',
        'XML',
        'Webpack',
        'Babel',
        'Gulp',
        'Grunt',
        'Docker',
        'Kubernetes',
        'AWS',
        'Azure',
        'Google Cloud Platform',
        'Heroku',
        'Netlify',
        'Git',
        'GitHub',
        'Bitbucket',
        'JIRA',
        'Trello',
        'Slack',
        'VS Code',
        'Sublime Text',
        'Atom',
        'WebStorm',
    ]);
    const [text, setText] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        fetchData(text);
        // getUser();
    };

    return (
        <form onSubmit={handleSubmit}>
            <p>What technologies do you use?</p>
            <div className="grid">
                <input
                    value={text}
                    style={{ background: 'white' }}
                    onChange={(e) => setText(e.target.value)}
                />
                <button>Submit</button>
            </div>
        </form>
    );
};
export default TechForm;
