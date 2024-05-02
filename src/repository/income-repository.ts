import { ITransactionDTO } from "../dtos/transactionDTO";
import Income from "../entities/Income";

export default interface IIncomeRepository {
  saveIncome(input: ITransactionDTO): Income;
}
