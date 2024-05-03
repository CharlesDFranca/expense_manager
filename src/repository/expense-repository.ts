import { ITransactionDTO } from "../dtos/transactionDTO";
import Expense from "../entities/Expense";

export default interface IExpenseRepository {
  saveExpense(input: ITransactionDTO): Expense;
  getAllExpenseTransactions(): Expense[];
  getTotalExpenseValue(): number;
}
