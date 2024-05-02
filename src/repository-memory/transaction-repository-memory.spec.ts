import { test, describe, expect } from "vitest";
import TransactionRepositoryMemory from "./transaction-repositpry-memory";
import CreateIncomeTransactionUseCase from "../use-case/income/create-income-transaction-repository";
import CreateExpenseTransactionUseCase from "../use-case/expense/create-expense-transaction-repository";
import { randomUUID } from "crypto";
import { ITransactionDTO } from "../dtos/transactionDTO";
import GetAllTransactionsUseCase from "../use-case/transaction/get-all-transaction-repository";
import IncomeRepositoryMemory from "./income-repository-memory";
import ExpenseRepositoryMemory from "./expense-repository-memory";

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

describe("unitary test at transaction repository memory", () => {
  test("getAllTransactions", () => {
    const transactionRepository = new TransactionRepositoryMemory();
    const incomeRepository = new IncomeRepositoryMemory();
    const expenseRepository = new ExpenseRepositoryMemory();

    const createIncomeTransaction = new CreateIncomeTransactionUseCase(incomeRepository);
    const createExpenseTransaction = new CreateExpenseTransactionUseCase(expenseRepository);
    const getAllTransactions = new GetAllTransactionsUseCase(transactionRepository);

    createIncomeTransaction.execute(income);
    createExpenseTransaction.execute(expense);
    createExpenseTransaction.execute(expense);

    const allTransactions = getAllTransactions.execute();

    transactionRepository.getBalance();

    console.log(allTransactions);

    expect(typeof allTransactions).toBe("object");
  });
});
