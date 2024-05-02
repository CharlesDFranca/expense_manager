import { TTransactionType } from "../../dtos/transactionDTO";
import ITransactionRepository from "../../repository/transaction-repository";

export default class GetAllTransactionsUseCase {
  constructor(readonly transactionRepository: ITransactionRepository) {}

  execute(): TTransactionType[] {
    const transactions = this.transactionRepository.getAllTransactions();
    return transactions;
  }
}
