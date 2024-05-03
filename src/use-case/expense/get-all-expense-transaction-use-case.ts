import IExpenseRepository from "../../repository/expense-repository";

export default class GetAllExpenseTransactionsUseCase {
  constructor(readonly expenseRepository: IExpenseRepository) {}

  execute() {
    return this.expenseRepository.getAllExpenseTransactions();
  }
}
