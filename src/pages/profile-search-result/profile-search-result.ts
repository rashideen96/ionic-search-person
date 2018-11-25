import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { GithubServices } from '../../providers/github-service/github-service';
import { User } from "../../models/user.interface";

/**
 * Generated class for the ProfileSearchResultPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile-search-result',
  templateUrl: 'profile-search-result.html',
})
export class ProfileSearchResultPage {

  username:string;
  name:string;

  user: User

  constructor(private github: GithubServices, private navCtrl: NavController, private navParams: NavParams) {
  }
  

  // get user info object 
 
  getUserInfo():void{
    this.github.getUserInfo(this.username).subscribe((data:User)=>this.user=data);

    this.github.getUserInfo(this.username).subscribe(data=>console.log(data));
  }

  getRepository():void{
    this.github.getRepos(this.username).subscribe(data=>console.log(data));
  }

  ionViewDidLoad() {
    // this.username = this.navParams.get('username');
    //console.log(this.username);

    this.username = this.navParams.get('username');

    


    if(this.username){
       this.getUserInfo();
      // this.getRepository();
    }
  }

}
