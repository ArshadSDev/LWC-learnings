import { LightningElement, wire } from 'lwc';
import { getObjectInfo } from "lightning/uiObjectInfoApi";
import ACCOUNT_OBJECT from "@salesforce/schema/Account";
import { getPicklistValues } from "lightning/uiObjectInfoApi";
import INDUSTRY_FIELD from "@salesforce/schema/Account.Industry";

export default class WirePicklistAdapter extends LightningElement {

    recordTypes=[];
    options = [];
    selectedRecordTypeId;
    selectedIndustry;

    @wire(getObjectInfo, { objectApiName: ACCOUNT_OBJECT })
    ObjectInfoFunction({data,error}){
        if(data){
            console.log('from account',data.recordTypeInfos);
            this.recordTypes = data.recordTypeInfos;
            console.log('this.recordTypes',this.recordTypes);
        }else if(error){
            console.error(error);
        }
    }

    get recordtypeArray(){
        return Object.values(this.recordTypes).map(recordType => ({
            label: recordType.name,
            value: recordType.recordTypeId
        }));
    }
    @wire(getPicklistValues, { recordTypeId: "$selectedRecordTypeId", fieldApiName: INDUSTRY_FIELD })
    pickListInfoFunction({data,error}){
        if(data){
            console.log('from picklist values',data.values);
            this.options = data.values;
            console.log('options',this.options);
        }else if(error){
            console.error(error);
        }
    }
    recordTypehandler(event){
        this.selectedRecordTypeId = event.detail.value;
        console.log(this.selectedRecordTypeId);
    }
    handleChange(event){
        this.selectedIndustry = event.detail.value;
    }
}