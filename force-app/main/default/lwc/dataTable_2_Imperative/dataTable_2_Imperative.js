import { LightningElement, track } from 'lwc';
import getAccounts from '@salesforce/apex/dataTableOne.getAccounts';

const columns = [
    {label: 'Name', fieldName: 'Name'},
    {label: 'Id', fieldName: 'Id'}
]

export default class DataTable_2_Imperative extends LightningElement {
    @track columns = columns;
    @track data;

    connectedCallback() {
        getAccounts()
            .then(data => { this.data = data; })
            .catch(error => { this.error = error; });
    }

}
