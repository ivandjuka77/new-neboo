import { getServerSession } from 'next-auth/next';
import { getProviders, signIn } from 'next-auth/react';

import { Button } from '@/components/ui/button';
import { LoginCard } from '@/components/LoginCard';
import { options } from '@/app/api/auth/[...nextauth]/route';

const SignIn = async () => {
    const providers: any = await getProviders();
    console.log(providers, 'providers');

    return (
        <div className="flex items-center justify-center">
            {/* {providers.github.name} */}
            <LoginCard providers={providers} />
        </div>
    );
};

export default SignIn;
