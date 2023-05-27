import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { InscriptionServiceService } from '../service/inscription-service.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent {
 
  // constructor(private formBuilder: FormBuilder, private inscriptionServiceService: InscriptionServiceService) { }
  

  //   registrationForm = this.formBuilder.group({
  //     firstName: ['', Validators.required],
  //     lastName: ['', Validators.required],
  //     email: ['', [Validators.required, Validators.email]],
  //     password: ['', Validators.required],
  //     confirmPassword: ['', Validators.required],
  //     acceptTerms: [false, Validators.requiredTrue]
  //   });
  


   
  
    // onSubmit() {
    //   if (this.registrationForm.valid) {
    //     console.log('Form submitted successfully!');
    //     // Ajoutez ici le code pour envoyer les données d'inscription au serveur.
    //   } else {
    //     console.log('Form validation failed!');
    //   }
    

 


   
      // const user = this.registrationForm.value;
      // this.inscriptionServiceService.createUser(user)
      //   .subscribe(
      //     response => {
      //       console.log('User created successfully!', response);
      //     },
      //     error => {
      //       console.log('Error creating user:', error);
      //     }
      //   );
    
 
      //   }
  


      userForm! : FormGroup;
      constructor(private fb: FormBuilder, private http: HttpClient, private router:Router) {
    
    
      this.userForm = this.fb.group ({
        lastname : ['',[Validators.required]],
          firstname : ['',[Validators.required, Validators.minLength(2)]],
          email : ['',[Validators.required, Validators.email]],
          birthday : ['',[Validators.required]],
          password : ['',[Validators.required, this.passwordValidator]],
          confirm_password : ['',[Validators.required, this.compareValidator('password')]],
          // file : ['',Validators.required],
          checkbox : ['',[Validators.required]],
        });
    
        
    
      }
    
    
    
      ngOnInit(): void {
        console.log(this.userForm.value.checkbox);
        console.log(this.userForm.value.confirm_password);
        console.log(this.userForm.errors);
        console.log(this.userForm); 
      }
    
      passwordValidator(control: AbstractControl): ValidationErrors | null {
        const password = control.value;
        const hasNumber = /\d/.test(password);
        const hasUppercase = /[A-Z]/.test(password);
        const hasLowercase = /[a-z]/.test(password);
        const hasSpecialCharacters = /[!@#$%^&*(),.?":{}|<>]/.test(password);
        const isLongEnough = password.length >= 8;
      
        if (!hasNumber || !hasUppercase || !hasLowercase || !hasSpecialCharacters || !isLongEnough) {
          return { 'invalidPassword': true };
        }
      
        return null;
      }
    
    
    
    
      compareValidator(controlName: string) {
        return (control: AbstractControl) => {
          const compareControl = control.root.get(controlName);
          if (compareControl && control.value !== compareControl.value) {
            return { 'compare': true };
          }
          return null;
        };
      }
    
      onSubmit() {
        const user = {
          username: this.userForm.value.lastname, // Utilisez 'lastname' pour la propriété 'username'
          lastname: this.userForm.value.lastname,
          birthday: this.userForm.value.birthday,
          email: this.userForm.value.email,
          password: this.userForm.value.password
        };
        // ...
      
      
      
        const headers = new HttpHeaders({
          'Content-Type': 'application/json',
          'skipInterceptor': '' // Ajoutez ce header pour ignorer l'intercepteur pour cette requête
        });
      
        this.http.post('http://localhost:8080/users/register', JSON.stringify(user), { headers }).subscribe(
          (response) => {
            console.log('Envoi réussi');
            this.router.navigate(["connexion"]);
            console.log(response);
          },
          error => {
            console.error(error);
          }
        );
      }
      
      
    
      // onFileChange(event: Event) {
      //   console.log(event);
        
      //   const input = event.target as HTMLInputElement;
      //   if (input.files && input.files.length) {
      //     this.file = input.files[0];
      //   }
    
    
    
    
  

      }