import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SearchProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

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
