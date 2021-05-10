import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { NewUser } from 'src/app/models/user/newUser/new-user.Model';
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
  register: Boolean = false;

  @Output() emitLogged: EventEmitter<Boolean> = new EventEmitter<Boolean>()

  constructor(private authService: AuthService,  private utilsService: UtilsService,
    private snackBar: SnackBarService, private router: Router) { }

  ngOnInit(): void {
  }

  loginUser(user: User) {

    this.authService.login(new User(user.email, user.password))
      .subscribe((response) => {
        if (response) {
          this.utilsService.changeLooged(response.nameUser, response.emailUser)
          this.authService.setLoggedIn(true)
          localStorage.setItem('Token', response.token)
          this.emitLogged.emit(true)
        } else {
          this.manageError(response.response.message)
        }
        },
        err =>this.manageError('Problem with connection')
    )
  }

  registerUser(user: NewUser) {
      this.authService.register(new NewUser(user.name,user.email, user.password))
      .subscribe((response) => {
        if (response.response == 'OK') {
          this.snackBar.showSnack("Usuario creado correctamente")
          this.register = false
        } else {
          this.manageError(response.message)
        }
        },
        err =>this.manageError('Problem with connection')
    )
  }

  manageError(text: string): void {
    this.snackBar.showSnack(text)
    this.authService.setLoggedIn(false)
    localStorage.removeItem('Token')
  }

  ngOnDestroy(): void {
    this.authSubscription.unsubscribe()
  }

  navigateRegister(newUser : Boolean) {
    this.register = newUser
  }

  navigateLogin(login : Boolean) {
    this.register = !login
  }

}
