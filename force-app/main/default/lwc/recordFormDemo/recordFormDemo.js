import { LightningElement,api } from 'lwc';
// import OPP_OBJ from '@salesforce/schema/Opportunity';
// import NAME_FIELD from '@salesforce/schema/Opportunity.Name';
// import Amount from '@salesforce/schema/Opportunity.Amount';
// import StageName from '@salesforce/schema/Opportunity.StageName';
// import CloseDate from '@salesforce/schema/Opportunity.CloseDate';
// import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class RecordFormDemo extends LightningElement {
    // objectName = OPP_OBJ;
    // fields = [NAME_FIELD, Amount, StageName, CloseDate];
    @api objectApiName;
    @api recordId;
    onSuccessEventHandler(event){
        console.log(event.detail);
        this.dispatchEvent(new ShowToastEvent({
            title: 'Created',
            message: 'Opportunity record created'+event.detail.id,
            variant: 'success', // Options: success, error, warning, info
        }))
    }
}