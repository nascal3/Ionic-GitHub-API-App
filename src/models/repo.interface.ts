import {User} from './user.interface';

export interface RepoInterface {
  name: string;
  description: string;
  owner: User
}
