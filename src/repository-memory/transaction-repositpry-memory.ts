import { TTransactionType } from "../dtos/transactionDTO";
import ITransactionRepository from "../repository/transaction-repository";

export default class TransactionRepositoryMemory implements ITransactionRepository {
  transactions: TTransactionType[] = [];

  setTransaction(input: TTransactionType): void {
    this.transactions.push(input);
  }

  getAllTransactions(): TTransactionType[] {
    return this.transactions;
  }

  getBalance(): number {
    const transactionValues = this.transactions.map((transaction) => {
      if (transaction.data.type === "income") {
        console.log(transaction);
        return transaction.data.amount;
      }
      console.log(transaction);
      return -transaction.data.amount;
    });

    const balance = transactionValues.reduce((accumulator, value) => {
      return accumulator + value;
    }, 0);

    return balance;
  }
}
