import { LightningElement,track } from 'lwc';

export default class CssBinding extends LightningElement {
    name = 'arsha';
    age = '';
    choosencolor = '';

    

    @track qaSlots={
        session: '8pm',
        slot: 'QA'
    }

    handlerNameChange(event) {
        this.name = event.target.value;
    }

    handlerAgeChange(event) {
        this.age = event.target.value;
    }

    handlerEligibleClick() {
        if (this.age >= 18) {
            this.choosencolor = 'Eligibility-check-green';
        } else {
            this.choosencolor = 'Eligibility-check-red';
        }
    }

    handlerBookSessionClick(event) {
        this.qaSlots.session = event.target.value;
    }
    handlerNameChange(event) {
        this.name = event.target.value;
    }
}
