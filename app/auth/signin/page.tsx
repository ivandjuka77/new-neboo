import { getServerSession } from 'next-auth/next';
import { getProviders, signIn } from 'next-auth/react';

import { LoginCard } from '@/components/ui/LoginCard';
import { Button } from '@/components/ui/button';
import { options } from '@/app/api/auth/[...nextauth]/route';

const SignIn = async () => {
    const providers: any = await getProviders();
    console.log(providers, 'providers');

    return (
        <div className="flex items-center justify-center">
            <LoginCard providers={providers} />
        </div>
    );
};

export default SignIn;
