import { ITransactionDTO } from "../../dtos/transactionDTO";
import Income from "../../entities/Income";
import IIncomeRepository from "../../repository/income-repository";
import ITransactionRepository from "../../repository/transaction-repository";

export default class CreateIncomeTransactionUseCase {
  constructor(
    readonly incomeRepository: IIncomeRepository,
    readonly transactionRepository: ITransactionRepository,
  ) {}

  execute(data: ITransactionDTO): Income {
    const transaction = this.incomeRepository.saveIncome(data);
    this.transactionRepository.setTransaction(transaction);
    return transaction;
  }
}
