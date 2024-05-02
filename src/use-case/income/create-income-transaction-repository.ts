import { ITransactionDTO } from "../../dtos/transactionDTO";
import Income from "../../entities/Income";
import IIncomeRepository from "../../repository/income-repository";

export default class CreateIncomeTransactionUseCase {
  constructor(readonly transactionRepository: IIncomeRepository) {}

  execute(data: ITransactionDTO): Income {
    const transaction = this.transactionRepository.saveIncome(data);
    return transaction;
  }
}
