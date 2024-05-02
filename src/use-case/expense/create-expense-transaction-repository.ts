import { ITransactionDTO } from "../../dtos/transactionDTO";
import Expense from "../../entities/Expense";
import IExpenseRepository from "../../repository/expense-repository";

export default class CreateExpenseTransactionUseCase {
  constructor(readonly expenseRepository: IExpenseRepository) {}

  execute(data: ITransactionDTO): Expense {
    const transaction = this.expenseRepository.saveExpense(data);
    return transaction;
  }
}
