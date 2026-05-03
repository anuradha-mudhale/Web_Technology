import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [FormsModule,CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
//interpolation
export class Home {
  fname:String='Anuradha'
  myRoll:Number = 125;
  course:String = 'AIML'

  showButton(){
    this.fname = "Anuradha"
    alert("Name updated Successfully")
  }
  
  cityArr: String[] = ['kolhapur','ichal','Hupari'];
}
