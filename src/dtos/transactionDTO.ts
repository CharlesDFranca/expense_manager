export interface ITransactionDTO {
  id: string;
  amount: number;
  description: string;
  date: Date;
  type?: string;
  paymentMethod: string;
}
