import Expense from "../entities/Expense";
import Income from "../entities/Income";

export interface ITransactionDTO {
  id: string;
  amount: number;
  description: string;
  date: Date;
  type?: string;
  paymentMethod: string;
}

export type TTransactionType = (Income & Expense) | Income | Expense;
