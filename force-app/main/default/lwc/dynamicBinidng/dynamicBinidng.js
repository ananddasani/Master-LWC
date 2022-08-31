import { LightningElement } from 'lwc';

export default class DynamicBinidng extends LightningElement {

    name;
    email;
    password;

    handleChange(event) {

        let res = event.target.name;

        if (res === 'name') {
            this.name = event.target.value;
            console.log('name: ' + this.name);
        }

        if (res === 'email') {
            this.email = event.target.value;
            console.log('email: ' + this.email);
        }

        if (res === 'password') {
            this.password = event.target.value;
            console.log('password: ' + this.password);
        }
    }

    showData = false;
    handleClick(event) {
        this.showData = !this.showData;
    }
}
