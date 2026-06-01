import { LightningElement } from 'lwc';
import Contact from '@salesforce/schema/Contact';
import Birthdate from '@salesforce/schema/Contact.Birthdate';
import LastName from '@salesforce/schema/Contact.LastName';
import Description from '@salesforce/schema/Contact.Description';
import Account from '@salesforce/schema/Contact.AccountId';
import Title from '@salesforce/schema/Contact.Title';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class RecordEditFormContact extends LightningElement {

    objectApiName = Contact;
    birthDate = Birthdate;
    lastName = LastName;
    description = Description;
    account = Account;
    title = Title;

    handleSubmit(event){
        event.preventDefault();
        const fields = event.detail.fields;
        console.log('Account Value',+ this.refs.accountName.value);
        console.log('Account Value event',+ fields);
        console.log('fields',event.detail.fields);
        if( this.refs.titleValue.value === 'VIP' && !fields.AccountId){
            this.dispatchEvent(new ShowToastEvent({
                title: 'Information !',
                message: 'Account Name Cant be empty.',
                variant: 'info', // 'success', 'error', 'warning', or 'info'
            }));
        }
        else {
            fields.Title == 'VIP' ? fields.Description = 'VIP DES' : fields.Description = 'General'; 
            
            this.refs.contactForm.submit(fields);
            this.dispatchEvent(new ShowToastEvent({
                title: 'Information !',
                message: 'record submitted.',
                variant: 'success', // 'success', 'error', 'warning', or 'info'
            }));
        }
    }
    handleSuccess(event){
        console.log(event.detail);
        console.log(event.detail.id);
            this.dispatchEvent(new ShowToastEvent({
                title: 'Success !',
                message: 'record submitted successfully.'+event.detail.id ,
                variant: 'success', // 'success', 'error', 'warning', or 'info'
            }));
        }

}