import { Component, OnInit } from '@angular/core';
import { Question } from '../question';
import { QUESTIONS } from '../question-mock';
import { identifierModuleUrl } from '@angular/compiler';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent implements OnInit {
  questions = QUESTIONS;
  constructor() {}

  currentQuestion: Question;
  ngOnInit(): void {
    this.currentQuestion = this.questions[0];
  }

  currentIndex() {
    return this.questions.indexOf(this.currentQuestion);
  }
  next() {
    this.currentQuestion = this.questions[this.currentIndex() + 1];
  }

  back() {
    this.currentQuestion = this.questions[this.currentIndex() - 1];
  }
}
