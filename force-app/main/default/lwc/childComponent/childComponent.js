import { api, LightningElement } from 'lwc';

export default class ChildComponent extends LightningElement {
    @api
    itemName = 'hi from child component';

    @api
    changeItemName() {
        this.itemName = 'Value changed of child component by parent component';
    }
}
