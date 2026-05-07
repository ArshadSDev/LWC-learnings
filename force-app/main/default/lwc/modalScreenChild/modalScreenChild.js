import { LightningElement,track } from 'lwc';


export default class ModalScreenChild extends LightningElement {


    @track myarray=[]
    handleClickEvent(){

        this.dispatchEvent(new CustomEvent('close',{detail:this.myarray}));
    }

    handleCheckBoxLow(event){
        if(event.target.checked){
            //console.log(event.target.label);
            this.myarray.push(event.target.label);
        }
        else{
            this.myarray=this.myarray.filter(item => item!=event.target.label);
        }
        console.log(JSON.stringify(this.myarray));
        // console.log(event.target.label); // Logs the label of the checkbox
    }
    handleCheckBoxMedium(event){
        if(event.target.checked){
        this.myarray.push(event.target.label);

        }
        else{
            this.myarray=this.myarray.filter(item => item!=event.target.label);
        }
        console.log(JSON.stringify(this.myarray));
    }
    handleCheckBoxHigh(event){
        if(event.target.checked){
        this.myarray.push(event.target.label);
        }
    else{
            this.myarray=this.myarray.filter(item => item!=event.target.label);
        }
        console.log(JSON.stringify(this.myarray));
    }
}