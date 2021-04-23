import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Tag } from 'src/app/models/tag/tag.model';
import { SnackBarService } from 'src/app/services/component/snack-bar/snack-bar.service';
import { UtilsService } from 'src/app/services/states/utils.service';
import { TagService } from 'src/app/services/tag/tag.service';

@Component({
  selector: 'app-tag-new-page',
  templateUrl: './tag-new-page.component.html',
  styleUrls: ['./tag-new-page.component.scss']
})
export class TagNewPageComponent implements OnInit {

  constructor(private tagService: TagService, private router: Router, private snackBar: SnackBarService,
    private storeUtils: UtilsService) { }

  ngOnInit(): void {
  }

  createTag(tag: Tag) {
    this.tagService.createTag(tag)
      .subscribe((response) => {
        this.snackBar.showSnack(response.message)
        this.storeUtils.changeHeader('Lista de etiquetas', 'ETIQUETAS', 'Añadir Etiqueta', true,'')
        this.router.navigate(['/tags'])
      },
        err => {
        this.snackBar.showSnack("Error al crear la etiqueta")
    }
  )}
}
