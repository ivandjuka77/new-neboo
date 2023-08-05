import { useRouter } from 'next/navigation';

import { cn } from '@/lib/utils';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';

type CardProps = React.ComponentProps<typeof Card>;

export function JobDescription({
    className,
    ...props
}: CardProps & { jobid: string } & { jobdesc: string }) {
    return (
        <Card className={cn('col-span-2  mt-5', className)} {...props}>
            <CardHeader>
                <CardTitle className="text-left text-2xl">
                    Description
                </CardTitle>
                <CardDescription>
                    <div className="mt-2 ">
                        <div className="whitespace-pre-line text-left">
                            {props.jobdesc}
                        </div>
                    </div>
                </CardDescription>
            </CardHeader>
        </Card>
    );
}
