import { ITransactionDTO, TTransactionType } from "../dtos/transactionDTO";
import Expense from "../entities/Expense";
import Income from "../entities/Income";
import ITransactionRepository from "../repository/transaction-repository";

export default class TransactionRepositoryMemory implements ITransactionRepository {
  incomes: Income[] = [];
  expenses: Expense[] = [];
  transactions: TTransactionType[] = [];

  saveIncome(input: ITransactionDTO): Income[] {
    const transaction = new Income(input);
    this.incomes.push(transaction);
    this.transactions.push(transaction);
    return this.incomes;
  }

  saveExpense(input: ITransactionDTO): Expense[] {
    const transaction = new Expense(input);
    this.expenses.push(transaction);
    this.transactions.push(transaction);
    return this.expenses;
  }

  getAllTransactions(): TTransactionType[] {
    return this.transactions;
  }
}
