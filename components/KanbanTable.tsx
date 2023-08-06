'use client';

import { useEffect } from 'react';
import { useBoardStore } from '@/store/BoardStore';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';

import JobsColumn from './JobsColumn';

const KanbanTable = () => {
    const [getBoard] = useBoardStore((state) => [state.getBoard]);
    const setBoardState = useBoardStore((state) => state.setBoardState);
    const [board] = useBoardStore((state) => [state.board]);
    const updateJobsinDB = useBoardStore((state) => state.updateJobsinDB);

    useEffect(() => {
        getBoard();
    }, [getBoard]);

    const handleOnDragEnd = (result: DropResult) => {
        const { source, destination, draggableId } = result;

        // dropped outside the list
        if (!destination) return;

        const sourceColumn = board?.columns.find(
            (column) => column.id === source.droppableId
        );

        const destinationColumn = board?.columns.find(
            (column) => column.id === destination.droppableId
        );

        if (!sourceColumn || !destinationColumn) return;

        if (
            source.index === destination.index &&
            sourceColumn === destinationColumn
        )
            return;

        const newJobs = sourceColumn.job;
        const [removed] = newJobs.splice(source.index, 1);

        if (sourceColumn === destinationColumn) {
            newJobs.splice(destination.index, 0, removed);
            const newColumn = {
                id: sourceColumn.id,
                job: newJobs,
            };

            const newColumns = board?.columns.map((column) => {
                if (column.id === newColumn.id) {
                    return newColumn;
                }
                return column;
            });

            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });

            setBoardState({ ...board, columns: newColumns });
        } else if (sourceColumn !== destinationColumn) {
            const newDestinationJobs = destinationColumn.job;
            newDestinationJobs.splice(destination.index, 0, removed);

            const newSourceColumn = {
                id: sourceColumn.id,
                job: newJobs,
            };

            const newDestinationColumn = {
                id: destinationColumn.id,
                job: newDestinationJobs,
            };

            const newColumns = board?.columns.map((column) => {
                if (column.id === newSourceColumn.id) {
                    return newSourceColumn;
                } else if (column.id === newDestinationColumn.id) {
                    return newDestinationColumn;
                }
                return column;
            });

            // window.scrollTo(window.scrollX, 0);
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });

            // update the moved job to the new column
            updateJobsinDB(draggableId, destinationColumn.id);

            setBoardState({ ...board, columns: newColumns });
        }
    };
    return (
        <div className=" ml-[100px] grid w-[2000px] grid-cols-5 overflow-y-hidden ">
            {
                <DragDropContext onDragEnd={handleOnDragEnd}>
                    {board?.columns.map((column, i) => (
                        <JobsColumn
                            key={column.id}
                            job={column.job}
                            id={column.id}
                            index={i}
                        />
                    ))}
                </DragDropContext>
            }
        </div>
    );
};
export default KanbanTable;
