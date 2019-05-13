import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { LoginModel } from '../../models';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  @Input() errorMsg: string;
  @Input() isPending: boolean;
  @Output() login = new EventEmitter<LoginModel>();

  loginForm: FormGroup;
  username: FormControl;
  password: FormControl;

  constructor() { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.createFormControls();
    this.loginForm = new FormGroup({
      username: this.username,
      password: this.password,
    });
  }

  createFormControls() {
    this.username = new FormControl('', Validators.required);

    this.password = new FormControl('', [ Validators.required ]);
  }

  onSubmit() {
    const user: LoginModel = {
      username: this.loginForm.get('username').value,
      password: this.loginForm.get('password').value
    };

    this.login.emit(user);
  }

  onUsernameInputFocused() {
    this.hideErrorMessage();
  }

  onPasswordInputFocused() {
    this.hideErrorMessage();
  }

  hideErrorMessage() {
    this.errorMsg = '';
  }
}
