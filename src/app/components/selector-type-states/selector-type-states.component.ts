import { Component, OnInit } from '@angular/core';
import { TypeStates } from 'src/app/models/type-states-enum';
import { UtilStateService } from 'src/app/services/expert/state/util-state.service';
import { ExpertUtilService } from 'src/app/services/expert/util/expert-util.service';

@Component({
  selector: 'app-selector-type-states',
  templateUrl: './selector-type-states.component.html',
  styleUrls: ['./selector-type-states.component.scss']
})
export class SelectorTypeStatesComponent implements OnInit {

  states = [
    {value: TypeStates[TypeStates['Validado']], viewValue: 'Validado'},
    {value: TypeStates[TypeStates['Pendiente']], viewValue: 'Pendiente'},
    {value: TypeStates[TypeStates['Todos']], viewValue: 'Todos'}
  ];

  selectedState = this.states[0].value;

  constructor(private storeUtilsExperts: UtilStateService, private expertUtilService : ExpertUtilService) { }

  ngOnInit(): void {
  }

  selectState(event: any) {
    if (event.value == undefined) {
      this.storeUtilsExperts.changeFilterState('');
    } else {
      this.storeUtilsExperts.changeFilterState(event.value);
    }
    this.expertUtilService.getAllExperts();
  }

}
