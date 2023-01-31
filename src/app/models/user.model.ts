export interface UserModel {
  name: string;
  phone: string;
  friends: UserWithIdModel[];
  meetings: string[];
}

export interface UserWithIdModel extends UserModel {
  id: string;
}
