import { create } from 'zustand';

interface BoardState {
    board: Board;
    getBoard: () => void;
    setBoardState: (board: Board) => void;
    updateJobsinDB: (jobsId: string, columnId: TypedColumn) => void;
}

export const useBoardStore = create<BoardState>((set) => ({
    board: {
        columns: Array<Column>(),
    },
    getBoard: async () => {
        const board = await fetch(
            window.location.origin + '/api/getJobsByCol'
        ).then((res) => res.json());

        console.log(board, 'board');

        set({ board });
    },

    setBoardState: (board: Board) => set({ board }),
    updateJobsinDB(jobsId, columnId) {
        fetch(window.location.origin + '/api/updateJobs', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ jobsId, columnId }),
        });
    },
}));
