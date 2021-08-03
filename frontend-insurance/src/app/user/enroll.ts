export interface Enroll
{
    enrollmentId: number,
    user: {
      userId: number,
      password: string,
      email: string,
      name: string,
      mobile: string,
      plan: null,
      memberSince: Date,
      nextPaymentDate: string
    },
    plan: {
      planId: number,
      name: string,
      cost:number,
      details: string,
      deductible: number
    }
  }