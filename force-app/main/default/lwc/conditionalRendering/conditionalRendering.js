import { LightningElement } from 'lwc';

export default class ConditionalRendering extends LightningElement {

    checked = false;

    handleChecked(event) {
        this.checked = event.target.checked;
    }
}
