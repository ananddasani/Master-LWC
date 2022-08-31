import { LightningElement, track, wire } from 'lwc';
import getAccounts from '@salesforce/apex/dataTableOne.getAccounts';

const columns = [
    {label: 'Name', fieldName: 'Name'},
    {label: 'Id', fieldName: 'Id'}
]
export default class DataTable_1_Wire extends LightningElement {

    @track columns = columns;
    @track data;

    @wire(getAccounts)
    fetchAccounts({error, data}) {
        if (error) {
            this.error = error;
            console.error(error);
        } else {
            this.data = data;
        }
    }

}
