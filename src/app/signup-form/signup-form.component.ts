import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserslistService } from 'src/app/userslist.service';


interface FormControl {
  status: string;
  touched: boolean;
  invalid: boolean;
  errors: {
    required?: boolean;
    minlength?: boolean;
    maxlength?: boolean;
  }
}

const defaultFormControl: FormControl = {
  status: 'VALID',
  touched: false,
  invalid: false,
  errors: {},
};

interface SignupForm {
  form: {
    controls: {
      firstName: FormControl;
      lastName: FormControl;
      email: FormControl;
      password: FormControl;
      confirm: FormControl;
    };
  };
}

const defaultSignupForm: SignupForm = {
  form: {
    controls: {
      firstName: defaultFormControl,
      lastName: defaultFormControl,
      email: defaultFormControl,
      password: defaultFormControl,
      confirm: defaultFormControl
    },
  },
};


@Component({
  selector:  'app-signup-form',
  templateUrl:  './signup-form.component.html',
  styleUrls:  ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {
  firstName: FormControl = defaultFormControl;
  lastName: FormControl = defaultFormControl;
  email: FormControl = defaultFormControl;
  password: FormControl = defaultFormControl;
  confirm: FormControl = defaultFormControl;
  formSignup: SignupForm = defaultSignupForm;
  signupForm: any = {};
  registered = false;
  

  onSubmit(signup: any) {
    
    this.formSignup = signup as SignupForm
    this.firstName = signup.form.controls.firstName as FormControl;
    this.lastName = signup.form.controls.lastName as FormControl;
    this.email = signup.form.controls.email as FormControl;
    this.password = signup.form.controls.password as FormControl;
    this.confirm= signup.form.controls.confirm as FormControl;
  
   
      if(!signup.valid){
        this.signupForm = false;
        return;
        }else{
          console.log(signup.value);
          localStorage.setItem('user',JSON.stringify(signup.value));
          this.userslistService.signedUser(signup);
          this.registered = true;
        }
       
  }

  constructor( private userslistService: UserslistService) {  }

  ngOnInit(): void {
  }
  

}
