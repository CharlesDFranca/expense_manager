import { ITransactionDTO } from "../dtos/transactionDTO";
import Expense from "../entities/Expense";

export default interface IExpenseRepository {
  saveExpense(input: ITransactionDTO): Expense;
  getTotalExpenseValue(): number;
}
