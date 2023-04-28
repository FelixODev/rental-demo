import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-lease',
  templateUrl: './lease.page.html',
  styleUrls: ['./lease.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class LeasePage implements OnInit {

  lease: any = {};

  // This data represents a database 
  // not client-side data
  leases = [
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

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    const email = this.route.snapshot.paramMap.get('email')||'';
    this.lease = this.leases.find((l) => l.email === email)||{};
  }

}
