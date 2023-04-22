import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

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
      name: "Germaine Terrace",
      leasers: 4
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
