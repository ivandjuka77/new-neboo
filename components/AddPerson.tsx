'use client';

import { SyntheticEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Divide, Loader2 } from 'lucide-react';
import { useForm } from 'react-hook-form';

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
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

import AddPersonManual from './AddPersonManual';

const AddPerson = () => {
    async function fetchData(link: string) {
        const url = `https://linkedin-profiles1.p.rapidapi.com/extract?url=${link}`;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key':
                    '1f3570d7a1msh7aaf63d2dc38c36p120ab8jsn678523f6ac2c',
                'X-RapidAPI-Host': 'linkedin-profiles1.p.rapidapi.com',
            },
        };

        try {
            const response = await fetch(url, options);
            let result: any = await response.text();
            result = JSON.parse(result);
            result = result?.graph['@graph'][0];

            const body = [
                {
                    name: result?.name,
                    jobTitle: result?.jobTitle[0],
                    jobCompanyName: result?.worksFor[0]?.name,
                    url: link,
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
            // return data;
        } catch (error) {
            console.error(error);
        }
    }
    const router = useRouter();

    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    type FormData = {
        link: string;
    };
    const form = useForm<FormData>();

    const onSubmit = async (formData: FormData) => {
        setLoading(true);
        const link = formData.link;
        console.log(link);
        await fetchData(link);
        router.refresh();
        setLoading(false);
        form.setValue('link', '');
    };

    return (
        <AlertDialog open={open} onOpenChange={setOpen}>
            <AlertDialogTrigger asChild>
                <Button variant="outline">Add Person</Button>
            </AlertDialogTrigger>
            <AlertDialogContent className="text-black dark:text-white">
                <AlertDialogHeader></AlertDialogHeader>
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-8 "
                    >
                        <h6 className="tracking-tight text-lg font-bold text-center">
                            Add person trough LinkedIn
                        </h6>
                        <FormField
                            control={form.control}
                            name="link"
                            render={({ field }) => (
                                <FormItem>
                                    {/* <FormLabel>Link</FormLabel> */}
                                    <FormControl>
                                        <Input
                                            {...field}
                                            placeholder="LinkedIn URL"
                                        />
                                    </FormControl>
                                    <FormDescription>
                                        Please provide the LinkedIn URL from the
                                        person&apos;s profile.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* <AlertDialogAction></AlertDialogAction> */}

                        <Button type="submit" variant="outline">
                            {loading ? (
                                <Loader2 className="h-3 w-4 animate-spin" />
                            ) : (
                                'Submit'
                            )}
                        </Button>
                    </form>
                </Form>
                <hr className="my-4" />
                <AddPersonManual />
            </AlertDialogContent>
        </AlertDialog>
    );
};
export default AddPerson;
