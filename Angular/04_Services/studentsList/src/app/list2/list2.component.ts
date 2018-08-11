import { Component, OnInit } from '@angular/core';
import { Student } from '../Student';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-list2',
  templateUrl: './list2.component.html',
  styleUrls: ['./list2.component.css']
})
export class List2Component implements OnInit {

  public students: Array<Student> = [];
  public name: string = '';
  public age: number = null;

  constructor(private studentsList: StudentsService) { }

  ngOnInit() {
    this.students = this.studentsList.getStudents();
  }

  addStudent() {
    if (!this.name.length && this.age === null) {
      return
    }

    this.studentsList.addStudent({
      name: this.name,
      age: this.age
    })

    this.age = null;
    this.name = '';
  }

  deleteStudent(index) {
    this.studentsList.deleteStudent(index);
  }
}
