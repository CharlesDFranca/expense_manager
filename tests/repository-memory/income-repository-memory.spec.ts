import { test, describe, expect } from "vitest";
import { randomUUID } from "crypto";
import TransactionRepositoryMemory from "../../src/repository-memory/transaction-repository-memory";
import IncomeRepositoryMemory from "../../src/repository-memory/income-repository-memory";
import CreateIncomeTransactionUseCase from "../../src/use-case/income/create-income-transaction-use-case";
import { ITransactionDTO } from "../../src/dtos/transactionDTO";
import GetTotalIncomeValueUseCase from "../../src/use-case/income/get-total-income-value-use-case";
import GetAllIncomeTransactionsUseCase from "../../src/use-case/income/get-all-income-transanction-use-case";

const income: ITransactionDTO = {
  id: randomUUID(),
  amount: 20,
  description: "salario",
  date: new Date(),
  paymentMethod: "pix",
};

describe("unit tests of the IncomeRepositoryMemory class", () => {
  test("create income", () => {
    const transactionRepository = new TransactionRepositoryMemory();
    const incomeRepository = new IncomeRepositoryMemory();

    const createIncomeTransaction = new CreateIncomeTransactionUseCase(incomeRepository, transactionRepository);

    const incomeTransaction = createIncomeTransaction.execute(income);

    expect(incomeTransaction.data.paymentMethod).toBe("pix");
  });

  test("get all income", () => {
    const incomeRepository = new IncomeRepositoryMemory();
    const getAllIncomeTransactions = new GetAllIncomeTransactionsUseCase(incomeRepository);

    const allIncome = getAllIncomeTransactions.execute();

    expect(allIncome).toBeTypeOf("object");
  });

  test("get total income value", () => {
    const incomeRepository = new IncomeRepositoryMemory();
    const getTotalIncomeValue = new GetTotalIncomeValueUseCase(incomeRepository);
    const totalIncomeValue = getTotalIncomeValue.execute();

    expect(totalIncomeValue >= 20).toBeFalsy();
  });

  test("update amount", () => {
    const transactionRepository = new TransactionRepositoryMemory();
    const incomeRepository = new IncomeRepositoryMemory();
    const createIncomeTransaction = new CreateIncomeTransactionUseCase(incomeRepository, transactionRepository);
    const incomeTransaction = createIncomeTransaction.execute(income);

    expect(incomeTransaction.data.amount).toBeGreaterThanOrEqual(10);

    incomeTransaction.updateAmount(1000);

    expect(incomeTransaction.data.amount).toBeGreaterThanOrEqual(1000);
  });
});
