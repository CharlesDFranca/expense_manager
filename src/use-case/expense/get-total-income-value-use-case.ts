import IExpenseRepository from "../../repository/expense-repository";

export default class GetTotalExpenseValueUseCase {
  constructor(readonly expenseRepository: IExpenseRepository) {}

  execute(): number {
    return this.expenseRepository.getTotalExpenseValue();
  }
}
