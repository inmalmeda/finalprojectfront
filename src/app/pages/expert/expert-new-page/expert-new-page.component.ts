import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewExpert } from 'src/app/models/expert/newExpert/new-expert.model';
import { SnackBarService } from 'src/app/services/component/snack-bar/snack-bar.service';
import { ExpertService } from 'src/app/services/expert/expert.service';
import { UtilsService } from 'src/app/services/states/utils.service';

@Component({
  selector: 'app-expert-new-page',
  templateUrl: './expert-new-page.component.html',
  styleUrls: ['./expert-new-page.component.scss']
})
export class ExpertNewPageComponent implements OnInit {

  constructor(private expertService: ExpertService, private router: Router, private snackBar: SnackBarService,
    private storeUtils: UtilsService) { }

  ngOnInit(): void {
  }

  /**
   * Create a new expert
   * @param expert
   */
  createExpert(expert: NewExpert) {
    this.expertService.createExpert(expert)
      .subscribe((response) => {
      this.snackBar.showSnack(response.message)
      this.storeUtils.changeHeader('Lista de expertos', 'EXPERTOS', 'Nuevo Experto', true,'')
      this.router.navigate(['/experts'])
    },
        err => {
          this.snackBar.showSnack("Error al crear el experto")
    })
  }
}
