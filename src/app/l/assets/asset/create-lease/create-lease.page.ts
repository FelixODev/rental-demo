import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, NavController } from '@ionic/angular';

@Component({
  selector: 'app-create-lease',
  templateUrl: './create-lease.page.html',
  styleUrls: ['./create-lease.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class CreateLeasePage implements OnInit {
  
  lease: any = {
    firstName: '',
    lastName: '',
    email: '',
    amount: 0,
    startDate: '',
    endDate: ''
  };

  constructor(private navCtrl: NavController) {}

  onSubmit() {
    // save lease to database or do something else with it
    this.navCtrl.back();
  }

  ngOnInit() {
  }

}
