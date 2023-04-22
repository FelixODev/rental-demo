import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-create-asset',
  templateUrl: './create-asset.page.html',
  styleUrls: ['./create-asset.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class CreateAssetPage implements OnInit {

  public asset: any = {
    name: '',
    type: ''
  };

  constructor() { }

  ngOnInit() {
  }

}
