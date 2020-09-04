import { Component, OnInit } from '@angular/core';
import { Question } from '../question';
import { Result } from '../result';
import { RESULTS } from '../result-data';
import { QUESTIONS } from '../question-data';
import { FormControl, FormGroup } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/storage';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent implements OnInit {
  typeANum = 0;
  typeBNum = 0;
  typeCNum = 0;

  resultImageUrl: string;

  resultOn: boolean;
  questions = QUESTIONS;
  result: Result;
  results = RESULTS;
  form = new FormGroup({
    point: new FormControl(''),
  });

  constructor(private storage: AngularFireStorage) {}

  currentQuestion: Question;
  ngOnInit(): void {
    this.currentQuestion = this.questions[0];
  }

  currentIndex() {
    return this.questions.indexOf(this.currentQuestion);
  }

  reStart() {
    this.resultOn = false;
    this.typeANum = 0;
    this.typeBNum = 0;
    this.typeCNum = 0;
    this.ngOnInit();
  }

  select(point: number) {
    if (this.currentQuestion.type == 'A') {
      this.typeANum += point;
      console.log(this.typeANum);
    } else if (this.currentQuestion.type == 'B') {
      this.typeBNum += point;
      console.log(this.typeBNum);
    } else if (this.currentQuestion.type == 'C') {
      this.typeCNum += point;
      console.log(this.typeCNum);
    }
    this.currentQuestion = this.questions[this.currentIndex() + 1];
    if (this.currentQuestion == this.questions[-1]) {
      this.resultOn = true;
      if (20 <= this.typeANum && 20 <= this.typeBNum && 20 <= this.typeCNum) {
        this.result = this.results.find((result) => result.type == 'A');
        this.fetchResultImage(this.result.imgUrl);
      }
    } else if (
      20 <= this.typeANum &&
      20 <= this.typeBNum &&
      20 >= this.typeCNum
    ) {
      this.result = this.results.find((result) => result.type == 'B');
      this.fetchResultImage(this.result.imgUrl);
    } else if (
      20 <= this.typeANum &&
      this.typeBNum <= 20 &&
      this.typeCNum <= 20
    ) {
      this.result = this.results.find((result) => result.type == 'C');
      this.fetchResultImage(this.result.imgUrl);
    } else if (
      this.typeANum <= 20 &&
      20 <= this.typeBNum &&
      this.typeCNum <= 20
    ) {
      this.result = this.results.find((result) => result.type == 'D');
      this.fetchResultImage(this.result.imgUrl);
    } else if (
      this.typeANum <= 20 &&
      20 <= this.typeBNum &&
      20 <= this.typeCNum
    ) {
      this.result = this.results.find((result) => result.type == 'E');
      this.fetchResultImage(this.result.imgUrl);
    } else if (
      this.typeANum <= 20 &&
      this.typeBNum <= 20 &&
      20 <= this.typeCNum
    ) {
      this.result = this.results.find((result) => result.type == 'F');
      this.fetchResultImage(this.result.imgUrl);
    } else if (
      20 <= this.typeANum &&
      this.typeBNum <= 20 &&
      20 <= this.typeCNum
    ) {
      this.result = this.results.find((result) => result.type == 'G');
      this.fetchResultImage(this.result.imgUrl);
    } else if (
      this.typeANum <= 20 &&
      this.typeBNum <= 20 &&
      this.typeCNum <= 20
    ) {
      this.result = this.results.find((result) => result.type == 'H');
      this.fetchResultImage(this.result.imgUrl);
    }
  }

  fetchResultImage(imgUrl: string) {
    this.storage
      .ref(imgUrl)
      .getDownloadURL()
      .subscribe((image) => {
        this.resultImageUrl = image;
      });
  }
}
