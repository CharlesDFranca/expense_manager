import { ITransactionDTO } from "../../dtos/transactionDTO";
import Expense from "../../entities/Expense";
import IExpenseRepository from "../../repository/expense-repository";
import ITransactionRepository from "../../repository/transaction-repository";

export default class CreateExpenseTransactionUseCase {
  constructor(
    readonly expenseRepository: IExpenseRepository,
    readonly transactionRepository: ITransactionRepository,
  ) {}

  execute(data: ITransactionDTO): Expense {
    const transaction = this.expenseRepository.saveExpense(data);
    this.transactionRepository.setTransaction(transaction);
    return transaction;
  }
}
