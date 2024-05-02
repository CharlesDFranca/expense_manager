import { ITransactionDTO } from "../dtos/transactionDTO";
import Expense from "../entities/Expense";
import IExpenseRepository from "../repository/expense-repository";

export default class ExpenseRepositoryMemory implements IExpenseRepository {
  expenses: Expense[] = [];

  saveExpense(input: ITransactionDTO): Expense {
    const transaction = new Expense(input);
    this.expenses.push(transaction);
    return transaction;
  }
}