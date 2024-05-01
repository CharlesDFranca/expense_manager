import { transactionDTO } from "../dtos/transactionDTO";
import Income from "../entities/Income";
import ITransactionRepository from "../repository/transaction-repository";

export default class CreateTransactionUseCase {
  constructor(readonly transactionRepository: ITransactionRepository<Income>) {}

  execute(data: transactionDTO): Income[] {
    const transaction = this.transactionRepository.save(data);
    return transaction;
  }
}
