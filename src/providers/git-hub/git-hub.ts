import { Injectable } from '@angular/core';
// import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

import { User } from '../../models/user.interface';
import { RepoInterface } from '../../models/repo.interface';

import { USER_LIST } from '../../mocks/user.mocks';
import { REPOSITORY_LIST } from '../../mocks/repo.mocks';

/*
  Generated class for the GitHubProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GitHubProvider {

  private baseURL = "https://api.github.com/users";
  private repoURL = "repos";

  constructor(
    public http: HttpClient
  ) {
    console.log('Hello GitHubProvider Provider');
  }

  getUserInfo(username: string): Observable<User> {
    return this.http.get(`${this.baseURL}/${username}`);
  }

   getUserRepo(username: string): Observable<RepoInterface[]> {
    return this.http.get(`${this.baseURL}/${username}/${this.repoURL}`);
  }

  mockGetUserInfo(username: string): Observable<User> {
    return Observable.of(USER_LIST.filter(user =>user.name === username)[0]);
  }

   mockGetUserRepo(username: string): Observable<RepoInterface[]> {
    return Observable.of(REPOSITORY_LIST.filter(repository =>repository.owner.name === username));
  }

}
