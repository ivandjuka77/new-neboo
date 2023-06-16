import { getServerSession } from 'next-auth';

const MainPage = async () => {
    const session = await getServerSession();
    console.log('session', session);
    if (!session) {
        // redirect('/api/auth/signin');

        return (
            <main style={{ textAlign: 'center' }}>
                <h1 className="mt-10 text-4xl font-bold tracking-tight text-black dark:text-white">
                    Welcome to the development version of neboo.
                </h1>
                <p className="mt-5 text-xl font-bold tracking-tight text-black dark:text-white ">
                    If you have been granted access, please{' '}
                    <a href="/api/auth/signin" className="underline">
                        log in
                    </a>
                    .
                </p>
                <p className="text-l mt-5 font-bold tracking-tight text-black dark:text-white ">
                    neboo is currently in development. If you would like to be
                    an early tester, please email me at{' '}
                    <a
                        href="mailto:ivandjuka777@gmail.com"
                        className="underline"
                    >
                        ivandjuka777@gmail.com
                    </a>
                </p>
            </main>
        );
    }

    return (
        <div className="container-fluid" style={{ textAlign: 'center' }}>
            <h3>Welcome to the development version of neboo.</h3>
        </div>
    );
};
export default MainPage;
