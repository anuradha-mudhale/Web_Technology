import { Component } from '@angular/core';

@Component({
  selector: 'app-rps',
  standalone: true,
  templateUrl: './rps.html',
  styleUrl: './rps.css',
})
export class Rps {

  userChoice = '';
  computerChoice = '';
  result = '';

  userScore = 0;
  computerScore = 0;

  choices = ['Rock', 'Paper', 'Scissors'];

  play(user: string) {
    this.userChoice = user;

    const index = Math.floor(Math.random() * 3);
    this.computerChoice = this.choices[index];

    this.checkWinner();
  }

  checkWinner() {
    if (this.userChoice === this.computerChoice) {
      this.result = "Tie";
    } 
    else if (
      (this.userChoice === 'Rock' && this.computerChoice === 'Scissors') ||
      (this.userChoice === 'Paper' && this.computerChoice === 'Rock') ||
      (this.userChoice === 'Scissors' && this.computerChoice === 'Paper')
    ) {
      this.result = "YOU WIN!!!";
      this.userScore++;
    } 
    else {
      this.result = "COMPUTER WIN!!!";
      this.computerScore++;
    }
  }

  reset() {
    this.userScore = 0;
    this.computerScore = 0;
    this.userChoice = '';
    this.computerChoice = '';
    this.result = '';
  }
}