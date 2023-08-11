import '@/styles/globals.css';
import { Metadata } from 'next';

import { siteConfig } from '@/config/site';
import { fontSans } from '@/lib/fonts';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/Toaster';
import Navbar from '@/components/Navbar';
import { TailwindIndicator } from '@/components/tailwind-indicator';
import { ThemeProvider } from '@/components/theme-provider';

import AuthProvider from './AuthProvider';

export const metadata: Metadata = {
    title: {
        default: siteConfig.name,
        template: `%s - ${siteConfig.name}`,
    },
    description: siteConfig.description,
    themeColor: [
        { color: 'black' },
        // { media: '(prefers-color-scheme: light)', color: 'white' },
    ],
    icons: {
        icon: '/favicon.ico',
        shortcut: '/favicon-16x16.png',
        apple: '/apple-touch-icon.png',
    },
};

interface RootLayoutProps {
    children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <AuthProvider>
            <html lang="en" suppressHydrationWarning>
                <head />
                <body
                    className={cn(
                        'bg-background min-h-screen	font-sans 	antialiased',
                        fontSans.variable
                    )}
                >
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="system"
                        enableSystem
                    >
                        <div className="relative flex min-h-screen flex-col">
                            <Navbar />

                            <div className="mt-[72px] flex-1">{children}</div>
                            <Toaster />
                        </div>
                        <TailwindIndicator />
                    </ThemeProvider>
                </body>
            </html>
        </AuthProvider>
    );
}
