import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-type-score',
  templateUrl: './type-score.component.html',
  styleUrls: ['./type-score.component.scss']
})
export class TypeScoreComponent implements OnInit {

  @Input()
  score: number = 0

  text: string = ''

  constructor() { }

  ngOnInit(): void {
    if(this.score!=null)
        this.text = this.score.toString()
  }

  getColorTag() {
    switch (this.score){
      case 15:
        return '#D66464';
      case 25:
        return '#DEA876';
      case 55:
        return '#F0CE76';
      case 75:
        return '#B1F0A1';
      case 100:
        return '#4ADEBB';
      default:
        this.text = 'Falta'
        return '#C7C8CD';
    }

  }

}
