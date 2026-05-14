import { LightningElement } from 'lwc';
import enrollmentFormTemplate from './enrollmentForm.html'
import aluminiFormTemplate from './aluminiForm.html'
import mainTemplate from './demoRender.html'
export default class DemoRender extends LightningElement {
    chooseTemplate;

    render(){
        return this.chooseTemplate === 'Enrollment'?enrollmentFormTemplate:
                this.chooseTemplate === 'Alumini'?aluminiFormTemplate: mainTemplate;
    }

    handleClick(event){
        this.chooseTemplate= event.target.label;
    }
}