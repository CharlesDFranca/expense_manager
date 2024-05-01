export interface transactionDTO {
  amount: number;
  description: string;
  date: Date;
  type?: string;
  paymentMethod: string;
}
