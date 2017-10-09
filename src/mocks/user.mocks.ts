import { User } from '../models/user.interface';

const userList: User[] = [
  {
    name: 'Jane Doe',
    company: 'PWH',
    location: 'Nairobi West',
    bio: 'I do intersting stuff',
    avatar_url: 'http://i.pravatar.cc/300',
    email: 'jane@gmail.com'
  },
  {
    name: 'John Doe',
    company: 'Doe mans',
    location: 'Nairobi Langata',
    bio: 'I do car wash stuff',
    avatar_url: 'http://i.pravatar.cc/300',
    email: 'john@gmail.com'
  }
];

export const USER_LIST = userList;
