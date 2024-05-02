import { transactionDTO } from "../dtos/transactionDTO";
import Expense from "../entities/Expense";
import Income from "../entities/Income";
import ITransactionRepository from "../repository/transaction-repository";

export default class TransactionRepositoryMemory implements ITransactionRepository {
  incomes: Income[] = [];
  expenses: Expense[] = [];
  transactions: (Income & Expense)[] = [];

  saveIncome(input: transactionDTO): Income[] {
    const transaction = new Income(input);
    this.incomes.push(transaction);
    this.transactions.push(transaction);
    return this.incomes;
  }

  saveExpense(input: transactionDTO): Expense[] {
    const transaction = new Expense(input);
    this.expenses.push(transaction);
    this.transactions.push(transaction);
    return this.expenses;
  }

  getAllTransactions(): (Income & Expense)[] {
    return this.transactions;
  }
}
