import { LightningElement } from 'lwc';

export default class ConditionalRendering extends LightningElement {
    isShoppingChecked=false;
    isReadingChecked=false;

    handleShoppingChange(event) {
        this.isShoppingChecked = event.target.checked;
        this.isReadingChecked = false;
        // this.template.querySelector('.js-readingCheckbox').checked = false;
        this.refs.refreadingBox.checked = false;
       
    }

    handleReadingChange(event) {
        this.isReadingChecked = event.target.checked;
        this.isShoppingChecked = false;
        // this.template.querySelector('.js-shoppingCheckbox').checked = false;
        this.refs.refshoppingBox.checked = false;
    }

    
}