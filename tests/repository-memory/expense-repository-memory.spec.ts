import { test, describe, expect } from "vitest";
import TransactionRepositoryMemory from "../../src/repository-memory/transaction-repositpry-memory";
import CreateExpenseTransactionUseCase from "../../src/use-case/expense/create-expense-transaction-repository";
import { randomUUID } from "crypto";
import { ITransactionDTO } from "../../src/dtos/transactionDTO";
import ExpenseRepositoryMemory from "../../src/repository-memory/expense-repository-memory";

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
});