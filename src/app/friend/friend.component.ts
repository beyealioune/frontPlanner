import { Component, OnInit } from '@angular/core';
import { ColorPickerModule } from 'ngx-color-picker';
import { UserService } from '../service/user.service';
import { FriendService } from '../service/friend.service';

interface Friend {
  name: string;
  photo: string;
}

@Component({
  selector: 'app-friend',
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.css']
})
export class FriendComponent implements OnInit {
  searchText: string = '';
  users!: any[]; // Votre tableau d'utilisateurs
  filteredUsers!: any[]; // Tableau des utilisateurs filtrés
  searchTerm!: string; // Terme de recherche saisi par l'utilisateur
  selectedUserId: number | null = null ;
  userId!: any;


  constructor(private userService: UserService, private friendService : FriendService ) {}


  friends: Friend[] = [
    { name: 'Alice', photo: 'https://randomuser.me/api/portraits/women/1.jpg' },
    { name: 'Bob', photo: 'https://randomuser.me/api/portraits/men/1.jpg' },
    { name: 'Charlie', photo: 'https://randomuser.me/api/portraits/men/2.jpg' },
    { name: 'Dave', photo: 'https://randomuser.me/api/portraits/men/3.jpg' },
    { name: 'Eve', photo: 'https://randomuser.me/api/portraits/women/2.jpg' },
    { name: 'Frank', photo: 'https://randomuser.me/api/portraits/men/4.jpg' },
  ];

//   shareScheduleWith(user: Friend) {
//     console.log(`Sharing schedule with ${friend.name}`);
//     // Appeler la fonction pour ajouter l'ami à la liste des amis avec qui l'emploi du temps est partagé.
// }

// get filteredFriends() {
// return this.friends.filter((friend) =>
// friend.name.toLowerCase().includes(this.searchText.toLowerCase())
// );
// }


updateFriends() {
  if (this.selectedUserId) {
    this.friends = this.users.filter(user => user.id === this.selectedUserId);
  } else {
    this.friends = []; // Aucun ami sélectionné, réinitialiser la liste des amis
  }
}







 

 name: string = '';
 color: string = '';

 toggleShare(userId: number) {
  if (this.selectedUserId === userId) {
    this.selectedUserId = null; // Désactiver le partage
  } else {
    this.selectedUserId = userId; // Activer le partage avec l'utilisateur sélectionné
  }
  this.updateFriends(); // Mettre à jour la liste des amis
}


//  showColorPicker() {
//   const colorPicker = document.createElement('input');
//   colorPicker.type = 'color';
//   colorPicker.addEventListener('change', (event) => {
//     const selectedColor = ($event: any) => $event.target.value;
//     console.log(selectedColor);
//   });
//   colorPicker.click();
// }

showColorPicker() {
  const colorPicker = document.createElement('input');
  colorPicker.type = 'color';
  colorPicker.addEventListener('change', (event) => {
    const target = event.target as HTMLInputElement;
    const selectedColor = target.value;

      const userId = this.userId; // Remplacez par l'ID de l'utilisateur correspondant
      if (selectedColor) {
        // Mettez à jour la couleur de l'utilisateur correspondant
        const userToUpdate = this.users.find(user => user.id === userId);
        if (userToUpdate) {
          userToUpdate.couleur = selectedColor;
      this.friendService.updateUserColor(userId, selectedColor).subscribe(
        response => {
          console.log('Couleur mise à jour avec succès !', response);
          // Faites quelque chose après la mise à jour réussie
        },
        error => {
          console.error('Erreur lors de la mise à jour de la couleur :', error);
          // Gérez l'erreur en conséquence
        }
      );
    }
}});
  colorPicker.click();
}





// showColorPicker(user: any) {
//   const colorPicker = document.createElement('input');
//   colorPicker.type = 'color';
//   colorPicker.addEventListener('change', (event) => {
//     const selectedColor = (event.target as HTMLInputElement)?.value;
//     if (selectedColor) {
//       this.friendService.updateFriendColor(user.id, selectedColor).subscribe(
//         (updatedUser) => {
//           user.color = updatedUser.color; // Mettre à jour la couleur dans l'objet user
//         },
//         (error) => {
//           console.error('Erreur lors de la mise à jour de la couleur', error , "la couleur ", selectedColor);
//         }
//       );
//     }
//   });
//   colorPicker.click();
// }









ngOnInit() {
  this.userService.getUsers().subscribe(data => {
    this.users = data;
    console.log("USERRRRR ", this.users);
    

    // Appeler filterUsers ici, une fois que les utilisateurs sont disponibles
    this.filterUsers();

    
  });


  console.log(localStorage.getItem('token'));
}

filterUsers() {
  if (this.users) {
    // Filtrer les utilisateurs en fonction du terme de recherche
    this.filteredUsers = this.users.filter(user =>
      user.username.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      user.lastname.toLowerCase().includes(this.searchTerm.toLowerCase())
      
    );

    console.log("filtre", this.filteredUsers);
  }
}


findId(userId: number) {
  if (this.users) {
    // Filtrer les utilisateurs en fonction du terme de recherche
    this.filteredUsers = this.users.filter(user =>
      user.username.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      user.lastname.toLowerCase().includes(this.searchTerm.toLowerCase())
    );

    console.log("filtre", this.filteredUsers);

    // Utilisez l'ID de l'utilisateur pour effectuer les actions souhaitées
    console.log("Utilisateur sélectionné :", userId);

    // Appel à votre service ou autre traitement
    this.userId = userId
    const selectedUser = this.users.find(user => user.id === userId);
    if (selectedUser) {
      const newFriend = {
        user: {
          id: selectedUser.id,
          couleur: selectedUser.couleur
        }
      };

      this.friendService.createFriend(newFriend).subscribe(response => {
        console.log('Friend added successfully!', response);
        this.updateFriends(); // Mettre à jour la liste des amis après l'ajout
      }, error => {
        console.error('Error adding friend:', error);
      });
  }
}
}
 


}
