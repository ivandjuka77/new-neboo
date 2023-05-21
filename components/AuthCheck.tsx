'use client';

import { useSession } from 'next-auth/react';

const AuthCheck = ({ children }: any) => {
    const { data: session, status } = useSession();

    console.log('session', session);
    console.log('status', status);

    if (status === 'authenticated') {
        return <>{children}</>;
    } else if (status === 'loading') {
        return <h1>Loading...</h1>;
    } else return <></>;
};
export default AuthCheck;
