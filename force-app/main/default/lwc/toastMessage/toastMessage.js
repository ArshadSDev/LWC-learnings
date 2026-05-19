import { LightningElement } from 'lwc';
import {ShowToastEvent } from 'lightning/platformShowToastEvent';
export default class ToastMessage extends LightningElement {

    label;
    handleToastClick(event){
        
        this.label=event.target.label;
        switch(this.label){
            case 'Success':
                this.ToastEventPass('success','{0} Succesfully record created. {1}','success')
            break ;
            case 'Error':
                this.ToastEventPass('Error','unable to create record','error')
            break ;
            case 'Info':
                this.ToastEventPass('Information','Need to create record','info')
            break ;
            case 'Warning':
                this.ToastEventPass('Warning','scheduled time is getting near','warning')
            break ;
            default:
                break;
        }
    }

    ToastEventPass(title,message,variant){
        if(title=== 'Error'){
            this.dispatchEvent(new ShowToastEvent({
                        title:title,
                        message:message,
                        variant:variant,
                        mode:"sticky"
                    }))
        }
        else{
                this.dispatchEvent(new ShowToastEvent({
                title:title,
                message:message,
                variant:variant,
                messageData:[
                    'Salesforce',
                    {
                        url:'https://developer.salesforce.com/docs/platform/lightning-component-reference/guide/lightning-platform-show-toast-event.html?type=Develop',
                        label: "CLick Here"
                    }
                ]
            }))
        }
    }
}