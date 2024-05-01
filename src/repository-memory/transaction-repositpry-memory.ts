import { transactionDTO } from "../dtos/transactionDTO";
import Income from "../entities/Income";
import ITransactionRepository from "../repository/transaction-repository";

export default class TransactionRepositoryMemory
  implements ITransactionRepository
{
  incomes: Income[] = [];

  saveIncome(input: transactionDTO): Income[] {
    const transaction = new Income(input);
    this.incomes.push(transaction);
    return this.incomes;
  }
}
