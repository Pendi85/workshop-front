import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm : FormGroup;
  submitted : boolean;

  constructor(private router : Router) {
    this.loginForm = new FormGroup({
      emailControl : new FormControl('', Validators.email),
      passwordControl : new FormControl('', Validators.required)
    })

    this.submitted = false;
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.submitted = true;
    const regexValidationEmail = /^\S+@\S+\.\S+$/;
        
    //Create Session
    if(this.emailControl.value.length > 0 && this.passwordControl.value.length > 0
      && regexValidationEmail.test(this.emailControl.value)) {
      console.log(this.loginForm.getRawValue());
      this.router.navigate(['']);
    }
  }

  get emailControl(): any {
    return this.loginForm.get('emailControl');
  }

  get passwordControl(): any {
    return this.loginForm.get('passwordControl');
  }
}
