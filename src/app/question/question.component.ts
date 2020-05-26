import { Component, OnInit } from '@angular/core';
import { Question } from '../question';
import { QUESTIONS } from '../question-data';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent implements OnInit {
  questions = QUESTIONS;
  form = new FormGroup({
    point: new FormControl(''),
  });
  constructor() {}

  currentQuestion: Question;
  ngOnInit(): void {
    this.currentQuestion = this.questions[0];
  }

  currentIndex() {
    return this.questions.indexOf(this.currentQuestion);
  }
  next() {
    if (this.form.value.point == '') {
      alert('選択肢が入力されていません');
      return;
    }
    this.currentQuestion = this.questions[this.currentIndex() + 1];
    this.form.setValue({ point: '' });
  }

  back() {
    this.currentQuestion = this.questions[this.currentIndex() - 1];
  }
}
