'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';

import { Textarea } from './ui/textarea';
import { useToast } from './ui/use-toast';

type CardProps = React.ComponentProps<typeof Card>;

export function JobNotes({
    className,
    ...props
}: CardProps & { jobid: string } & { jobnote: string }) {
    const { toast } = useToast();
    const [notes, setNotes] = useState(props.jobnote || '');
    const router = useRouter();

    const saveNotes = () => {
        // get the text from the textarea
        const notes = document.querySelector('textarea')?.value;

        const payload = {
            notes: notes,
            jobId: props.jobid,
        };

        fetch('/api/notes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        });
        router.refresh();
        toast({
            title: 'Notes saved!',
            description:
                'Your notes have been saved and will be displayed on your next visit.',
        });
    };
    return (
        <Card className={cn('col-span-2  mt-5', className)} {...props}>
            <CardHeader>
                <CardTitle className="text-left text-2xl">Notes</CardTitle>
                <CardDescription>
                    <div className="mt-2 ">
                        <Textarea
                            placeholder="Type your notes here..."
                            value={notes || ''}
                            className="w-full resize-none border-0 focus:border-0 focus:ring-0 lg:h-32 xl:h-40"
                            onChange={(e) => {
                                // Display the save button if the user inputs text
                                const btn = document.getElementById('save');
                                if (btn) btn.classList.remove('opacity-0');
                                setNotes(e.target.value);
                            }}
                        />
                        <Button
                            id="save"
                            variant="outline"
                            className="mt-5 w-[100px] opacity-0 transition duration-300"
                            onClick={() => {
                                // Hide the save button after the user clicks it
                                const btn = document.getElementById('save');
                                if (btn) btn.classList.add('opacity-0');
                                saveNotes();
                            }}
                        >
                            Save
                        </Button>
                    </div>
                </CardDescription>
            </CardHeader>
        </Card>
    );
}
