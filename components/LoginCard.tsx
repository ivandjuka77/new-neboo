'use client';

import { signIn } from 'next-auth/react';

import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export function LoginCard({ providers }: any) {
    return (
        <Card className="p-5">
            <CardHeader className="space-y-1">
                <CardTitle className="text-center text-2xl">
                    Login <br />
                </CardTitle>
                <CardDescription>
                    Enter your email below to login to your account.
                </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
                <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                        id="email"
                        type="email"
                        placeholder="m@example.com"
                        disabled
                    />
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" type="password" disabled />
                </div>
                <Button className="w-full" disabled>
                    Create account
                </Button>
                <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-background px-2 text-muted-foreground">
                            Or continue with
                        </span>
                    </div>
                </div>
                <div className="flex justify-center">
                    <Button
                        variant="default"
                        className="px-7 w-[250px] h-[50px] mt-5 "
                        onClick={() => signIn()}
                    >
                        {' '}
                        Sign in with Google/GitHub
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}
