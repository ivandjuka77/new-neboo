'use client';

import { useState } from 'react';
import { Check, ChevronsUpDown } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
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

const contacts = [
    {
        value: 'john-doe',
        label: 'John Doe',
        position: 'Software Engineer',
    },
    {
        label: 'Guy Fieri',
        value: 'guy-fieri',
        position: 'Chef',
    },
    {
        label: 'Gordon Ramsay',
        value: 'gordon-ramsay',
        position: 'Chefino',
    },
    {
        label: 'Bobby Flay',
        value: 'bobby-flay',
        position: 'Chefesseninho',
    },
    {
        label: 'Anthony Bourdain',
        value: 'anthony-bourdain',
        position: 'Chefesseur',
    },
];

const AddContact = () => {
    const [open, setOpen] = useState(false);
    const [closed, setClosed] = useState(false);
    const [contactInfo, setContactInfo] = useState({
        value: '',
        label: '',
        position: '',
    });
    return (
        <div className="mt-3 flex flex-col text-left ">
            {closed ? (
                <div className="flex flex-col text-left ">
                    <div className="flex flex-col justify-between">
                        <div className="flex flex-col">
                            <div className="text-xl font-bold">
                                {contactInfo.label}
                            </div>
                            <div className="text-lg">
                                {contactInfo.position}
                            </div>
                        </div>
                        <div className="flex flex-row mt-3">
                            <Button
                                variant="outline"
                                className="mr-2"
                                onClick={() => setClosed(false)}
                            >
                                Edit
                            </Button>
                            <Button variant="outline">
                                <Check className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                </div>
            ) : (
                <div>
                    <Popover open={open} onOpenChange={setOpen}>
                        <PopoverTrigger asChild>
                            <Button
                                variant="outline"
                                role="combobox"
                                aria-expanded={open}
                                className="w-[200px] justify-between "
                            >
                                {contactInfo
                                    ? contacts.find(
                                          (contact) =>
                                              contact.value ===
                                              contactInfo.value
                                      )?.label
                                    : 'Select contact...'}
                                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-[200px] p-0">
                            <Command>
                                <CommandInput placeholder="Search contact..." />
                                <CommandEmpty>No contact found.</CommandEmpty>
                                <CommandGroup>
                                    {contacts.map((contact) => (
                                        <CommandItem
                                            key={contact.value}
                                            onSelect={(currentValue) => {
                                                setContactInfo(
                                                    currentValue ===
                                                        contactInfo.value
                                                        ? {
                                                              value: '',
                                                              label: '',
                                                              position: '',
                                                          }
                                                        : {
                                                              ...contact,
                                                              value: currentValue,
                                                          }
                                                );
                                                setOpen(false);
                                                setClosed(true);
                                            }}
                                        >
                                            <Check
                                                className={cn(
                                                    'mr-2 h-4 w-4',
                                                    contactInfo.value ===
                                                        contact.value
                                                        ? 'opacity-100'
                                                        : 'opacity-0'
                                                )}
                                            />
                                            {contact.label}
                                        </CommandItem>
                                    ))}
                                </CommandGroup>
                            </Command>
                        </PopoverContent>
                    </Popover>

                    <Button variant="outline" className="w-1/2 mt-5" disabled>
                        Add New
                    </Button>
                </div>
            )}
        </div>
    );
};
export default AddContact;
