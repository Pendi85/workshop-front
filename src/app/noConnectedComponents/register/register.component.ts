import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm : FormGroup;
  submitted : boolean;

  constructor(private router: Router) { 
    this.registerForm = new FormGroup({
      email: new FormControl('', Validators.email),
      username: new FormControl('', Validators.required),
      
      //Valid password : Minimum 8 characters. Should contain at least on special character, a number and one letter
      password: new FormControl('', Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')),

      confirmedPassword: new FormControl('', Validators.required),
      acceptConditions: new FormControl('', Validators.required)
    })

    this.submitted = false;
  }

  ngOnInit(): void {
  }

  get email() : any {
    return this.registerForm.get('email');
  }

  get username() : any {
    return this.registerForm.get('username');
  }

  get password() : any {
    return this.registerForm.get('password');
  }

  get confirmedPassword() : any {
    return this.registerForm.get('confirmedPassword');
  }

  get acceptConditions() : any {
    return this.registerForm.get('acceptConditions');
  }

  onSubmit() {
    const regexValidationEmail = /^\S+@\S+\.\S+$/;
    this.submitted = true;
    if(this.acceptConditions.value) {
      if (this.email.value.length > 0 && this.username.value.length > 0 && this.password.value.length > 0 
        && regexValidationEmail.test(this.email.value) && this.password.value == this.confirmedPassword.value) {
          
          console.log(this.registerForm.getRawValue());
          this.router.navigate(['login']);
          
      }
    }
  }
}
