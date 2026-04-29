import { LightningElement } from 'lwc';

export default class Binding extends LightningElement {
    firstName = '';
    lastName = '';
    age = '';
    qualification = '';
    showDetails = false; // controls whether the resume card is visible
    
    handlerFirstNameChange(event) {
        this.firstName = event.target.value;
    }
    handlerLastNameChange(event) {
        this.lastName = event.target.value;
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    
    handlerAgeChange(event) {
        this.age = event.target.value;
    }
    
    handlerQualificationChange(event) {
        this.qualification = event.target.value;
    }

    handlerSubmitClick() {
        // show the card with entered details
        this.showDetails = true;
    }

}