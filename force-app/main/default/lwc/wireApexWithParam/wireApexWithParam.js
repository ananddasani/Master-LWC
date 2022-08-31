import { LightningElement, wire } from 'lwc';
import getAccounts from '@salesforce/apex/AccountData.getAccounts';

export default class WireApexWithParam extends LightningElement {

    viewData;
    searchKey = '';

    @wire(getAccounts, {name: '$searchKey'})
    showAccountData({error, data}) {
        this.viewData = data;
        if (error) {
            this.error = error;
        } else {
            this.viewData = data;
            console.log(this.viewData);
        }
    }

    handleSearch(event) {
        this.searchKey = event.target.value;
    }
}
