'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Loader2 } from 'lucide-react';
import { useForm } from 'react-hook-form';

import { AlertDialogCancel } from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

type FormData = {
    name: string;
    jobTitle: string;
    jobCompanyName: string;
};

const AddPersonManual = () => {
    const onSubmit = async (formData: FormData) => {
        setLoading(true);
        const body = [
            {
                name: formData?.name,
                job: formData?.jobTitle,
                location: formData?.jobCompanyName,
            },
        ];

        // make a post request to /api/people with the data
        await fetch('/api/people', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        });

        setOpen(false);
        router.refresh();
        setLoading(false);
        form.setValue('name', '');
        form.setValue('jobTitle', '');
        form.setValue('jobCompanyName', '');
    };
    const form = useForm<FormData>();
    const router = useRouter();
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                <h6 className="text-center text-lg font-bold tracking-tight">
                    Add a person manually
                </h6>
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input {...field} placeholder="Name" />
                            </FormControl>
                            <FormDescription>
                                Please provide the name of the person.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="jobTitle"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input {...field} placeholder="Job Title" />
                            </FormControl>
                            <FormDescription>
                                Please provide the job title of the person.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="jobCompanyName"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input {...field} placeholder="Company Name" />
                            </FormControl>
                            <FormDescription>
                                Please provide the company name of the person.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className="flex w-full justify-between">
                    {/* <AlertDialogAction></AlertDialogAction> */}
                    <Button type="submit" variant="outline" className="mr-3">
                        {loading ? (
                            <Loader2 className="h-3 w-4 animate-spin" />
                        ) : (
                            'Submit'
                        )}
                    </Button>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                </div>
            </form>
        </Form>
    );
};

export default AddPersonManual;
