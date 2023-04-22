import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-asset',
  templateUrl: './asset.page.html',
  styleUrls: ['./asset.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class AssetPage implements OnInit {

  id: string = '';

  passedAssetDetails: any = {
    id: "98092384390228402",
    name: "Germaine Terrace",
    address: "1232 Camel St, San Diego CA 92101",
    leasers: 4,
    type: "Apartment"
  };

  asset: any = {
    "98092384390228402": [
      {
        name: "Charles Blanton",
        email: "chaba1213@yahoo.com",
        amount: "1800",
        schedule: "Monthly",
        notes: "From Raleigh, NC"
      },
    ]
  }

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
    });
  }

}
