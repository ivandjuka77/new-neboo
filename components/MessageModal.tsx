import React from 'react';

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';

interface message {
    message: string;
}

const MessageModal: React.FC<message> = (props: message) => {
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button variant="outline">Show Message</Button>
            </AlertDialogTrigger>
            <AlertDialogContent className="text-black dark:text-white">
                <AlertDialogHeader>
                    <AlertDialogTitle>Your Message</AlertDialogTitle>
                    <AlertDialogDescription className="whitespace-pre-line ">
                        {props.message}
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction>Copy</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
};

export default MessageModal;
