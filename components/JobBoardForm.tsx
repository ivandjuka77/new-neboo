'use client';

import { useForm } from 'react-hook-form';

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
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
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';

import { Switch } from './ui/switch';

type FormData = {
    query: string;
    date_posted: string;
    employment_types: string;
    job_requirements: string;
    remote_jobs_only: boolean;
};

const JobBoardForm = ({ setJob, setLoading }: any) => {
    const form = useForm<FormData>();
    const onSubmit = async (formData: FormData) => {
        setLoading(true);

        // for each key in formData, if the value is not undefined, add it to the params string
        let params = '';
        for (const key in formData) {
            if (formData[key] !== undefined) {
                params += `${key}=${formData[key]}&`;
            }
        }

        const url = `https://jsearch.p.rapidapi.com/search?${params.slice(
            0,
            -1
        )}`;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key':
                    '1f3570d7a1msh7aaf63d2dc38c36p120ab8jsn678523f6ac2c',
                'X-RapidAPI-Host': 'jsearch.p.rapidapi.com',
            },
        };

        try {
            const response = await fetch(url, options);
            const result = await response.text();
            const data = JSON.parse(result);

            if (data.data.length > 0) {
                setJob(data.data);

                console.log(data.data);
            } else {
                alert('No jobs found');
            }
        } catch (error) {
            console.error(error);
        }

        setLoading(false);
    };

    return (
        <Card className="mt-5 w-[1000px] border-none">
            <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold tracking-tight">
                    Job Search
                </CardTitle>
                <CardDescription className="text-md">
                    Search for jobs from multiple job boards and add them to
                    your board.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-5"
                    >
                        <FormField
                            control={form.control}
                            name="query"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            placeholder="Frontend Developer in Berlin.."
                                            required
                                        />
                                    </FormControl>
                                    <FormDescription className="text-center">
                                        <strong>Required</strong> - Please
                                        provide the search query. (Recommended:
                                        Job Title and Location)
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-1">
                                <AccordionTrigger>Filters</AccordionTrigger>
                                <AccordionContent>
                                    <div className="flex justify-around">
                                        <FormField
                                            control={form.control}
                                            name="date_posted"
                                            render={({ field }) => (
                                                <FormItem className="w-[180px]">
                                                    <Select
                                                        onValueChange={
                                                            field.onChange
                                                        }
                                                        defaultValue={
                                                            field.value
                                                        }
                                                    >
                                                        <SelectTrigger>
                                                            <SelectValue placeholder="Date Posted" />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            <SelectItem value="all">
                                                                All time
                                                            </SelectItem>
                                                            <SelectItem value="today">
                                                                Today
                                                            </SelectItem>
                                                            <SelectItem value="3days">
                                                                Last 3 Days
                                                            </SelectItem>
                                                            <SelectItem value="week">
                                                                Last Week
                                                            </SelectItem>
                                                            <SelectItem value="month">
                                                                Last Month
                                                            </SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                    <FormDescription className="text-center">
                                                        <strong>
                                                            Optional
                                                        </strong>{' '}
                                                        - Select a specified
                                                        time period
                                                    </FormDescription>
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="employment_types"
                                            render={({ field }) => (
                                                <FormItem className="w-[180px]">
                                                    <Select
                                                        onValueChange={
                                                            field.onChange
                                                        }
                                                        defaultValue={
                                                            field.value
                                                        }
                                                    >
                                                        <SelectTrigger className="w-[180px]">
                                                            <SelectValue placeholder="Type" />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            <SelectItem value="FULLTIME">
                                                                Full Time
                                                            </SelectItem>
                                                            <SelectItem value="PARTTIME">
                                                                Part Time
                                                            </SelectItem>
                                                            <SelectItem value="CONTRACTOR">
                                                                Contractor
                                                            </SelectItem>
                                                            <SelectItem value="INTERN">
                                                                Internship
                                                            </SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                    <FormDescription className="text-center">
                                                        <strong>
                                                            Optional
                                                        </strong>{' '}
                                                        - Select an employment
                                                        type
                                                    </FormDescription>
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="job_requirements"
                                            render={({ field }) => (
                                                <FormItem className="w-[180px]">
                                                    <Select
                                                        onValueChange={
                                                            field.onChange
                                                        }
                                                        defaultValue={
                                                            field.value
                                                        }
                                                    >
                                                        <SelectTrigger className="w-[180px]">
                                                            <SelectValue placeholder="Experience" />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            <SelectItem value="no_experience">
                                                                No experience
                                                            </SelectItem>
                                                            <SelectItem value="under_3_years_experience">
                                                                Under 3 years
                                                            </SelectItem>
                                                            <SelectItem value="more_than_3_years_experience">
                                                                Over 3 years
                                                            </SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                    <FormDescription className="text-center">
                                                        <strong>
                                                            Optional
                                                        </strong>{' '}
                                                        - Select a specified job
                                                        requirement level
                                                    </FormDescription>
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                        <FormField
                            control={form.control}
                            name="remote_jobs_only"
                            render={({ field }) => (
                                <FormItem className="flex w-full flex-row items-center justify-center">
                                    <div className="mr-4 mt-1 space-y-0.5 ">
                                        <FormLabel className="text-base">
                                            Remote Only
                                        </FormLabel>
                                    </div>
                                    <FormControl>
                                        <Switch
                                            defaultValue={0}
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <div className="flex justify-center">
                            <Button
                                type="submit"
                                variant="outline"
                                className="mt-2 px-8"
                            >
                                Search Jobs
                            </Button>
                        </div>
                    </form>
                </Form>
            </CardContent>
        </Card>
    );
};

export default JobBoardForm;
