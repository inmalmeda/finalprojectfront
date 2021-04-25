import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-selector-general',
  templateUrl: './selector-general.component.html',
  styleUrls: ['./selector-general.component.scss']
})
export class SelectorGeneralComponent implements OnInit {

  @Input() data = [{ value: 0, viewValue: '' }]

  @Input() textPlaceholder: string = ''

  @Output() emitte: EventEmitter<string> = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * Emit the value selected
   * @param event
   */
  select(event: any) {
    if(event.value != undefined)
      this.emitte.emit(this.data.filter((data) => data.value == event.value)[0].viewValue)
  }
}
