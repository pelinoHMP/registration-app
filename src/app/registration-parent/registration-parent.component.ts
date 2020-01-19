import { Component, OnInit } from '@angular/core';
import { studentInfo } from '../registration-parent/model';  

@Component({
  selector: 'app-registration-parent',
  templateUrl: './registration-parent.component.html',
  styleUrls: ['./registration-parent.component.css']
})
export class RegistrationParentComponent implements OnInit {
  public fullname:string;
  public age:number;
  public contact:string;
  public course:string;
  public year:string;
  public genderSelected:string;
  public emailAddress:string;
  public info : studentInfo;
  public listStudent:any[]=[]

  constructor() { 
  this.info = new studentInfo()
}

ngOnInit() {
}

onSubmit(sampleForm){
  this.info = {
    fullname:this.fullname,
    age:this.age,
    gender:this.genderSelected,
    contact:this.contact,
    email:this.emailAddress,
    course:this.course,
    year:this.year,
  }
  sampleForm.form.reset()
  this.listStudent.push(this.info)
  console.log('sent');
  
}
getInformation(studentInfo){
  console.log('Received: ' , studentInfo);
  this.fullname = studentInfo.fullname;
  this.age = studentInfo.age;
  this.genderSelected =studentInfo.gender;
  this.contact= studentInfo.contact;
  this.emailAddress=studentInfo.email;
  this.course= studentInfo.course;
  this.year= studentInfo.year;

  this.listStudent= this.listStudent.filter(item => {
    if(item!= studentInfo){
      return item;
    }
  })
}

}
