import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UtilStateService } from 'src/app/services/expert/state/util-state.service';
import { ExpertUtilService } from 'src/app/services/expert/manage/expert-util.service';

@Component({
  selector: 'app-selector-type-score',
  templateUrl: './selector-type-score.component.html',
  styleUrls: ['./selector-type-score.component.scss']
})
export class SelectorTypeScoreComponent implements OnInit {

  score = [
    { value: 0, viewValue: 'Falta' },
    { value: 15, viewValue: '15' },
    { value: 25, viewValue: '25' },
    { value: 55, viewValue: '55' },
    { value: 75, viewValue: '75' },
    { value: 100, viewValue: '100' },
  ];

  @Output() emitScore: EventEmitter<string> = new EventEmitter<string>()

  @Input() textPlaceholder: string = ''

  constructor(private storeUtilsExperts: UtilStateService, private expertUtilService : ExpertUtilService) { }

  ngOnInit(): void {
  }

  selectScore(event: any) {
    if (event.value == undefined) {
      this.emitScore.emit('')
    } else {
      this.emitScore.emit(event.value)
    }
   /*  if (event.value == undefined) {
      this.storeUtilsExperts.changeFilterScore('');
    } else {
      this.storeUtilsExperts.changeFilterScore(event.value);
    }
    this.expertUtilService.getAllExperts(); */
  }

}
