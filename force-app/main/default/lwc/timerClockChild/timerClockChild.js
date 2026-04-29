import { LightningElement,api } from 'lwc';

export default class TimerClockChild extends LightningElement {
    minutes = 0;
    seconds = 0;
    stopInterval;

    @api start(){
        this.stopInterval=setInterval(() => {
            this.seconds++; 
            if(this.seconds === 60){
                this.seconds = 0;
                this.minutes++;
            }
        }, 1000);
    }
    @api stop(){
        clearInterval(this.stopInterval);
    }
    @api reset(){
        this.minutes = 0;
        this.seconds = 0;
        clearInterval(this.stopInterval);
    }

}