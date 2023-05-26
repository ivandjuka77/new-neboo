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
import { Icons } from '@/components/icons';

export function LoginCard({ providers }: any) {
    return (
        <Card>
            <CardHeader className="space-y-1">
                <CardTitle className="text-center text-2xl">Login </CardTitle>
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
                    />
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" type="password" />
                </div>
                <Button className="w-full">Create account</Button>
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
                <div className="grid grid-cols-2 gap-6">
                    {providers
                        ? Object.values(providers).map((provider: any) => (
                              <Button
                                  variant="outline"
                                  onClick={() => signIn(provider.id)}
                                  key={provider?.name}
                              >
                                  {provider.name === 'GitHub' ? (
                                      <Icons.GitHub className="mr-2 h-4 w-4" />
                                  ) : provider.name === 'Google' ? (
                                      <Icons.chrome className="mr-2 h-4 w-4" />
                                  ) : (
                                      ''
                                  )}
                                  {provider.name}
                              </Button>
                          ))
                        : ''}
                </div>
            </CardContent>
        </Card>
    );
}
