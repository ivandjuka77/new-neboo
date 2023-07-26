import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';

import { prisma } from '@/lib/prisma';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import AddJobButton from '@/components/AddJobButton';
import { JobCard } from '@/components/JobCard';
import KanbanTable from '@/components/KanbanTable';
import SidebarMenu from '@/components/SidebarMenu';
import { options } from '@/app/api/auth/[...nextauth]/route';

const Kanban = async () => {
    // change to map in a helper function
    const getJobs = async () => {
        const getUserId = async () => {
            const user = await prisma.user.findFirst({
                where: {
                    name: session?.user?.name,
                },
            });
            return user?.id;
        };

        const userId = await getUserId();

        const jobs = await prisma.job.findMany({
            where: {
                userId: userId,
            },
        });
        return jobs;
    };

    const session = await getServerSession(options);

    const jobs = await getJobs();

    // if (!session) {
    //     redirect('/');
    // }
    return (
        <div className="flex  h-[calc(100vh)] w-[1900px] flex-row overflow-y-hidden bg-background ">
            <SidebarMenu />

            <KanbanTable />
        </div>
    );
};

export default Kanban;
