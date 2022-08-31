import { LightningElement } from 'lwc';
import { showToastEvent } from 'lightning/platformShowToastEvent';

export default class ButtonAndToast extends LightningElement {

    clickedButtonLabel;

    handleClick(event) {
        this.clickedButtonLabel = event.target.label;
        this.showToast();
    }

    showToast() {
        //showing the toast
        const event = new showToastEvent(
            {
                title: 'Toast Demo',
                message: 'This is success toast',
                variant: 'success'
            }
        )
        this.dispatchEvent(event);
    }
}
