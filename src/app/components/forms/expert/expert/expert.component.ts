import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NewExpert } from 'src/app/models/expert/newExpert/new-expert.model';
import { FiltersTag } from 'src/app/models/tag/filters/filters-tag.model';
import { Tag } from 'src/app/models/tag/tag.model';
import { SnackBarService } from 'src/app/services/component/snack-bar/snack-bar.service';
import { TagService } from 'src/app/services/tag/tag.service';

@Component({
  selector: 'app-expert',
  templateUrl: './expert.component.html',
  styleUrls: ['./expert.component.scss']
})
export class ExpertComponent implements OnInit {

  expertForm: FormGroup = new FormGroup({})
  expertTags: Tag[] = []
  expertAvailability: string = ''
  tagsExist: Tag[] = []
  tagsSelector: [{ value: number, viewValue: string }] = [{ value: -1, viewValue: '' }]
  availabilitySelector = [
    { value: 0, viewValue: 'Mañana' },
    { value: 1, viewValue: 'Tarde' },
    { value: 2, viewValue: 'Total' }
  ];
  @Output() manipulateExpert: EventEmitter<NewExpert> = new EventEmitter<NewExpert>()

  constructor(private formBuilder: FormBuilder, private snackBar: SnackBarService, private tagService: TagService) { }

  ngOnInit(): void {

    this.getAllTagsToSelector()

    this.expertForm = this.formBuilder.group({
      name: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(40)])],
      nif: ['', Validators.compose([Validators.minLength(9), Validators.maxLength(9)])],
      contactPhone:['', Validators.compose([Validators.required, Validators.minLength(9), Validators.maxLength(12)])],
      contactEmail: ['', Validators.compose([Validators.email])],
      contactTown: ['', Validators.compose([Validators.minLength(5), Validators.maxLength(50)])],
      contactLinkedin: ['', Validators.compose([Validators.minLength(5), Validators.maxLength(50)])]
    })
  }

  saveExpert(): void{
    if (this.expertForm.valid) {
      this.manipulateExpert.emit(new NewExpert(this.expertForm.value.name, this.expertForm.value.nif, this.expertTags,
        this.expertAvailability, this.expertForm.value.contactPhone, this.expertForm.value.contactEmail, this.expertForm.value.contactTown,
        this.expertForm.value.contantLinkedin))
    } else {
      this.snackBar.showSnack("Los datos son inválidos")
    }
  }

  addTag(id: number) {
    if (id == -1)
      this.getAllTagsToSelector()

    this.expertTags.push(this.tagsExist.filter((tag) => tag.id == id)[0])
  }

  deleteTag(id: number) {

    let tag = this.tagsExist.filter((tag) => tag.id == id)[0]
    let indexDelete = -1

    for (let i = 0; i < this.expertTags.length; i++){
      if (this.expertTags[i].id == tag.id)
        indexDelete = i
    }
    this.expertTags.splice(indexDelete, 1)
  }

  setAvailability(data: string) {
    this.expertAvailability = data
  }

  private getAllTagsToSelector() {
    this.tagsSelector.splice(0, this.tagsSelector.length)

    this.tagService.getAllTags(new FiltersTag('',0,-1)).subscribe(data => {
      this.tagsExist = data.tags

      this.tagsExist.forEach(tag => {
        this.tagsSelector.push({ value: tag.id, viewValue: tag.name })
      });
    })
  }
}
