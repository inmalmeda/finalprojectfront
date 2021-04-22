import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Tag } from 'src/app/models/tag/tag.model';
import { StoreService } from 'src/app/services/states/store.service';
import UserState from 'src/app/store/config/userState.interface';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss']
})
export class TagComponent implements OnInit {

  tagForm: FormGroup = new FormGroup({})
  creator = ''

  @Input() tag: Tag = new Tag(-1, '', '',  new Date(), new Date())
  @Output() manipulateTag: EventEmitter<Tag> = new EventEmitter<Tag>()

  constructor(private formBuilder: FormBuilder, private storeService: StoreService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.tagForm = this.formBuilder.group({
      id: this.tag.id == -1 ? 1 : this.tag.id,
      name:  [this.tag.name, Validators.compose([Validators.required,Validators.minLength(2), Validators.maxLength(15)])]
    })

    this.storeService.getState('userState').subscribe((state: UserState) => {
      this.creator = this.tag.id == -1 ?  state.name : this.tag.creator
    })
  }

  saveTag(): void{
    if (this.tagForm.valid) {
      this.manipulateTag.emit(new Tag(this.tagForm.value.id, this.tagForm.value.name, this.creator,new Date(), new Date()))
    } else {
      this._snackBar.open("Los datos son inválidos","", {
        duration: 3000
      });
    }
  }

}
