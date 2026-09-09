import { LightningElement, wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';

export default class WireContactDemo extends LightningElement {

    @wire(getRecord,{recordId:'003dM000024DwsVQAS',fields:['Contact.LastName','Contact.Email']})
    contactDetailsFun({data,error}){
        if(data)
        {
            console.log(data);
            console.log('Email :' + data.fields.Email.value);
            console.log('LastName :'+data.fields.LastName.value);
        }
        else if(error)
        {
            console.error(error);
        }
    }
}