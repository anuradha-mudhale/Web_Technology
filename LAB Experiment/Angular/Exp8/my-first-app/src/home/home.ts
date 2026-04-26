import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class Home {

  // 👉 Display data
  student = {
    name: 'Anuradha',
    age: 20,
    course: 'AIML'
  };

  // 👉 Input data
  newStudent = {
    name: '',
    age: '',
    course: ''
  };

  updateStudent() {
    this.student.name = this.newStudent.name;
    this.student.age = Number(this.newStudent.age);
    this.student.course = this.newStudent.course;
  }

  imgUrl : string = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbrBlYXx_sxeP_4qIzR2__k9Xhq6yQBkqSiw&s";
  courses: string[] = ['CSE','AIML','AIDS','ENTC'];
}