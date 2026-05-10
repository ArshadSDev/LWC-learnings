import { LightningElement,track } from 'lwc';


export default class ModalScreenChild extends LightningElement {

    timer=0;
    stoptimer;
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

    connectedCallback(){
        console.log("connected call back called and timer called");
        this.stopclock();
    }

    stopclock(){
        this.stoptimer=setInterval(() => {
            this.timer++;
        }, 1000);
    }

    disconnectedCallback(){
        console.log("Component removed from dom");
        clearInterval(this.stoptimer);
        console.log('Time cleared at',this.timer);
    }

}