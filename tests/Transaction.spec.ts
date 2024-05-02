import { test, describe, expect } from "vitest";
import { transactionDTO } from "../src/dtos/transactionDTO";
import CreateIncomeTransactionUseCase from "../src/use-case/income/create-income-transaction-repository";
import TransactionRepositoryMemory from "../src/repository-memory/transaction-repositpry-memory";
import CreateExpenseTransactionUseCase from "../src/use-case/expense/create-expense-transaction-repository";
import { randomUUID } from "crypto";

const income: transactionDTO = {
  id: randomUUID(),
  amount: 20,
  description: "salario",
  date: new Date(),
  paymentMethod: "pix",
};

const expense: transactionDTO = {
  id: randomUUID(),
  amount: 20,
  description: "fast-food",
  date: new Date(),
  paymentMethod: "pix",
};

describe("tests with transaction", () => {
  test("create transaction income", () => {
    const transactionRepository = new TransactionRepositoryMemory();
    const createTransaction = new CreateIncomeTransactionUseCase(
      transactionRepository,
    );
    const transaction = createTransaction.execute(income);
    console.log(transaction);
    expect(transaction[0].data.paymentMethod).toBe("pix");
  });

  test("create transaction expense", () => {
    const transactionRepository = new TransactionRepositoryMemory();
    const createTransaction = new CreateExpenseTransactionUseCase(
      transactionRepository,
    );
    const transaction = createTransaction.execute(expense);
    console.log(transaction);
    expect(transaction[0].data.paymentMethod).toBe("pix");
  });
});
