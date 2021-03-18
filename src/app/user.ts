export class User {
    firstName: string;
    lastName: string;
     email: string;
     password: string;
     confirm: string;

    constructor(firstName: string, lastName:string, email:string, password: string, confirm:string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.confirm = confirm;
    }

}
