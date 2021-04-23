import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Location} from '@angular/common'
import { Expert } from 'src/app/models/expert/expert.model';
import { ExpertService } from 'src/app/services/expert/expert.service';
import { SnackBarService } from 'src/app/services/component/snack-bar/snack-bar.service';

@Component({
  selector: 'app-expert-detail-page',
  templateUrl: './expert-detail-page.component.html',
  styleUrls: ['./expert-detail-page.component.scss']
})
export class ExpertDetailPageComponent implements OnInit {

  expert: any
  expertPrincipal : { name: string, nif: string, created_at: Date, updated_at: Date } =
    { name: '', nif: '', created_at: new Date(), updated_at: new Date() }


  @Output() emitExpert: EventEmitter<Expert> = new EventEmitter<Expert>()

  constructor(private location: Location,private expertService: ExpertService, private snackBar: SnackBarService) { }

  ngOnInit(): void {
    if (this.location.getState()) {
      this.expert = this.location.getState()

      this.expertPrincipal.name = this.expert.name
      this.expertPrincipal.nif = this.expert.nif
      this.expertPrincipal.created_at = this.expert.created_at
      this.expertPrincipal.updated_at = this.expert.updated_at

    }
  }

  updatePrincipalExpert(event: any) {
    this.expert.name = event.name
    this.expert.nif = event.nif
    this.updateExpert()
  }


  updateDataExpert(event: any) {
    this.expert.contactPhone = event.contactPhone
    this.expert.contactEmail = event.contactEmail
    this.expert.contactTown = event.contactTown
    this.expert.contactLinkedin = event.contactLinkedin
    this.updateExpert()
  }

  private updateExpert() {
    this.expertService.updateExpert(this.expert)
      .subscribe((response) => {
        this.snackBar.showSnack(response.message)
      },
        err => {
          this.snackBar.showSnack("Error al actualizar el usuario")
      })
  }

}
