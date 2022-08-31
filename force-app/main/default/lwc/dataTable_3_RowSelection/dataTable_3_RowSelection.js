import { api, LightningElement, track } from 'lwc';
import getContact from '@salesforce/apex/DataTableThree.getContact';

const columns = [
    {label: 'Name', fieldName: 'Name'},
    {label: 'Phone Number', fieldName: 'Phone'}
]

export default class DataTable_3_RowSelection extends LightningElement {

    @track columns = columns;
    @track data;

    connectedCallback() {
        getContact()
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
