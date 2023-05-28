import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import AddJobButton from '@/components/AddJobButton';
import { JobCard } from '@/components/JobCard';
import { options } from '@/app/api/auth/[...nextauth]/route';

const Kanban = async () => {
    const session = await getServerSession(options);

    // if (!session) {
    //     redirect('/');
    // }
    return (
        <div className="   flex flex-row ">
            <div className=" items-left  col-span-1 flex h-[calc(100vh-72px)] w-[100px] flex-col  border-r pt-10 text-transparent transition-all delay-200 hover:w-[300px] hover:text-white">
                <Button
                    variant="ghost"
                    className="mx-3 justify-start px-3 text-white"
                >
                    Jobs
                </Button>
                <Button
                    variant="ghost"
                    className="mx-3 justify-start px-3 "
                    disabled
                >
                    Contacts
                </Button>
            </div>
            <div className=" grid h-[calc(100vh-72px)] w-screen grid-cols-5 ">
                <div className="flex flex-col items-center border-r pt-5 font-bold tracking-tight  ">
                    Potential Jobs
                    <AddJobButton />
                    <JobCard />
                </div>
                <div className="flex flex-col items-center border-r pt-5   font-bold  tracking-tight  ">
                    Message Sent
                    <Button variant="outline" className="mt-3 w-10/12">
                        +
                    </Button>
                </div>
                <div className="flex flex-col items-center border-r pt-5   font-bold  tracking-tight  ">
                    Screening Call
                    <Button variant="outline" className="mt-3 w-10/12">
                        +
                    </Button>
                </div>
                <div className="flex flex-col items-center border-r pt-5   font-bold  tracking-tight  ">
                    Interview
                    <Button variant="outline" className="mt-3 w-10/12">
                        +
                    </Button>
                </div>
                <div className="flex flex-col items-center border-r pt-5  font-bold   tracking-tight ">
                    Offer Received
                    <Button variant="outline" className="mt-3 w-10/12">
                        +
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Kanban;
