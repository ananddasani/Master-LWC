import { LightningElement, track, api } from 'lwc';
import getContact from '@salesforce/apex/RelatedContacts.getRelatedContacts';

const columns = [
    {label: 'Name', fieldName: 'Name'},
    {label: 'Phone Number', fieldName: 'Phone'}
]

export default class RelatedContactsDataTable extends LightningElement {

    @track columns = columns;
    @track data;

    @api recordId;

    connectedCallback() {
        getContact({accId: this.recordId})
            .then((contacts) => { this.data = contacts; })
            .catch((error) => {
                console.log(error);
                this.error = error;
            })
    }

    handleRowSelection(event) {
        let res = event.detail.selectedRows;
        window.alert(JSON.stringify(res));
    }
}
