import { Injectable } from '@angular/core';
import { Student } from './Student';

@Injectable()
export class StudentsService {

  public students: Student[] = [
    {name : 'maxim', age: 10},
    {name : 'alex', age: 20},
    {name : 'Dima', age: 30},
    {name : 'Ivan', age: 40},
    {name : 'Vasya', age: 45},
  ];

  addStudent(student) {
    this.students.push(student)
  }

  deleteStudent(index) {
    this.students.splice(index, 1);
  }

  getStudents() {
    return this.students;
  }

}
