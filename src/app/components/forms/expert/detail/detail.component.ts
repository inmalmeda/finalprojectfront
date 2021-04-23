import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Expert } from 'src/app/models/expert/expert.model';
import { NewExpert } from 'src/app/models/expert/newExpert/new-expert.model';
import { FiltersTag } from 'src/app/models/tag/filters/filters-tag.model';
import { Tag } from 'src/app/models/tag/tag.model';
import { SnackBarService } from 'src/app/services/component/snack-bar/snack-bar.service';
import { TagService } from 'src/app/services/tag/tag.service';
import { Location} from '@angular/common'
import { TypeStates } from 'src/app/models/type-states-enum';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  //expert : Expert = new Expert(0,'',new Date(), new Date(),'','','',false,'','','','','','',0,'','','','','','','','','',[])

  @Input()
  expert: any


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

  states = [
    {value: TypeStates[TypeStates['Validado']], viewValue: 'Validado'},
    {value: TypeStates[TypeStates['Pendiente']], viewValue: 'Pendiente'}
  ];

  origin = [
    { value: 0, viewValue: 'Búsqueda' },
    { value:  1, viewValue: 'Internet' }
  ]

  cause = [
    { value: 0, viewValue: 'Poca disponibilidad' },
    { value:  1, viewValue: 'Poca experiencia' }
  ]



  @Output() emitDataExpert: EventEmitter<NewExpert> = new EventEmitter<NewExpert>()

  constructor(private formBuilder: FormBuilder, private snackBar: SnackBarService, private tagService: TagService,
        private location: Location) { }

  ngOnInit(): void {

    this.getAllTagsToSelector()

    if (this.location.getState()) {
      this.expert = this.location.getState()
    }

    this.expertTags = this.expert.tags


    this.expertForm = this.formBuilder.group({
      contactPhone:[this.expert.contactPhone, Validators.compose([Validators.required, Validators.minLength(9), Validators.maxLength(12)])],
      contactEmail: [this.expert.contactEmail, Validators.compose([Validators.email])],
      contactTown:[this.expert.contactTown, Validators.compose([Validators.minLength(5), Validators.maxLength(50)])],
      contactLinkedin: [this.expert.contactLinkedin, Validators.compose([Validators.minLength(5), Validators.maxLength(70)])]
    })

    this.expert.tags = this.expertTags

  }

  saveDataExpert(): void{

    if (this.expertForm.valid) {
      if (this.expert.availability != this.expert.availability || this.expert.contactPhone != this.expertForm.value.contactPhone ||
        this.expert.contactEmail != this.expertForm.value.contactEmail || this.expert.contactTown != this.expertForm.value.contactTown ||
        this.expert.contantLinkedin != this.expertForm.value.contantLinkedin) {
        this.emitEverything()
      }
    } else {
      this.snackBar.showSnack("Los datos son inválidos")
    }
  }

  addTag(id: number) {
    if (id == -1)
      this.getAllTagsToSelector()

    this.expertTags.push(this.tagsExist.filter((tag) => tag.id == id)[0])
    this.emitEverything()
  }

  deleteTag(id: number) {

    let tag = this.tagsExist.filter((tag) => tag.id == id)[0]
    let indexDelete = -1

    for (let i = 0; i < this.expertTags.length; i++){
      if (this.expertTags[i].id == tag.id)
        indexDelete = i
    }
    this.expertTags.splice(indexDelete, 1)

    this.emitEverything()
  }

  setAvailability(data: string) {
    this.expertAvailability = data
    this.emitEverything()
  }


  setState(data: string) {
    this.expert.state = data
    this.emitEverything()
  }

  setScore(score: string) {
    this.expert.score = score;
    this.emitEverything()
  }

  setOrigin(origin: string) {
    this.expert.origin = origin
    this.emitEverything()
  }

  setStateReason(reason: string) {
    this.expert.stateReason = reason
    this.emitEverything()
  }

  setObservations(event: any) {
    this.expert.observations = event.target.value
    this.emitEverything()
  }

  private emitEverything() {
    this.emitDataExpert.emit(new Expert(0, '', new Date(), new Date(), this.expert.stateReason, this.expertAvailability, '',
      false, this.expertForm.value.contactPhone, this.expertForm.value.contactEmail, this.expertForm.value.contactTown,
      this.expertForm.value.contantLinkedin, '', '', this.expert.score, '', '', '', '', '', '',this.expert.observations,
      this.expert.origin, this.expert.state, this.expertTags))
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

