import { Injectable } from '@nestjs/common';
import { IUser } from '@dapr/shared/types';

// This is a simple service that returns a greeting message.
// It also demonstrates the use of an imported IUser type.
// The IUser type is imported from a shared types library, which is useful for type safety and consistency across the application.
@Injectable()
export class AppService {
  getHello(): string {
    const user: IUser = {};
    return 'Hello World!';
  }
}
