import { Component, OnInit } from '@angular/core';
import { ContactService } from './contact.service';
import { Contact } from './contact.enum';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
    selector: 'app-contacts',
    templateUrl: './contacts.component.html',
    styleUrls: ['./contacts.component.css'],
    providers: [ ContactService ]
})
export class ContactsComponent implements OnInit {
    contacts: Contact[];
    contact: Contact;
    first_name: string;
    last_name: string;
    phone: number;

    con2add: boolean;
    addContactForm: FormGroup;

    constructor(
        private contactSrvc: ContactService,
        private fb: FormBuilder
    ) { this.con2add = false; }

    ngOnInit() {
        // retrieve contacts on start
        this.contactSrvc.getContacts()
            .subscribe( contacts =>
                this.contacts = contacts
            );

        // validate formbuilder form
        this.addContactForm = this.fb.group( {
            name: this.fb.group( {
                first_name: ['', [Validators.required, Validators.minLength( 2)]],
                last_name: ['', [Validators.required, Validators.minLength( 2)]],
                phone: ['', Validators.required]
            })
        });
    }

    addContact() {
        const newContact = {
            first_name: this.first_name,
            last_name: this.last_name,
            phone: this.phone
        };

        if (this.addContactForm.dirty && this.addContactForm.valid) {
            this.contactSrvc.addContacts(newContact)
                .subscribe(contact => {
                    this.contacts.push(contact);
                },
                    err => {
                        console.log('Error: Contact not added...');
                    },
                    () => {
                        this.contactSrvc.getContacts()
                            .subscribe( contacts =>
                                this.contacts = contacts
                            );
                    });
        }
        this.addContactForm.reset();
        this.con2add = false;
    }

    deleteContact(id: any) {
        this.contactSrvc.deleteContacts(id)
            .subscribe( data => {
                if (data.n === 1) {
                    for (let i = 0; i < this.contacts.length; i++) {
                        if (this.contacts[i]['_id'] === id) {
                            this.contacts.splice(i, 1);
                        }
                    }
                    /*this.contacts.forEach( (x) => {
                        if ( x['_id'] === id ) {
                            this.contacts.splice( x, 1 );
                        }

                    });*/
                }
            });
    }

}
