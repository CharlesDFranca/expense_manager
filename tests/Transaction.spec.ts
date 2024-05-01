import { test, describe, expect } from "vitest";
import { transactionDTO } from "../src/dtos/transactionDTO";
import CreateTransactionUseCase from "../src/use-case/income/create-income-transaction-repository";
import TransactionRepositoryMemory from "../src/repository-memory/transaction-repositpry-memory";
import Expense from "../src/entities/Expense";

const income: transactionDTO = {
  amount: 20,
  description: "salario",
  date: new Date(),
  paymentMethod: "pix",
};

const expense: transactionDTO = {
  amount: 20,
  description: "fast-food",
  date: new Date(),
  paymentMethod: "pix",
};

describe("tests with transaction", () => {
  test("create transaction income", () => {
    const transactionRepository = new TransactionRepositoryMemory();
    const createTransaction = new CreateTransactionUseCase(
      transactionRepository,
    );
    const transaction = createTransaction.execute(income);
    expect(transaction[0].data.paymentMethod).toBe("pix");
  });

  test("create transaction expense", () => {
    const transaction = new Expense(expense);
    expect(transaction.data.type).toBe("expense");
  });
});
