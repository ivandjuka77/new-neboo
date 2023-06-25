import { Draggable, Droppable } from 'react-beautiful-dnd';

import AddJobButton from './AddJobButton';
import { JobCard } from './JobCard';
import { Icons } from './icons';

const idToColumnText: {
    [key: string]: string;
} = {
    potential: 'Potential Jobs',
    messageSent: 'Message Sent',
    call: 'Call',
    interview: 'Interview',
    offer: 'Offer',
};

const JobsColumn = (props: any) => {
    return (
        <div className="flex flex-col items-center border-r pt-5 font-bold tracking-tight">
            {idToColumnText[props.id]}
            <span>{props.job.length}</span>
            <AddJobButton />
            <Droppable droppableId={props.id.toString()} type="card">
                {(provided, snapshot) => (
                    <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        className={`duration-400 mt-5 h-full w-9/12 rounded-lg pb-5 transition ease-in-out ${
                            snapshot.isDraggingOver ? 'bg-gray-900' : ''
                        }`}
                    >
                        {props.job.map((job: any, i: number) => (
                            <Draggable
                                key={job.id}
                                index={i}
                                draggableId={job.id}
                            >
                                {(provided) => (
                                    <div
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        ref={provided.innerRef}
                                        className=" mt-5 flex w-full flex-row items-center"
                                    >
                                        <div>
                                            <Icons.grip className="mr-1" />
                                        </div>
                                        <JobCard job={job} />
                                    </div>
                                )}
                            </Draggable>
                        ))}

                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </div>
    );
};
export default JobsColumn;
