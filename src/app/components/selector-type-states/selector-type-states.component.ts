import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TypeStates } from 'src/app/models/type-states-enum';
import { UtilStateService } from 'src/app/services/expert/state/util-state.service';
import { ExpertUtilService } from 'src/app/services/expert/manage/expert-util.service';

@Component({
  selector: 'app-selector-type-states',
  templateUrl: './selector-type-states.component.html',
  styleUrls: ['./selector-type-states.component.scss']
})
export class SelectorTypeStatesComponent implements OnInit {

  @Input() states: any

  @Input() textPlaceholder: string = ''

  @Output() emitState: EventEmitter<string> = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * Emit the state selected
   * @param event
   */
  selectState(event: any) {
    if (event.value == undefined || event.value == TypeStates[TypeStates['Todos']]) {
      this.emitState.emit('')
    } else {
      this.emitState.emit(event.value)
    }

  }

}
