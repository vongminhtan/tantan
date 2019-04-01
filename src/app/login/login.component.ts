import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { Credential } from '../credential';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: Credential = {
    username: '',
    password: ''
  };

  loginForm: FormGroup;

  constructor(
    private router: Router,
    private auth: AuthService,
    private fb: FormBuilder,

  ) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(6)]],
    })
  }

  ngOnInit() {
  }

  get formControls() {
    return this.loginForm.controls;
  }
  isPendding = false;

  onSubmit() {
    this.isPendding = true; 
    this.auth.login(this.loginForm.value).subscribe((res) => {
      console.log('res', res);
       
      this.router.navigate(['/dashboard']);
      this.auth.saveToken(res.access_token)   
    }, (err) => {
      console.log('err', err)   
      this.isPendding = false;
      
    })
  }

}
