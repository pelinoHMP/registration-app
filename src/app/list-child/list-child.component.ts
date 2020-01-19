import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { studentInfo } from '../registration-parent/model';  
@Component({
  selector: 'app-list-child',
  templateUrl: './list-child.component.html',
  styleUrls: ['./list-child.component.css']
})
export class ListChildComponent implements OnInit {
  @Input() information: Array<studentInfo>;
  index: number;
  @Output() studentEditEvent= new EventEmitter();
  public studentInformation:string;

  ngOnInit() {
  }
  constructor() {
   }
  onEdit(studentInfo){
    this.studentEditEvent.emit(studentInfo);
    this.index= this.information.indexOf(studentInfo);
    this.information.splice(this.index)
    console.log(this.studentEditEvent);
  }
}
