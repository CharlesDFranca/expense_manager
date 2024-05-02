import { test, describe, expect } from "vitest";
import { ITransactionDTO } from "../src/dtos/transactionDTO";
import CreateIncomeTransactionUseCase from "../src/use-case/income/create-income-transaction-repository";
import CreateExpenseTransactionUseCase from "../src/use-case/expense/create-expense-transaction-repository";
import { randomUUID } from "crypto";
import IncomeRepositoryMemory from "../src/repository-memory/income-repository-memory";
import ExpenseRepositoryMemory from "../src/repository-memory/expense-repository-memory";
import TransactionRepositoryMemory from "../src/repository-memory/transaction-repositpry-memory";

const income: ITransactionDTO = {
  id: randomUUID(),
  amount: 20,
  description: "salario",
  date: new Date(),
  paymentMethod: "pix",
};

const expense: ITransactionDTO = {
  id: randomUUID(),
  amount: 20,
  description: "fast-food",
  date: new Date(),
  paymentMethod: "pix",
};

describe("tests with transaction", () => {
  test("create transaction income", () => {
    const transactionRepository = new TransactionRepositoryMemory();
    const incomeRepository = new IncomeRepositoryMemory();
    const createTransaction = new CreateIncomeTransactionUseCase(incomeRepository, transactionRepository);
    createTransaction.execute(income);
    const transaction = createTransaction.execute(income);
    expect(transaction.data.paymentMethod).toBe("pix");
  });

  test("create transaction expense", () => {
    const transactionRepository = new TransactionRepositoryMemory();
    const expenseRepository = new ExpenseRepositoryMemory();
    const createTransaction = new CreateExpenseTransactionUseCase(expenseRepository, transactionRepository);
    createTransaction.execute(expense);
    const transaction = createTransaction.execute(expense);
    expect(transaction.data.paymentMethod).toBe("pix");
  });
});
