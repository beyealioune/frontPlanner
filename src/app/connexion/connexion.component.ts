import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConnexionServiceService } from '../service/connexion-service.service';


@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent {


  // loginForm!: FormGroup;

  // constructor(private fb: FormBuilder) { }

  // ngOnInit() {
  //   this.loginForm = this.fb.group({
  //     email: ['', [Validators.required, Validators.email]],
  //     password: ['', Validators.required],
  //     rememberMe: [false]
  //   });
  // }

  // onSubmit() {
  //   if (this.loginForm.valid) {
  //     // Envoyer les données du formulaire au serveur ou traiter les données localement
  //     console.log(this.loginForm.value);
  //   }
  // }
  
  
  email!: string;
  password!: string;
  erreur: boolean = false;

  user: any;
  constructor(private ConnexionServiceService: ConnexionServiceService, private router: Router,
  ) { }



  ngOnInit(): void {
    // this.positionService.saveLocation(2, {latitude : 7896545, longitude : 123654}).subscribe(data => console.log(data))
  }


  login(): void {
    console.log(this.email + this.password);

    this.ConnexionServiceService.login(this.email, this.password).subscribe(
      (response) => {
        // Si la connexion réussit, stocker le token dans le localStorage
        localStorage.setItem('token', response.token);
        localStorage.setItem('userId', response.user.id);
        localStorage.setItem('lastname', response.user.lastname);
        localStorage.setItem('firstname', response.user.firstname);
        localStorage.setItem('photo', response.user.photo);
        localStorage.setItem('roles', JSON.stringify(response.user.admin));


        console.log( "useeeer",response.user);
        this.user = response.user;
        

     
        console.log('user profil', this.user)

        const userId = Number(localStorage.getItem("userId"));

    
        
          // Vérifier si l'utilisateur a le rôle "ADMIN"
        // const isAdmin = response.user.roles.some((role: { name: string; }) => role.name === 'ADMIN');
        const isAdmin = response.user.admin 

          // Rediriger l'utilisateur vers la page appropriée en fonction de son rôle
        if (isAdmin) {
          this.router.navigate(['/home']);
        } else {
          this.router.navigate(['/home']);
          this.ConnexionServiceService.updateData(true)
        }
        

      },
      (error) => {
        // Si la connexion échoue, afficher un message d'erreur
        console.log('Erreur de connexion : ' + error);
      }
    );
  }



  
}
