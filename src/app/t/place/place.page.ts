import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-place',
  templateUrl: './place.page.html',
  styleUrls: ['./place.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class PlacePage implements OnInit {

  prop: any = {};

  // This data represents a database 
  // not client-side data
  properties = [
    {
      id: "98092384390228402",
      name: "Germaine Terrace",
      address: "1232 Camel St, San Diego CA 92101",
      leasers: 4,
      type: "Apartment"
    },
  ];

  // This data represents a database 
  // not client-side data
  leasers = [
    {
      id: 'abcdefghij123456',
      firstName: 'John',
      lastName: 'Doe',
      email: 'johndoe@example.com',
      amount: 1000,
      schedule: 'monthly',
      startDate: '2023-01-01',
      endDate: '2023-12-31',
    },
    {
      id: 'klmnopqrstuvw123',
      firstName: 'Jane',
      lastName: 'Doe',
      email: 'janedoe@example.com',
      amount: 800,
      schedule: 'monthly',
      startDate: '2023-02-01',
      endDate: '2024-01-31',
    },
  ];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
  }

  onSearch(email: string) {
    const leaser = this.leasers.find((l) => l.email === email);
    if (leaser) {
      // this.router.navigate(['/property', this.propertyId, 'leaser', leaser.id]);
    }
  }

  ionViewWillEnter() {
    const id = this.route.snapshot.paramMap.get('id')||'';
    this.prop = this.properties.find((p) => p.id === id)||{};
  }
}
