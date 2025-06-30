import { Injectable } from '@nestjs/common';
import { IUser, MotorPremiumInterface } from '@bdcomputing/types';
import { getUserInitials } from '@bdcomputing/utils';
import { calculateMotorPremium } from '@bdcomputing/calculators';

@Injectable()
export class AppService {
  getData(): { message: string; premium: MotorPremiumInterface } {
    const user: IUser = { name: 'John Doe', email: 'info@bd.co.ke' };
    const initials = getUserInitials(user);
    return {
      message: 'Hello ' + initials + '!',
      premium: calculateMotorPremium(),
    };
  }
}
