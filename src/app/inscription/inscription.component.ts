import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { InscriptionServiceService } from '../service/inscription-service.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent {
 
  constructor(private formBuilder: FormBuilder, private inscriptionServiceService: InscriptionServiceService) { }
  

    registrationForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      acceptTerms: [false, Validators.requiredTrue]
    });
  
   
  
    onSubmit() {
      if (this.registrationForm.valid) {
        console.log('Form submitted successfully!');
        // Ajoutez ici le code pour envoyer les données d'inscription au serveur.
      } else {
        console.log('Form validation failed!');
      }
    

 


   
      const user = this.registrationForm.value;
      this.inscriptionServiceService.createUser(user)
        .subscribe(
          response => {
            console.log('User created successfully!', response);
          },
          error => {
            console.log('Error creating user:', error);
          }
        );
    
 
        }
  

  

      }