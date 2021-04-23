import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, Validators,FormGroupDirective, NgForm, FormGroup, FormBuilder, } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Expert } from 'src/app/models/expert/expert.model';
import { SnackBarService } from 'src/app/services/component/snack-bar/snack-bar.service';



@Component({
  selector: 'app-detail-header',
  templateUrl: './detail-header.component.html',
  styleUrls: ['./detail-header.component.scss']
})
export class DetailHeaderComponent implements OnInit {


  expertForm: FormGroup = new FormGroup({})

  @Input() expert: { name: string, nif: string, created_at: Date, updated_at: Date } =
                                  { name: '', nif: '', created_at: new Date(), updated_at: new Date() }

  @Output() emitPrincipalExpert: EventEmitter< {name: string, nif: string}> = new EventEmitter< {name: string, nif: string}>()

  constructor(private formBuilder: FormBuilder, private snackBar: SnackBarService) { }

  ngOnInit(): void {

    this.expertForm = this.formBuilder.group({
      name: [this.expert.name, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(40)])],
      nif: [this.expert.nif, Validators.compose([Validators.minLength(9), Validators.maxLength(9)])]
    })
  }

  saveNameExpert(): void{
    if (this.expertForm.value.name != this.expert.name || this.expertForm.value.nif != this.expert.nif) {
      if (this.expertForm.valid) {
        this.emitPrincipalExpert.emit({ name: this.expertForm.value.name, nif: this.expertForm.value.nif })
      } else {
        this.snackBar.showSnack("Los datos son inválidos")
      }
    }

  }
}

