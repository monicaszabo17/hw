
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';



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

interface SigninForm {
  form: {
    controls: {
      email: FormControl;
      password: FormControl;
    };
  };
}

const defaultSigninForm: SigninForm = {
  form: {
    controls: {
      email: defaultFormControl,
      password: defaultFormControl
    },
  },
};

@Component({
  selector: 'app-signin-form',
  templateUrl: './signin-form.component.html',
  styleUrls: ['./signin-form.component.css']
})

export class SigninFormComponent implements OnInit {
  
  email: FormControl = defaultFormControl;
  password: FormControl = defaultFormControl;
  
  formSignin: SigninForm = defaultSigninForm;
  signinForm: any = {};
  userAuthenticate = false;
  
  
  constructor() {}

     ngOnInit(): void { }


  onSubmit(signin: any) {
    this.formSignin = signin as SigninForm;
    
    this.email = signin.form.controls.email as FormControl;
    this.password = signin.form.controls.password as FormControl;
    
     if(!signin.valid){
      this.signinForm = false;
      return;
      }else{
        console.log(signin.value);
        localStorage.setItem('signin',JSON.stringify(signin.value));
        this.userAuthenticate = true;
      }
     
       
  }

}
  
  


