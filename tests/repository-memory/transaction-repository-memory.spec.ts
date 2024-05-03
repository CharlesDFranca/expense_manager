import { test, describe, expect } from "vitest";
import TransactionRepositoryMemory from "../../src/repository-memory/transaction-repository-memory";
import CreateIncomeTransactionUseCase from "../../src/use-case/income/create-income-transaction-use-case";
import CreateExpenseTransactionUseCase from "../../src/use-case/expense/create-expense-transaction-use-case";
import { randomUUID } from "crypto";
import { ITransactionDTO } from "../../src/dtos/transactionDTO";
import GetAllTransactionsUseCase from "../../src/use-case/transaction/get-all-transactions-use-case";
import IncomeRepositoryMemory from "../../src/repository-memory/income-repository-memory";
import ExpenseRepositoryMemory from "../../src/repository-memory/expense-repository-memory";
import Income from "../../src/entities/Income";
import Expense from "../../src/entities/Expense";
import GetBalanceUseCase from "../../src/use-case/transaction/get-balance-use-case";
import SetTransactionUseCase from "../../src/use-case/transaction/set-transaction-use-case";
// import GetBalanceUseCase from "../use-case/transaction/get-balance-use-case";
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

describe("Unit testing of the TransactionRepositoryMemory class", () => {
  test("get all transactions", () => {
    const transactionRepository = new TransactionRepositoryMemory();
    const incomeRepository = new IncomeRepositoryMemory();
    const expenseRepository = new ExpenseRepositoryMemory();

    const createIncomeTransaction = new CreateIncomeTransactionUseCase(incomeRepository, transactionRepository);
    const createExpenseTransaction = new CreateExpenseTransactionUseCase(expenseRepository, transactionRepository);
    const getAllTransactions = new GetAllTransactionsUseCase(transactionRepository);

    createIncomeTransaction.execute(income);
    createExpenseTransaction.execute(expense);

    const allTransactions = getAllTransactions.execute();

    expect(allTransactions[0]).instanceOf(Income);
    expect(allTransactions[1]).instanceOf(Expense);
  });

  test("get balance", () => {
    const transactionRepository = new TransactionRepositoryMemory();
    const incomeRepository = new IncomeRepositoryMemory();
    const expenseRepository = new ExpenseRepositoryMemory();

    const createIncomeTransaction = new CreateIncomeTransactionUseCase(incomeRepository, transactionRepository);
    const createExpenseTransaction = new CreateExpenseTransactionUseCase(expenseRepository, transactionRepository);
    const getBalance = new GetBalanceUseCase(transactionRepository);

    createIncomeTransaction.execute(income);
    createExpenseTransaction.execute(expense);

    const balance = getBalance.execute();

    expect(balance).toBeTypeOf("number");
  });

  test("set transaction", () => {
    const transactionRepository = new TransactionRepositoryMemory();
    const incomeRepository = new IncomeRepositoryMemory();

    const setTransaction = new SetTransactionUseCase(transactionRepository);
    const createIncomeTransaction = new CreateIncomeTransactionUseCase(incomeRepository, transactionRepository);
    const getAllTransactions = new GetAllTransactionsUseCase(transactionRepository);

    const incomeTransaction = createIncomeTransaction.execute(income);

    setTransaction.execute(incomeTransaction);

    const allTransactions = getAllTransactions.execute();

    allTransactions.forEach((transanction) => {
      expect(transanction).toBeInstanceOf(Income);
    });
  });
});
