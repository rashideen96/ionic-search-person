// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

// Get user information
import { User } from '../../models/user.interface';
import { USER_LIST } from '../../mocks/user.mocks';

// Get reposity information
import { Repository } from "../../models/repository.interface";
import { REPOSITORY_LIST } from "../../mocks/repository.mocks";



@Injectable()
export class GithubServiceProvider {

  constructor() {
    console.log('connected to services.....');
  }

  

  getUserInfo(username:string): Observable<User>{
    return Observable.of(USER_LIST.filter(user=>user.name===username)[0]);
  }

  getRepos(name:string): Observable<Repository> {
    return Observable.of(REPOSITORY_LIST.filter(repo=>repo.name ===name)[0]);
  }

}
