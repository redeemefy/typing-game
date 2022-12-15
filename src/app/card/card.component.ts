import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { faker } from '@faker-js/faker';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @ViewChild('myInput') myInput: ElementRef

  randomSentence: string = ''
  typedSentence: string = ''

  constructor() { }

  ngOnInit() {}

  focusInputElement() {
    setTimeout(() => {
      this.myInput.nativeElement.focus()
    }, 100)
  }

  generateSentence() {
    this.typedSentence = ''
    this.randomSentence = faker.lorem.sentence()
    this.focusInputElement()
  }
  
  onInputChange(value: string) {
    this.typedSentence = value
  }
  
  compare(randomChar: string, enteredChar: string) {
    if(!enteredChar) {
      return 'pending'
    }
    
    return randomChar === enteredChar ? 'correct' : 'incorrect'
  }
  
  isDisabled() {
    return (this.typedSentence.length === this.randomSentence.length) && (this.typedSentence === this.randomSentence)
  }

  youWon() {
    // console.log('typedSentence.length: ', this.typedSentence.length)
    // console.log('random.length: ', this.randomSentence.length)
    return this.typedSentence && this.typedSentence === this.randomSentence
  }
}
