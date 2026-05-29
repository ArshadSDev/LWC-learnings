import { LightningElement,api } from 'lwc';
import objectName from '@salesforce/schema/Employee__c'
import Name from '@salesforce/schema/Employee__c.Name__c';
import Age from '@salesforce/schema/Employee__c.Age__c';
import Department from '@salesforce/schema/Employee__c.Department__c';
import joing_date from '@salesforce/schema/Employee__c.Joining_Date__c';
import State from '@salesforce/schema/Employee__c.State__c';
export default class RecordViewFormDemo extends LightningElement {

    @api recordId;
    @api objectApiName=objectName;

    name=Name;
    Age = Age;
    Departments=Department;
    joiningDate=joing_date;
    state = State;
}