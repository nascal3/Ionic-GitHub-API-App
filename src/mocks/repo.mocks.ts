import { RepoInterface } from '../models/repo.interface';
import { USER_LIST } from './user.mocks';

const repoList: RepoInterface[] = [
    {
     name: 'Ionic 3 Camera',
     description: 'this whows how to use camera',
     owner: USER_LIST[0],
    },
  {
     name: 'Ionic 3 SMS',
     description: 'this hows how to use sms',
     owner: USER_LIST[1],
    },
  {
     name: 'Ionic 3 Geo',
     description: 'this hows how to use geo location',
     owner: USER_LIST[0],
    },
  {
     name: 'Ionic 3 CALLS',
     description: 'this hows how to use call',
     owner: USER_LIST[1],
    },
 ];

export const REPOSITORY_LIST  = repoList;
