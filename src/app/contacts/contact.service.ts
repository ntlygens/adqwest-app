import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Contact } from './contact.enum';
import 'rxjs/add/operator/map';


@Injectable()
export class ContactService {

    constructor( private http: Http) { }


    // retrieve Contacts
    getContacts() {
        return this.http.get('http://localhost:3000/api/contacts')
            .map( res => res.json());
    }

    // add contacts
    addContacts(newContact) {
        const headers = new Headers();
        headers.append('Content-type', 'application/json');
        return this.http.post('http://localhost:300/api/contacts', newContact)
            .map(res => res.json());
    }

    // delete contact
    deleteContacts(id) {
        return this.http.delete('http://localhost:3000/api/contacts/' + id)
            .map( res => res.json());
    }
}
