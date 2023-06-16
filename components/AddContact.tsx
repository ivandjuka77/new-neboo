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

const AddContact = ({ contacts, jobId }: any) => {
    console.log(contacts, 'contactssssss');
    console.log(jobId, 'jobId');
    // console.log(contacts, 'contactsss');

    const [open, setOpen] = useState(false);
    const [closed, setClosed] = useState(false);
    const [contactInfo, setContactInfo] = useState({
        id: '',
        name: '',
        jobCompanyName: '',
        jobTitle: '',
        message: '',
        link: '',
    });

    const handleContactChange = (e: any) => {
        fetch(`http://localhost:3000/api/jobs`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },

            body: JSON.stringify({
                targetJobId: jobId,
                targetContactId: contactInfo.id,
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
            });
    };

    return (
        <div className="mt-3 flex flex-col text-left ">
            {closed ? (
                <div className="flex flex-col text-left ">
                    <div className="flex flex-col justify-between">
                        <div className="flex flex-col">
                            <div className="text-xl font-bold">
                                {contactInfo.name}
                            </div>
                            <div className="text-lg">
                                {contactInfo.jobCompanyName}
                            </div>
                        </div>
                        <div className="mt-3 flex flex-row">
                            <Button
                                variant="outline"
                                className="mr-2"
                                onClick={() => setClosed(false)}
                            >
                                Edit
                            </Button>
                            <Button variant="outline">
                                <Check
                                    onClick={handleContactChange}
                                    className="h-4 w-4"
                                />
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
                                className="w-[200px] justify-between"
                            >
                                {contactInfo.name
                                    ? contactInfo.name
                                    : 'Select framework...'}
                                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-[200px] p-0">
                            <Command>
                                <CommandInput placeholder="Search framework..." />
                                <CommandEmpty>No framework found.</CommandEmpty>
                                <CommandGroup>
                                    {contacts.map((contact: any) => (
                                        <CommandItem
                                            key={contact.id}
                                            onSelect={(currentName) => {
                                                setContactInfo(
                                                    currentName ===
                                                        contactInfo.name
                                                        ? {
                                                              id: '',
                                                              name: '',
                                                              jobCompanyName:
                                                                  '',
                                                              jobTitle: '',
                                                              message: '',
                                                              link: '',
                                                          }
                                                        : {
                                                              id: contact.id,
                                                              name: contact.name,
                                                              jobCompanyName:
                                                                  contact.jobCompanyName,
                                                              jobTitle:
                                                                  contact.jobTitle,
                                                              message:
                                                                  contact.message,
                                                              link: contact.link,
                                                          }
                                                );
                                                setOpen(false);
                                                setClosed(true);
                                            }}
                                        >
                                            <Check
                                                className={cn(
                                                    'mr-2 h-4 w-4',
                                                    contactInfo.name ===
                                                        contact.name
                                                        ? 'opacity-100'
                                                        : 'opacity-0'
                                                )}
                                            />
                                            {contact.name}
                                        </CommandItem>
                                    ))}
                                </CommandGroup>
                            </Command>
                        </PopoverContent>
                    </Popover>

                    <Button variant="outline" className="mt-5 w-1/2" disabled>
                        Add New
                    </Button>
                </div>
            )}
        </div>
    );
};
export default AddContact;
