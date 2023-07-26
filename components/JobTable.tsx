import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';

import JobDialog from './JobDialog';
import SaveJob from './SaveJob';

// {job.employer_logo ? (
//     <Image
//         src={job.employer_logo}
//         alt="logo"
//         width={30}
//         height={30}
//         className="rounded-full border"
//     />
// ) : (
//     'no logo'
// )}

export function JobTable({ jobs }: any) {
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
                {jobs.map((job: any) => (
                    <TableRow key={job.id}>
                        <TableCell>
                            <SaveJob job={job} />
                        </TableCell>
                        <TableCell>
                            <JobDialog job={job} />
                        </TableCell>
                        <TableCell>{job.employer_name}</TableCell>
                        <TableCell>
                            {capitalize(job.job_employment_type.toLowerCase())}
                        </TableCell>
                        <TableCell>
                            {job.job_is_remote ? 'Remote' : 'Not Remote'}
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}
