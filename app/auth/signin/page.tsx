import { getServerSession } from 'next-auth/next';
import { getProviders, signIn } from 'next-auth/react';

import { Button } from '@/components/ui/button';
import { LoginCard } from '@/components/LoginCard';
import { options } from '@/app/api/auth/[...nextauth]/route';

const SignIn = async () => {
    const providers: any = await getProviders();
    console.log(providers, 'providers');

    return (
        <div className=" mt-10 flex flex-col items-center">
            <h1 className="text-center text-xl font-semibold tracking-tight">
                Note: Currently the only way to login is passwordless, through
                Google or GitHub.
            </h1>
            <br />
            <h1 className="mb-20 text-center text-xl font-semibold tracking-tight text-muted-foreground">
                This is because the current authentication strategy is not
                compatible with the credentials option and is creating logout
                issues. <br />
                Apologies for the inconvenience.
            </h1>
            <LoginCard providers={providers} />
        </div>
    );
};

export default SignIn;
