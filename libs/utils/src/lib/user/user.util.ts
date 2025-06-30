import { IUser } from '@dapr/types';

export function getUserInitials(user: IUser): string {
  return user.name
    .split(' ')
    .map((name) => name.charAt(0).toUpperCase())
    .join('');
}
