import { LightningElement } from 'lwc';

export default class ParentToChildCommunication extends LightningElement {

    handleClick() {
        this.template.querySelector("c-child-component").changeItemName();
    }
}
