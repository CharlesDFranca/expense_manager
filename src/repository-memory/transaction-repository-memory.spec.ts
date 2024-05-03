import { test, describe, expect } from "vitest";
import TransactionRepositoryMemory from "./transaction-repositpry-memory";
import CreateIncomeTransactionUseCase from "../use-case/income/create-income-transaction-repository";
import CreateExpenseTransactionUseCase from "../use-case/expense/create-expense-transaction-repository";
import { randomUUID } from "crypto";
import { ITransactionDTO } from "../dtos/transactionDTO";
import GetAllTransactionsUseCase from "../use-case/transaction/get-all-transactions-use-case";
import IncomeRepositoryMemory from "./income-repository-memory";
import ExpenseRepositoryMemory from "./expense-repository-memory";
// import SetTransactionUseCase from "../use-case/transaction/set-transaction-use-case";

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

    const createIncomeTransaction = new CreateIncomeTransactionUseCase(incomeRepository, transactionRepository);
    const createExpenseTransaction = new CreateExpenseTransactionUseCase(expenseRepository, transactionRepository);
    const getAllTransactions = new GetAllTransactionsUseCase(transactionRepository);

    createIncomeTransaction.execute(income);
    createIncomeTransaction.execute(income);
    createIncomeTransaction.execute(income);
    createIncomeTransaction.execute(income);
    createIncomeTransaction.execute(income);
    createIncomeTransaction.execute(income);
    createIncomeTransaction.execute(income);

    createExpenseTransaction.execute(expense);

    const allTransactions = getAllTransactions.execute();

    const balance = transactionRepository.getBalance();

    console.log({ allTransactions, balance });

    expect(typeof allTransactions).toBe("object");
  });
});
