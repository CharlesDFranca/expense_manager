export interface transactionDTO {
  id: string;
  amount: number;
  description: string;
  date: Date;
  type?: string;
  paymentMethod: string;
}
