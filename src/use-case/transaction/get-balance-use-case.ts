import ITransactionRepository from "../../repository/transaction-repository";

export default class GetBalanceUseCase {
  constructor(readonly transactionRepository: ITransactionRepository) {}

  execute(): number {
    return this.transactionRepository.getBalance();
  }
}
