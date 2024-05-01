import { transactionDTO } from "../../dtos/transactionDTO";
import Expense from "../../entities/Expense";
import ITransactionRepository from "../../repository/transaction-repository";

export default class CreateExpenseTransactionUseCase {
  constructor(
    readonly transactionRepository: ITransactionRepository<Expense>,
  ) {}

  execute(data: transactionDTO): Expense {
    const transaction = new Expense(data);
    return transaction;
  }
}
