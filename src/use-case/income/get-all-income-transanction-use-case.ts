import IIncomeRepository from "../../repository/income-repository";

export default class GetAllIncomeTransactionsUseCase {
  constructor(readonly incomeRepository: IIncomeRepository) {}

  execute() {
    return this.incomeRepository.getAllIncomeTransactions();
  }
}
