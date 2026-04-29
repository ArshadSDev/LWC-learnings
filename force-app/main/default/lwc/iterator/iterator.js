import { LightningElement } from 'lwc';

export default class Iterator extends LightningElement {


    lwcConcepts = [
        {
            id: 1,
            Topics: 'Reactivity',
            Concepts:'@api'
        },
        {
            id: 2,
            Topics: 'Lifecycle Hook',
            Concepts:'connectedCallback(), renderedCallback(), disconnectedCallback(), errorCallback()'
        },
        {
            id: 3,
            Topics: 'Event Handling',
            Concepts:'onchange'
        },
        {
            id: 4,
            Topics: 'Data Binding',
            Concepts:'{!data}'
        },
        {   
            id: 5,
            Topics: 'Component Communication',
            Concepts:'Custom Events'
        },
    ];
}