import { Component, Input, OnInit } from '@angular/core';
import { TypeStates } from 'src/app/models/type-states-enum';

/* enum TypeStates {
  'Validado',
  'Pendiente',
  'Todos'
}
 */
@Component({
  selector: 'app-type-states',
  templateUrl: './type-states.component.html',
  styleUrls: ['./type-states.component.scss']
})
export class TypeStatesComponent implements OnInit{

  @Input()
  text: string = ''

  constructor() {}

  ngOnInit(): void { }

}
