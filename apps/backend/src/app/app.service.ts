import { Injectable } from '@nestjs/common';
import { IUser } from '@bdcomputing/types';
import { getUserInitials } from '@bdcomputing/utils';

@Injectable()
export class AppService {
  getData(): { message: string } {
    const user: IUser = { name: 'John Doe', email: 'info@bd.co.ke' };
    const initials = getUserInitials(user);
    return { message: 'Hello ' + initials + '!' };
  }
}
