import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Tag } from 'src/app/models/tag/tag.model';

@Component({
  selector: 'app-type-tag',
  templateUrl: './type-tag.component.html',
  styleUrls: ['./type-tag.component.scss']
})
export class TypeTagComponent implements OnInit {


  @Input()
  tag: string = ''

  @Output() emitteTagDelete: EventEmitter<string> = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
  }

  deleteTag(event: string) {
    this.emitteTagDelete.emit(event)
  }
}
