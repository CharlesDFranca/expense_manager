import { transactionDTO } from "../dtos/transactionDTO";
import Expense from "../entities/Expense";
import Income from "../entities/Income";

export default interface ITransactionRepository {
  saveIncome(input: transactionDTO): Income[];
  saveExpense(input: transactionDTO): Expense[];
}
