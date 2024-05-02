import { test, describe, expect } from "vitest";
import { ITransactionDTO } from "../src/dtos/transactionDTO";
import CreateIncomeTransactionUseCase from "../src/use-case/income/create-income-transaction-repository";
import TransactionRepositoryMemory from "../src/repository-memory/transaction-repositpry-memory";
import CreateExpenseTransactionUseCase from "../src/use-case/expense/create-expense-transaction-repository";
import { randomUUID } from "crypto";

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
    const createTransaction = new CreateIncomeTransactionUseCase(transactionRepository);
    createTransaction.execute(income);
    const allTransactions = transactionRepository.getAllTransactions();
    const transaction = createTransaction.execute(income);
    console.log(allTransactions);
    expect(transaction[0].data.paymentMethod).toBe("pix");
  });

  test("create transaction expense", () => {
    const transactionRepository = new TransactionRepositoryMemory();
    const createTransaction = new CreateExpenseTransactionUseCase(transactionRepository);
    createTransaction.execute(expense);
    const allTransactions = transactionRepository.getAllTransactions();
    const transaction = createTransaction.execute(expense);
    console.log(allTransactions);
    expect(transaction[0].data.paymentMethod).toBe("pix");
  });
});
