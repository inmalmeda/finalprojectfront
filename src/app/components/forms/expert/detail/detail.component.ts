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
    { value: 1, viewValue: 'Internet' }
  ]

  cause = [
    { value: 0, viewValue: 'Poca disponibilidad' },
    { value: 1, viewValue: 'Poca experiencia' },
    { value: 2, viewValue: 'Otros' }
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
      contactLinkedin: [this.expert.contactLinkedin, Validators.compose([Validators.minLength(5), Validators.maxLength(40)])]
    })

    this.expert.tags = this.expertTags
  }

  /**
   * Save the new data of expert if the form is valid
   */
  saveDataExpert(): void{

    if (this.expertForm.valid) {
      if (this.expert.availability != this.expert.availability || this.expert.contactPhone != this.expertForm.value.contactPhone ||
        this.expert.contactEmail != this.expertForm.value.contactEmail || this.expert.contactTown != this.expertForm.value.contactTown ||
        this.expert.contactLinkedin != this.expertForm.value.contactLinkedin) {
        this.emitEverything()
      }
    } else {
      this.snackBar.showSnack("Los datos son inválidos")
    }
  }

  /**
   * Add a new tag on the tag´s list of expert
   * @param id
   */
  addTag(id: number) {
    if (id == -1)
      this.getAllTagsToSelector()

    this.expertTags.push(this.tagsExist.filter((tag) => tag.id == id)[0])
    this.emitEverything()
  }

  /**
   * Delete a tag of the tag´s list of expert
   * @param id
   */
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

  /**
   * Set data about availability of expert
   * @param data
   */
  setAvailability(data: string) {
    this.expertAvailability = data
    this.emitEverything()
  }

  /**
   * Set data of state of expert
   * @param data
   */
  setState(data: string) {
    this.expert.state = data
    this.emitEverything()
  }

  /**
   * Set data of score of expert
   * @param score
   */
  setScore(score: string) {
    this.expert.score = score;
    this.emitEverything()
  }

  /**
   * Set data of expert's origin
   * @param origin
   */
  setOrigin(origin: string) {
    this.expert.origin = origin
    this.emitEverything()
  }

  /**
   * Set reason of expert'state
   * @param reason
   */
  setStateReason(reason: string) {
    this.expert.modality = reason
    this.emitEverything()
  }

  /**
   * Set description of reason
   * @param event
   */
  setStateReasonSpecific(event: any) {
    this.expert.stateReason = event.taget.value
    this.emitEverything()
  }

  /**
   * Set observations about the expert
   * @param event
   */
  setObservations(event: any) {
    this.expert.observations = event.target.value
    this.emitEverything()
  }

  /**
   * Method private to emit every data of expert
   */
  private emitEverything() {
    this.emitDataExpert.emit(new Expert(0, this.expert.name, new Date(), new Date(), this.expert.stateReason, this.expertAvailability,
      this.expert.modality, false, this.expertForm.value.contactPhone, this.expertForm.value.contactEmail, this.expertForm.value.contactTown,
      this.expertForm.value.contantLinkedin, this.expert.conditionsPercentage, this.expert.conditionsPrice, this.expert.score,
      this.expert.nif, this.expert.credentialsEmail, this.expert.credentialsEmailPasswors, this.expert.credentialsZoom,
      this.expert.filePhoto, this.expert.fileCv, this.expert.observations, this.expert.origin, this.expert.state, this.expertTags))
  }

  /**
   * Method private to get all existing tags to show on the selector
   */
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

