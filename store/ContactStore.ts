import { create } from 'zustand';

interface ContactState {
    contacts: Array<Contact>;
    contact: Contact;
    getContacts: () => void;
    setContact: (contactId: string) => void;
    updateContact: (contact: Contact) => void;
}

export const useContactStore = create<ContactState>((set) => ({
    contacts: Array<Contact>(),
    contact: {} as Contact,
    getContacts: async () => {
        console.log('gett')
        // fetch contacts with get method
        const contacts = await fetch(window.location.origin + '/api/people', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((res) => res.json());



        console.log(contacts, 'contacts store');

        set({ contacts });
    },

    setContact: async (contactId: string) => {
        // fetch contacts with get method
        const contact = await fetch(window.location.origin + `/api/contacts?contactId=${contactId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            
        }).then((res) => res.json());

        console.log(contact, 'contacts store');

        set({ contact });
    },

    updateContact: async (contact: Contact) => {
        // fetch contacts with get method
        const contacts = await fetch(window.location.origin + '/api/people', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(contact),
        }).then((res) => res.json());

        console.log(contacts, 'contacts store');

        set({ contacts });
    }

}));
