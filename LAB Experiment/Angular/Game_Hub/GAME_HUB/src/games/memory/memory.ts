import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Card {
  id: number;
  icon: string;
  flipped: boolean;
  matched: boolean;
}

@Component({
  selector: 'app-memory',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './memory.html',
  styleUrls: ['./memory.css'],
})
export class Memory implements OnInit {

  cards: Card[] = [];
  firstCard: Card | null = null;
  secondCard: Card | null = null;

  moves = 0;
  matchedCount = 0;

  icons = ['🍎','🍌','🍇','🍒','🍉','🍍'];

  ngOnInit() {
    this.initGame();
  }

  initGame() {
    const tempCards: Card[] = [];
    let id = 1;

    this.icons.forEach(icon => {
      tempCards.push({ id: id++, icon, flipped: false, matched: false });
      tempCards.push({ id: id++, icon, flipped: false, matched: false });
    });

    this.cards = tempCards.sort(() => Math.random() - 0.5);

    this.moves = 0;
    this.matchedCount = 0;
  }

  flipCard(card: Card) {
    if (card.flipped || card.matched) return;

    if (!this.firstCard) {
      this.firstCard = card;
      card.flipped = true;
    }
    else if (!this.secondCard) {
      this.secondCard = card;
      card.flipped = true;
      this.moves++;
      this.checkMatch();
    }
  }

  checkMatch() {
    if (this.firstCard && this.secondCard) {

      if (this.firstCard.icon === this.secondCard.icon) {
        this.firstCard.matched = true;
        this.secondCard.matched = true;

        this.matchedCount += 2;
        this.resetSelection();
      } 
      else {
        setTimeout(() => {
          this.firstCard!.flipped = false;
          this.secondCard!.flipped = false;
          this.resetSelection();
        }, 800);
      }
    }
  }

  resetSelection() {
    this.firstCard = null;
    this.secondCard = null;
  }

  restartGame() {
    this.initGame();
  }

  isGameWon() {
    return this.matchedCount === this.cards.length;
  }
}