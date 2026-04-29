import { LightningElement,track } from 'lwc';

export default class TemplateLooping extends LightningElement {
    @track courses = [];
    @track newCourse = "";
    studentDetails = [{
        rollno:1,
        name:"Arshveer",
        course:"Salesforce"
    },
    {
        rollno:2,
        name:"John",
        course:"Java"
    },
    {
        rollno:3,
        name:"Jane",
        course:"Python"
    }
    ];

    
    handleChange(event) {
        this.newCourse = event.target.value;
    }
    addCourse(event) {
        if(this.newCourse != "") {
            this.courses.push(this.newCourse);
            this.newCourse = "";  
            console.log("ADDED COURSE: ");
        }
        
        console.log(this.courses);
    }
    get isArrayEmpty() {
        return this.courses.length>0;
    }
}