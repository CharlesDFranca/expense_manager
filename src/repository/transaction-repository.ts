import { TTransactionType } from "../dtos/transactionDTO";

export default interface ITransactionRepository {
  getAllTransactions(): TTransactionType[];
  setTransaction(input: TTransactionType): void;
}
