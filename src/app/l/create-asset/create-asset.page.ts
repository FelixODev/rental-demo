import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, NavController } from '@ionic/angular';

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
    leasers: 0,
    type: '',
    address: ''
  };

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  onSubmit() {
    this.navCtrl.navigateBack('/l/assets',{
      state: this.asset
    })
  }

}
