import IIncomeRepository from "../../repository/income-repository";

export default class GetTotalIncomeValueUseCase {
  constructor(readonly incomeRepository: IIncomeRepository) {}

  execute(): number {
    return this.incomeRepository.getTotalIncomeValue();
  }
}
