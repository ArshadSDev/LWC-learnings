import { LightningElement, wire, api } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import { getObjectInfo } from "lightning/uiObjectInfoApi";
import Contact_OBJECT from "@salesforce/schema/Contact";
import Email_FIELD from '@salesforce/schema/Contact.Email';
import LASTNAME_FIELD from '@salesforce/schema/Contact.LastName';
import Phone_FIELD from '@salesforce/schema/Contact.Phone';

export default class WireContactDemo extends LightningElement {

    @api recordId;
    phone;
    email;
    lastName;

    contactFields={};

    @wire(getRecord,{recordId:'$recordId',fields:[Email_FIELD,LASTNAME_FIELD,Phone_FIELD]})
    contactDetailsFun({data,error}){
        if(data)
        {   
            this.email= data.fields.Email.value;
            this.phone = data.fields.Phone.value;
            this.lastName = data.fields.LastName.value;
            console.log('from record api',data);
            console.log('Email :' + data.fields.Email.value);
            console.log('LastName :'+data.fields.LastName.value);
        }
        else if(error)
        {
            console.error(error);
        }
    }
    @wire (getObjectInfo, { objectApiName: Contact_OBJECT }) 
    ContactobjectInfo({data,error}){
        if(data)
        {   
            this.contactFields = data;
            console.log('from object api', data);
        }
        else if(error)
        {
            console.error(error);
        }
    }
    get fieldsArray() {
    return this.contactFields.fields 
        ? Object.values(this.contactFields.fields) 
        : [];
    }
    get fieldsCount() {
        return this.fieldsArray.length;
    }

    get customfieldcount(){
        return this.fieldsArray.filter(field => field.custom).length;
    }
    
    
}