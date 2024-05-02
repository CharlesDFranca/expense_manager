import { ITransactionDTO } from "../../dtos/transactionDTO";
import Income from "../../entities/Income";
import IIncomeRepository from "../../repository/income-repository";

export default class CreateIncomeTransactionUseCase {
  constructor(readonly incomeRepository: IIncomeRepository) {}

  execute(data: ITransactionDTO): Income {
    const transaction = this.incomeRepository.saveIncome(data);
    return transaction;
  }
}
