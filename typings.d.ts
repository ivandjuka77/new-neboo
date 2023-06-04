interface Board {
    columns: Column[];
}

type TypedColumn = 'potential' | 'messageSent' | 'call' | 'interview' | 'offer';

interface Column {
    id: TypedColumn;
    job: Job[];
}

interface Job {
    id: string;
    url: string;
    title: string;
    companyName: string;
    location: string;
    type: string;
    userId: string;
    contact: string;
    notes: string;
    status: string;
    createdAt: Date;
}

type CardProps = React.ComponentProps<typeof Card>;
