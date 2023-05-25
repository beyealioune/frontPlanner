import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';
import * as moment from 'moment';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  timeSlots = ['9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00','18:00','19:00','20:00'];



  startDate!: string; // Déclare la variable startDate comme une chaîne de caractères
  endDate!: string; // Déclare la variable endDate comme une chaîne de caractères
  days: { name: string, date: string }[] = []; // Initialise la variable days comme un tableau vide

  ngOnInit(): void {
    const currentMoment = moment(); // Initialise la variable currentMoment avec la date actuelle
    const weekStart = currentMoment.startOf('week'); // Initialise la variable weekStart avec la date du début de semaine
    this.startDate = weekStart.format('YYYY-MM-DD'); // Initialise startDate avec la date du début de semaine au format DD/MM/YYYY
    const weekEnd = currentMoment.endOf('week'); // Initialise la variable weekEnd avec la date de fin de semaine
    this.endDate = weekEnd.format('YYYY-MM-DD');    // Initialise endDate avec la date de fin de semaine au format DD/MM/YYYY
    this.updateDays(weekStart.toDate()); // Initialise les jours avec la date du début de semaine
  }






  isAvailable(date: string, timeSlot: string): boolean {
    // Your code here to check the availability for the given date and time slot
    return true
  }
  
  

  previousWeek() {
    this.startDate = moment(this.startDate).subtract(1, 'weeks').startOf('week').format('YYYY-MM-DD');
    this.endDate = moment(this.startDate).add(6, 'days').format('YYYY-MM-DD');
    this.updateDays(new Date(this.startDate));
    return false;
}

  
  

  nextWeek() {
    this.startDate = moment(this.startDate).add(1, 'weeks').startOf('week').format('YYYY-MM-DD');
    this.endDate = moment(this.startDate).add(6, 'days').format('YYYY-MM-DD');
    this.updateDays(new Date(this.startDate));
    return false;
  }
  

  updateDays(weekStart: Date) {
    this.days = []; // Réinitialise le tableau days
    for (let i = 0; i < 7; i++) {
      const date = new Date(weekStart);
      date.setDate(weekStart.getDate() + i);
      const dayName = formatDate(date, 'EEE', 'en');
      const dayNumber = formatDate(date, 'd', 'en');
      this.days.push({ name: dayName, date: dayNumber });
    }
  }

}





