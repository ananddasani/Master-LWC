import { LightningElement, wire } from 'lwc';
import  getContact  from '@salesforce/apex/GetContacts.getContact';

export default class ApexAndContact extends LightningElement {

    viewData;

    @wire(getContact)
    showContacts({ error, data }) {
        if (error) {
            console.log(error);
        } else if (data) {
            this.viewData = data;
            console.log(data);
        }
    }
}
