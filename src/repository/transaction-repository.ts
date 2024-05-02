import { ITransactionDTO } from "../dtos/transactionDTO";
import Expense from "../entities/Expense";
import Income from "../entities/Income";

export default interface ITransactionRepository {
  saveIncome(input: ITransactionDTO): Income[];
  saveExpense(input: ITransactionDTO): Expense[];
}
