import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GitHubProvider } from '../../providers/git-hub/git-hub';
import { User } from '../../models/user.interface';
import { RepoInterface} from '../../models/repo.interface';

/**
 * Generated class for the ProfileResultsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  segment: 'profile/results/:username'
})
@Component({
  selector: 'page-profile-results',
  templateUrl: 'profile-results.html',
})
export class ProfileResultsPage {

  username: string;
  user: User;
  repo: RepoInterface[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public gitService: GitHubProvider
    ) {
  }

  ionViewWillLoad() {
    this.username = this.navParams.get('username');
    this.getUserInfo();
  }

  getUserInfo() {
    this.gitService.getUserInfo(this.username).subscribe(user => {
      this.user = user;
      console.log(user);
    });
    this.gitService.getUserRepo(this.username).subscribe(data => {
      this.repo = data;
    })
  }

}
