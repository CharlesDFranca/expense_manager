import { ITransactionDTO } from "../dtos/transactionDTO";
import Income from "../entities/Income";
import IIncomeRepository from "../repository/income-repository";

export default class IncomeRepositoryMemory implements IIncomeRepository {
  incomes: Income[] = [];

  saveIncome(input: ITransactionDTO): Income {
    const transaction = new Income(input);
    this.incomes.push(transaction);
    return transaction;
  }

  getTotalIncomeValue(): number {
    const totalIncomeValue = this.incomes
      .map((income) => income.data.amount)
      .reduce((accumulator, value) => accumulator + value, 0);

    return totalIncomeValue;
  }
}
