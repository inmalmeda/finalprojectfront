import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user/user.model';
import { SnackBarService } from 'src/app/services/component/snack-bar/snack-bar.service';
import { AuthService } from 'src/app/services/user/auth.service';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  hide = true
  loginForm: FormGroup = new FormGroup({})

  @Output() manipulateUser: EventEmitter<User> = new EventEmitter<User>()
  @Output() manipulateRegister: EventEmitter<Boolean> = new EventEmitter<Boolean>()

  constructor(private authService: AuthService, private formBuilder: FormBuilder, private snackBar: SnackBarService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: '',
      password: ''
    })
  }

  /**
   * Method to Login calling AuthService
   */
  login(): void {

    if (this.loginForm.valid && this.loginForm.value.email, this.loginForm.value.password) {
      this.manipulateUser.emit(new User(this.loginForm.value.email, this.loginForm.value.password));
    } else {
      this.authService.setLoggedIn(false)
      this.snackBar.showSnack("Inserte email y contraseña válidos")
    }
  }

  navigateRegister() {
    this.manipulateRegister.emit(true)
  }

}
