import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Tag } from 'src/app/models/tag/tag.model';
import { UtilStateService } from 'src/app/services/tag/state/util-state.service';
import { TagUtilService } from 'src/app/services/tag/manage/tag-util.service';
import { TagService } from 'src/app/services/tag/tag.service';
import { SnackBarService } from 'src/app/services/component/snack-bar/snack-bar.service';


@Component({
  selector: 'app-dialog-form',
  templateUrl: './dialog-form.component.html',
  styleUrls: ['./dialog-form.component.scss']
})
export class DialogFormComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogFormComponent>, private tagService: TagService,
    private snackBar: SnackBarService, private utilStateService: UtilStateService ) { }

  ngOnInit(): void {
  }

  /**
   * Save a new tag into bbdd
   * @param tag
   */
  createTag(tag: Tag) {
    this.tagService.createTag(tag)
        .subscribe((response) => {
          this.snackBar.showSnack(response.message)
          if (response.response == 'OK') {
            this.utilStateService.changeTagSelected(tag)
          }
          this.dialogRef.close();
        },
          err => {
          this.snackBar.showSnack("Error al crear la etiqueta")
      }
    )}
}
