'use client';

import Image from 'next/image';
import Link from 'next/link';
import { signIn, signOut, useSession } from 'next-auth/react';

export function SignInButton() {
    const { data: session, status } = useSession();
    console.log(session, status);

    if (status === 'loading') {
        return <button aria-busy="true"></button>;
    }

    if (status === 'authenticated') {
        return (
            <ul className="flex">
                <li>
                    <Link href={`/user/dashboard`}>
                        {/* <Image
                            src={session?.user?.image ?? ''}
                            width={64}
                            height={64}
                            alt="Your Name"
                        /> */}
                    </Link>
                </li>
                <li>
                    <Link href={`/user/dashboard`}>
                        <p>{session.user?.name}</p>
                    </Link>
                </li>
                <li>
                    <SignOutButton />
                </li>
            </ul>
        );
    }

    return <button onClick={() => signIn()}>Sign in</button>;
}

export function SignOutButton() {
    return <button onClick={() => signOut()}>Sign out</button>;
}
