import { BellRing, Check } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

type CardProps = React.ComponentProps<typeof Card>;

export function JobCard({ className, ...props }: CardProps) {
    return (
        <Card className={cn('w-10/12 mt-5 ', className)} {...props}>
            <CardHeader>
                <CardTitle>Frontend Developer</CardTitle>
                <CardDescription>
                    <div className="flex justify-between items-center">
                        Voxwise
                    </div>
                </CardDescription>
            </CardHeader>
        </Card>
    );
}
