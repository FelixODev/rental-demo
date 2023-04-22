import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-assets',
  templateUrl: './assets.page.html',
  styleUrls: ['./assets.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class AssetsPage implements OnInit {

  public assets: any[] = [
    {
      id: "98092384390228402",
      name: "Germaine Terrace",
      address: "1232 Camel St, San Diego CA 92101",
      leasers: 4,
      type: "Apartment"
    }
  ];

  constructor(public router: Router){
    if (this.router.getCurrentNavigation()?.extras.state){
      const item = this.router.getCurrentNavigation()?.extras.state||{};
      if(item['name']!='')
        this.assets.push(item);
    }
  }

  ngOnInit() {
  }

}
