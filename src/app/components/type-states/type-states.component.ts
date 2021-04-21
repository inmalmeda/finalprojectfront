import { Component, Input, OnInit } from '@angular/core';

enum TypeStates {
  'Validado',
  'Pendiente',
  'Todos'
}

@Component({
  selector: 'app-type-states',
  templateUrl: './type-states.component.html',
  styleUrls: ['./type-states.component.scss']
})
export class TypeStatesComponent implements OnInit {

  @Input()
  text: string = ''

  constructor() {}

  ngOnInit(): void { }

  getColor() {
    switch (this.text){
      case TypeStates[TypeStates['Validado']]:
        return '#4ADEBB';
      case TypeStates[TypeStates['Pendiente']]:
        this.text = 'Pdt. Validar'
        return '#F0CE76';
      case TypeStates[TypeStates['Todos']]:

        return '#D66464';
      default:
        return '#D66464;';
    }

  }
}
