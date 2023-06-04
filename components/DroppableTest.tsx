// 'use client';

// const jobs = [
//     {
//         id: '1',
//         title: 'Job 1',
//         description: 'Job 1 description',
//     },
//     {
//         id: '2',
//         title: 'Job 2',
//         description: 'Job 2 description',
//     },
//     {
//         id: '3',
//         title: 'Job 3',
//         description: 'Job 3 description',
//     },
// ];

// const DroppableTest = () => {
//     return (
//         <DragDropContext
//             onDragEnd={() => {
//                 console.log('drag ended');
//             }}
//         >
//             <Droppable droppableId="potential" type="group">
//                 {(provided) => (
//                     <div {...provided.droppableProps} ref={provided.innerRef}>
//                         {jobs.map((job, i) => (
//                             <Draggable
//                                 draggableId={i.toString()}
//                                 key={i.toString()}
//                                 index={i}
//                             >
//                                 {(provided) => (
//                                     <div
//                                         {...provided.draggableProps}
//                                         {...provided.dragHandleProps}
//                                         ref={provided.innerRef}
//                                     >
//                                         {job.title}
//                                     </div>
//                                 )}
//                             </Draggable>
//                         ))}
//                     </div>
//                 )}
//             </Droppable>
//         </DragDropContext>
//     );
// };
// export default DroppableTest;
