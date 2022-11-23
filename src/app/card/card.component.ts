import { Component, OnInit, Input } from '@angular/core';
import { faker } from '@faker-js/faker';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  randomSentence: string = ''
  typedSentence: string = ''

  constructor() { }

  ngOnInit() {
  }

  generateSentence() {
    this.typedSentence = ''
    this.randomSentence = faker.lorem.sentence()
    document.querySelector('input').focus()
  }

  onInputChange(value: string) {
    this.typedSentence = value
    console.log(this.typedSentence)
  }

  compare(randomChar: string, enteredChar: string) {
    if(!enteredChar) {
      return 'pending'
    }

    return randomChar === enteredChar ? 'correct' : 'incorrect'
  }

  youWon() {
    return this.typedSentence && this.typedSentence === this.randomSentence
  }
}
