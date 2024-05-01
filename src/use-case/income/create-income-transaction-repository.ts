import { transactionDTO } from "../../dtos/transactionDTO";
import Income from "../../entities/Income";
import ITransactionRepository from "../../repository/transaction-repository";

export default class CreateIncomeTransactionUseCase {
  constructor(readonly transactionRepository: ITransactionRepository) {}

  execute(data: transactionDTO): Income[] {
    const transaction = this.transactionRepository.saveIncome(data);
    return transaction;
  }
}
