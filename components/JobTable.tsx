import { Loader2 } from 'lucide-react';

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';

import JobDialog from './JobDialog';
import SaveJob from './SaveJob';

export function JobTable({ jobs, loading, url }: any) {
    const capitalize = (str: string) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">Save Job</TableHead>
                    <TableHead>Title</TableHead>
                    <TableHead>Company</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Location</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {loading ? (
                    <TableRow>
                        <TableCell
                            colSpan={5}
                            className=" h-[150px] text-center "
                        >
                            <Loader2 className="m-auto animate-spin transition-all" />
                        </TableCell>
                    </TableRow>
                ) : (
                    jobs?.map((job: any) => (
                        <TableRow key={job.id}>
                            <TableCell>
                                <SaveJob job={job} />
                            </TableCell>
                            <TableCell>
                                <JobDialog job={job} />
                            </TableCell>
                            <TableCell>{job.employer_name}</TableCell>
                            <TableCell>
                                {capitalize(
                                    job.job_employment_type.toLowerCase()
                                )}
                            </TableCell>
                            <TableCell>
                                {job.job_is_remote ? 'Remote' : 'Not Remote'}
                            </TableCell>
                        </TableRow>
                    ))
                )}
            </TableBody>
        </Table>
    );
}
