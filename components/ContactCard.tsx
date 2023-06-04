import { Check, ChevronsUpDown } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
} from '@/components/ui/command';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover';

import AddContact from './AddContact';

const contacts = [
    {
        value: 'John Doe',
        label: 'john-doe',
    },
    {
        value: 'Guy Fieri',
        label: 'guy-fieri',
    },
    {
        value: 'Gordon Ramsay',
        label: 'gordon-ramsay',
    },
    {
        value: 'Bobby Flay',
        label: 'bobby-flay',
    },
    {
        value: 'Anthony Bourdain',
        label: 'anthony-bourdain',
    },
];

const ContactCard = ({ className, ...props }: CardProps) => {
    const contact = false;
    return (
        <Card className={cn('mt-5', className)} {...props}>
            <CardHeader>
                <CardTitle className="text-left text-2xl">Contact</CardTitle>
                <CardDescription>
                    {contact ? (
                        <div className="mt-3 flex flex-col text-left">
                            <span className="text-lg font-bold tracking-tight">
                                Name: John Doe
                            </span>

                            <span className="text-lg font-bold tracking-tight">
                                Position: Recruiter
                            </span>
                        </div>
                    ) : (
                        <AddContact />
                    )}
                </CardDescription>
            </CardHeader>
            {contact ? (
                <CardFooter>
                    <div className=" flex items-center space-x-2">
                        <Button variant="outline" className="mr-3">
                            Show Message
                        </Button>
                        <Checkbox id="message" />
                        <label
                            htmlFor="message"
                            className="text-md font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            Message sent
                        </label>
                    </div>
                </CardFooter>
            ) : (
                ''
            )}
        </Card>
    );
};
export default ContactCard;
