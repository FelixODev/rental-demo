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

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
  }

  ionViewWillEnter() {
    const id = this.route.snapshot.paramMap.get('id')||'';
    this.prop = this.properties.find((p) => p.id === id)||{};
  }

  onSearch(ev: any|string) {
    // const leaser = this.leasers.find((l) => l.email === email);
    // if (leaser) {
      this.router.navigate(['t/lease/', ev.detail.value]);
    // }
    // console.log(email)
  }
}
