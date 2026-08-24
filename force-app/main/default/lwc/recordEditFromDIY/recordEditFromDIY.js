import { LightningElement,api} from 'lwc';
import firstName from '@salesforce/schema/Contact.FirstName';
import LastName from '@salesforce/schema/Contact.LastName';
import source from '@salesforce/schema/Contact.Source__c';
import email from '@salesforce/schema/Contact.Email';
import phone from '@salesforce/schema/Contact.Phone';
import accountName from '@salesforce/schema/Contact.AccountId';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';


export default class RecordEditFromDIY extends LightningElement {

    @api objectApiName;
    @api recordId;
    firstName = firstName;
    lastName = LastName;
    source = source; 
    email = email;
    phone = phone;
    accountName = accountName;
    
    handleSubmitform(event){
        event.preventDefault()
        const fields= event.detail.fields;
        console.log(fields);
        console.log(this.refs.sourceValue.value);
        console.log('from refs')

        const SourceVal= this.refs.sourceValue.value
        if(SourceVal === 'Web' && !fields.Email)
        {
            this.toastMessageHandler('Information !','Email cant be empty','info')
        }
        else if( SourceVal === 'Phone Inquiry' && !fields.Phone){
            this.toastMessageHandler('Information !','Phone cant be empty','info')
        }
        else{
            this.refs.contactForm.submit(fields);
            
        }
    }
    handleSuccessForm(){
            this.toastMessageHandler('Success !','Successfully updated','success');
        }

    toastMessageHandler(title,message,Variant){
        this.dispatchEvent(new ShowToastEvent({
                title: title,
                message: message,
                variant: Variant, // 'success', 'error', 'warning', or 'info'
            }));
    }

    //cancel button to get back to old values
    handleOnClickEvent(event){
        const inputFields = this.template.querySelectorAll('lightning-input-field');
        console.log(inputFields);
        inputFields.forEach(field => field.reset());
    }
}