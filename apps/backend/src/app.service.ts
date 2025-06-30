import { Injectable } from '@nestjs/common';
import { IUser } from '@dapr/types';
import { getUserInitials } from '@dapr/utils';

@Injectable()
export class AppService {
  getHello(): string {
    const user: IUser = {
      name: 'John Doe',
      email: 'john@email.com',
    };

    return getUserInitials(user);
  }
}
