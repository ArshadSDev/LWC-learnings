import { LightningElement,wire,api } from 'lwc';
import { getRecord, getFieldValue  } from 'lightning/uiRecordApi';
import { ShowToastEvent } from "lightning/platformShowToastEvent";
import 	Name__c_FIELD from "@salesforce/schema/Employee__c.Name__c";
import 	Age__c_FIELD from "@salesforce/schema/Employee__c.Age__c";
import 	State__c_FIELD from "@salesforce/schema/Employee__c.State__c";

export default class EmployeeEligiblityWire extends LightningElement {

    @api recordId;
    

    @wire(getRecord, { recordId: "$recordId",fields: [Name__c_FIELD, Age__c_FIELD ,State__c_FIELD]})
    contactRec;

    get empName(){
        return getFieldValue(this.contactRec.data ,Name__c_FIELD );
    }
    get empAge(){
        return getFieldValue(this.contactRec.data ,Age__c_FIELD );
    }   
    get empState(){
        return getFieldValue(this.contactRec.data ,State__c_FIELD );
    }

    handleOnclick() {
        if(this.empAge > 23){
            this.showNotification('Eligible', 'Employee is eligible','success');
        }
        else {
            this.showNotification('Not Eligible', 'Employee is not eligible','warning');
        }
    }

    showNotification(titleText,messageText,variant) {
    const evt = new ShowToastEvent({
      title: titleText,
      message: messageText,
      variant: variant,
    });
    this.dispatchEvent(evt);
  }
}