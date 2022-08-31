import { LightningElement, track} from 'lwc';

export default class TrackDecorator extends LightningElement {

    //create a object to use @track decorator
    @track
    fullName = {
        firstName: '',
        lastName: ''
        }

    //change the properties of the object fullName
    handleChange(event) {
        const focus = event.target.name;

        if (focus === 'firstName') {
            this.fullName.firstName = event.target.value;
        }

        if (focus === 'lastName') {
            this.fullName.lastName = event.target.value;
        }
    }
}
