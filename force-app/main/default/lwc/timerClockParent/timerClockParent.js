import { LightningElement } from 'lwc';

export default class TimerClockParent extends LightningElement {

    onClickStart()
    {
        this.refs.child.start();
    }
    onClickStop()
    {
        this.refs.child.stop();
    }   

    onClickReset()
    {
        this.refs.child.reset();
    }
}