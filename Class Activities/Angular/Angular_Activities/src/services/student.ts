import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Student {
  students = [
    {id : 1, name : "Siddhi"},
    {id : 2, name : "Anuradha"}
  ]

  getStudents(){
    return this.students;
  }
}