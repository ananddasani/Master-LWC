import { LightningElement } from 'lwc';

export default class HelloWorld extends LightningElement {

    name = ''

    //function that handles the onChange
    onChangeHandler(event) {
        console.log(event.target.value);
        this.name = event.target.value;
    }
}
