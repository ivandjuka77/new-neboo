import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { JobCard } from '@/components/JobCard';

const Kanban = () => {
    return (
        <div className="flex flex-row">
            <div className="items-left flex flex-col col-span-1 w-[100px]  border-r pt-10 transition-all text-transparent delay-200 hover:w-[300px] hover:text-white">
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
            <div className="grid h-screen w-screen grid-cols-5 ">
                <div className="flex flex-col items-center border-r font-bold pt-5 tracking-tight  ">
                    Potential Jobs
                    <Button variant="outline" className="w-10/12 mt-3">
                        +
                    </Button>
                    <JobCard />
                </div>
                <div className="flex flex-col items-center border-r font-bold   pt-5  tracking-tight  ">
                    Message Sent
                    <Button variant="outline" className="w-10/12 mt-3">
                        +
                    </Button>
                </div>
                <div className="flex flex-col items-center border-r font-bold   pt-5  tracking-tight  ">
                    Screening Call
                    <Button variant="outline" className="w-10/12 mt-3">
                        +
                    </Button>
                </div>
                <div className="flex flex-col items-center border-r font-bold   pt-5  tracking-tight  ">
                    Interview
                    <Button variant="outline" className="w-10/12 mt-3">
                        +
                    </Button>
                </div>
                <div className="flex flex-col items-center border-r font-bold  pt-5   tracking-tight ">
                    Offer Received
                    <Button variant="outline" className="w-10/12 mt-3">
                        +
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Kanban;
