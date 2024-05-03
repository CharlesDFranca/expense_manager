import { test, describe, expect } from "vitest";
import TransactionRepositoryMemory from "../../src/repository-memory/transaction-repositpry-memory";
import CreateExpenseTransactionUseCase from "../../src/use-case/expense/create-expense-transaction-use-case";
import { randomUUID } from "crypto";
import { ITransactionDTO } from "../../src/dtos/transactionDTO";
import ExpenseRepositoryMemory from "../../src/repository-memory/expense-repository-memory";
import GetTotalExpenseValueUseCase from "../../src/use-case/expense/get-total-expense-value-use-case";
import GetAllExpenseTransactionsUseCase from "../../src/use-case/expense/get-all-expense-transaction-use-case";

const expense: ITransactionDTO = {
  id: randomUUID(),
  amount: 20,
  description: "fast-food",
  date: new Date(),
  paymentMethod: "pix",
};

describe("unit tests of the ExpenseRepositoryMemory class", () => {
  test("create expense", () => {
    const transactionRepository = new TransactionRepositoryMemory();

    const expenseRepository = new ExpenseRepositoryMemory();
    const createExpenseTransaction = new CreateExpenseTransactionUseCase(expenseRepository, transactionRepository);

    const expenseTransaction = createExpenseTransaction.execute(expense);

    expect(expenseTransaction.data.description).toBe("fast-food");
  });

  test("get all expenses", () => {
    const expenseRepository = new ExpenseRepositoryMemory();
    const getAllExpenseTransactions = new GetAllExpenseTransactionsUseCase(expenseRepository);

    const allExpenses = getAllExpenseTransactions.execute();

    expect(allExpenses).toBeTypeOf("object");
  });

  test("get total expense value", () => {
    const expenseRepository = new ExpenseRepositoryMemory();
    const getTotalExpenseValue = new GetTotalExpenseValueUseCase(expenseRepository);

    const totalExpenseValue = getTotalExpenseValue.execute();

    expect(totalExpenseValue >= 20).toBeFalsy();
  });
});
