import { Loader2 } from 'lucide-react';

const loading = () => {
    return (
        <div className=" h-[calc(100vh-72px)] flex items-center justify-center ">
            <div className="scale-[2]">
                <Loader2 className="h-3 w-4 animate-spin " />
            </div>
        </div>
    );
};
export default loading;
