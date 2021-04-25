import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user/user.model';
import { SnackBarService } from 'src/app/services/component/snack-bar/snack-bar.service';
import { UtilsService } from 'src/app/services/states/utils.service';
import { AuthService } from 'src/app/services/user/auth.service';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit, OnDestroy{

  authSubscription: Subscription = new Subscription()

  @Output() emitLogged: EventEmitter<Boolean> = new EventEmitter<Boolean>()

  constructor(private authService: AuthService,  private utilsService: UtilsService,
    private snackBar: SnackBarService) { }

  ngOnInit(): void {
  }

  loginUser(user: User) {

    this.authService.login(new User(user.email, user.password))
      .subscribe((response) => {
        if (response.response.response == 'OK') {
          console.log("llego", response)
          this.utilsService.changeLooged(response.nameUser, response.emailUser)
          this.authService.setLoggedIn(true)
          this.emitLogged.emit(true)
        } else {
          this.manageError(response.response.message)
        }
        },
        err =>this.manageError('Problem with connection')
    )
  }

  manageError(text: string): void {
    this.snackBar.showSnack(text)
    this.authService.setLoggedIn(false)
  }

  ngOnDestroy(): void {
    this.authSubscription.unsubscribe()
  }

  manageBack() {
    console.log("back")

  }
}
