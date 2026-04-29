import { LightningElement } from 'lwc';

export default class ParentVolumeComponent extends LightningElement {

    currentSliderValue;
    onChangeEvent(event){
        this.currentSliderValue = event.target.value;
}
}