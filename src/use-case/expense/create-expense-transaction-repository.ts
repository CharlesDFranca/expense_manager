import { transactionDTO } from "../../dtos/transactionDTO";
import Expense from "../../entities/Expense";
import ITransactionRepository from "../../repository/transaction-repository";

export default class CreateExpenseTransactionUseCase {
  constructor(readonly transactionRepository: ITransactionRepository) {}

  execute(data: transactionDTO): Expense[] {
    const transaction = this.transactionRepository.saveExpense(data);
    return transaction;
  }
}
