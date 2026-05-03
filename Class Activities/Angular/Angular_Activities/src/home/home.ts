import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Student } from '../services/student';
import { AuthService } from '../services/auth';


@Component({
  selector: 'app-home',
  imports: [FormsModule,CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
isVisible:boolean = false

showDiv(){
  this.isVisible = true;
}

hideDiv(){
  this.isVisible = false;
}

isPink:boolean = true;
toggleColor(){
  this.isPink = !this.isPink
}

num1 : number=0;
num2 : number=0;


selectedCourse: string = ""; 
courses: string[] = ["CSE", "AIML", "AIDS", "ENTC"];

//services Example
 students: any[] = [];

  constructor(private studentService: Student, private authService: AuthService) {}

  ngOnInit() {
    this.students = this.studentService.getStudents();
  }
}
