import { MotorPremiumInterface } from '@bdcomputing/types';

export function calculateMotorPremium(): MotorPremiumInterface {
  return {
    subTotal: 1000,
    total: 1200,
    discount: 0,
    tax: 0,
    premium: 0,
    coverType: '',
    vehicleValue: 0,
  };
}
