import { Component, Input } from '@angular/core';
import { RepoInterface } from '../../models/repo.interface';

/**
 * Generated class for the RepositoriesComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'repositories',
  templateUrl: 'repositories.components.html'
})
export class RepositoriesComponent {

  @Input() repository: RepoInterface;



}
