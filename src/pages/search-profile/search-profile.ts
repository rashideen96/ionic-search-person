import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-search-profile',
  templateUrl: 'search-profile.html',
})
export class SearchProfilePage {

  username:string;

  constructor(private navCtrl: NavController, private navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchProfilePage');
  }

  getUserInformation():void{
    this.navCtrl.push('ProfileSearchResultPage', {
      username:this.username
    });
  }

}
