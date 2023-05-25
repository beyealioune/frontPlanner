import { Component, OnInit } from '@angular/core';
import { ColorPickerModule } from 'ngx-color-picker';

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



 


  friends: Friend[] = [
    { name: 'Alice', photo: 'https://randomuser.me/api/portraits/women/1.jpg' },
    { name: 'Bob', photo: 'https://randomuser.me/api/portraits/men/1.jpg' },
    { name: 'Charlie', photo: 'https://randomuser.me/api/portraits/men/2.jpg' },
    { name: 'Dave', photo: 'https://randomuser.me/api/portraits/men/3.jpg' },
    { name: 'Eve', photo: 'https://randomuser.me/api/portraits/women/2.jpg' },
    { name: 'Frank', photo: 'https://randomuser.me/api/portraits/men/4.jpg' },
  ];

  shareScheduleWith(friend: Friend) {
    console.log(`Sharing schedule with ${friend.name}`);
    // Appeler la fonction pour ajouter l'ami à la liste des amis avec qui l'emploi du temps est partagé.
}

get filteredFriends() {
return this.friends.filter((friend) =>
friend.name.toLowerCase().includes(this.searchText.toLowerCase())
);
}




 ngOnInit(): void {
 }


 

 name: string = '';
 color: string = '';

 toggleShare() {
   // Code pour activer/désactiver le partage d'emploi du temps
 }
 showColorPicker() {
  const colorPicker = document.createElement('input');
  colorPicker.type = 'color';
  colorPicker.addEventListener('change', (event) => {
    const selectedColor = ($event: any) => $event.target.value;
    console.log(selectedColor);
  });
  colorPicker.click();
}



 


}
