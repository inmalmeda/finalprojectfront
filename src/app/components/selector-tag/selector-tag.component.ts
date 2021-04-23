import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Tag } from 'src/app/models/tag/tag.model';
import { StoreService } from 'src/app/services/states/store.service';
import TagsState from 'src/app/store/config/tagsState.interface';
import { DialogFormComponent } from '../forms/tag/dialog-form/dialog-form.component';

@Component({
  selector: 'app-selector-tag',
  templateUrl: './selector-tag.component.html',
  styleUrls: ['./selector-tag.component.scss']
})
export class SelectorTagComponent implements OnInit{

  @Input()
  tags: [{ value: number, viewValue: string }] = [{ value: -1, viewValue: '' }]

  @Input()
  tagsOfExpert: Tag[] = []

  selectedTags: string[] = []

  @Output() emitteTag: EventEmitter<number> = new EventEmitter<number>()

  @Output() emitteTagDelete: EventEmitter<number> = new EventEmitter<number>()

  constructor(public dialog: MatDialog, private storeService: StoreService) { }

  ngOnInit() {
    if (this.tagsOfExpert.length > 0) {
      for (let i= 0; i < this.tagsOfExpert.length; i++) {
        this.selectedTags.push(this.tagsOfExpert[i].name)
      }
    }
  }

  selectTag(event: any) {

    if (event.value != undefined && event.value != -1) {

      let filter = this.tags.filter((tag) => tag.value == event.value)[0].viewValue

      if (this.selectedTags.indexOf(filter) < 0) {
        this.selectedTags.push(filter)
        this.emitteTag.emit(event.value)
      }
    } else if (event.value == -1) {
      this.addTag()
    }
  }

  deleteTag(event: any) {
    let indexDelete = this.selectedTags.indexOf(this.tags.filter((tag) => tag.viewValue == event)[0].viewValue)
    console.log(indexDelete,"dele")
    this.selectedTags.splice(indexDelete, 1)

    this.emitteTagDelete.emit(this.tags.filter((tag) => tag.viewValue == event)[0].value)
  }

  addTag() {
    const dialogRef = this.dialog.open(DialogFormComponent, {
      width: '40%'
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.emitteTag.emit(-1)
    });
  }
}

