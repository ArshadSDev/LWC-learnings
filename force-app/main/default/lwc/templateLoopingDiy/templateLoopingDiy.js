import { LightningElement,track } from 'lwc';

export default class TemplateLoopingDiy extends LightningElement {
    name;
    source;
    revenue;
    email;

    showLeads = false;

    @track leads=[
        {
            name:'Arshveer Kaur',
            source:'LinkedIn',
            revenue:'1000',
            email:'arshveer.kaur@example.com'
        }
    ];

    handleChangeName(event) {
        this.name = event.target.value;
    }
    handleChangeSource(event) {
        this.source = event.target.value;
    }
    handleChangeRevenue(event) { 
        this.revenue = event.target.value;
    }
    handleChangeEmail(event) {
        this.email = event.target.value;
    }
    get isFormFilled() {
         return this.name && this.source && this.revenue && this.email;
    }

    addLead(event) {
        console.log(this.name, this.source, this.revenue, this.email);
        if (this.isFormFilled) {
        const newLead = {
            name: this.name,
            source: this.source,
            revenue: this.revenue,
            email: this.email
        };
        this.leads = [...this.leads, newLead];
        this.name = '';
        this.source = '';
        this.revenue = '';
        this.email = '';
        this.template.querySelector('.js-name').value = '';
        this.template.querySelector('.js-source').value = '';
        this.template.querySelector('.js-revenue').value = '';
        this.template.querySelector('.js-email').value = '';
        }
        else{
            alert('Please fill in all the fields before adding a lead.');
        }

    }


    displayLeads(event) {
        console.log('hi');
        console.log('Displaying leads...');
        this.showLeads = !this.showLeads;
        // return true;
    }
}
