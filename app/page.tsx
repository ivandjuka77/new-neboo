import { getServerSession } from 'next-auth';

const MainPage = async () => {
    const session = await getServerSession();
    console.log('session', session);
    if (!session) {
        // redirect('/api/auth/signin');

        return (
            <main style={{ textAlign: 'center' }}>
                <h1>Welcome to the development version of neboo.</h1>
                <p>
                    If you have been granted access, please{' '}
                    <a href="/api/auth/signin">log in</a>.
                </p>
                <p>
                    If you are looking for the production version of neboo,{' '}
                    <a
                        target="_blank"
                        href="https://neboo.co/"
                        rel="noreferrer"
                    >
                        please click here
                    </a>
                    .
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
