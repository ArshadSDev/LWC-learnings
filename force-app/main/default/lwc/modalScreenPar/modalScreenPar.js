import { LightningElement,track } from 'lwc';


export default class ModalScreenPar extends LightningElement {
    showChildModal = false;
    @track parentArray =[];
    handleOpenModal() {
        this.showChildModal = true;
    }

    handleCloseEvent(event){
        this.showChildModal=false;


        let my=event.detail;

        my.forEach(item => {
            console.log(item);
            this.parentArray=[...this.parentArray, item];
        });
        
    }
}