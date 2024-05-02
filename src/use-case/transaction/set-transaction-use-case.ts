import { TTransactionType } from "../../dtos/transactionDTO";
import ITransactionRepository from "../../repository/transaction-repository";

export default class SetTransactionUseCase {
  constructor(readonly transactionRepository: ITransactionRepository) {}

  execute(input: TTransactionType): void {
    this.transactionRepository.setTransaction(input);
  }
}
