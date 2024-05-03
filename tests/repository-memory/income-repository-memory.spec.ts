import { test, describe, expect } from "vitest";
import { randomUUID } from "crypto";
import TransactionRepositoryMemory from "../../src/repository-memory/transaction-repositpry-memory";
import IncomeRepositoryMemory from "../../src/repository-memory/income-repository-memory";
import CreateIncomeTransactionUseCase from "../../src/use-case/income/create-income-transaction-repository";
import { ITransactionDTO } from "../../src/dtos/transactionDTO";
import GetTotalIncomeValueUseCase from "../../src/use-case/income/get-total-income-value-use-case";

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

  test("get total income value", () => {
    const incomeRepository = new IncomeRepositoryMemory();
    const getTotalIncomeValue = new GetTotalIncomeValueUseCase(incomeRepository);
    const totalIncomeValue = getTotalIncomeValue.execute();

    expect(totalIncomeValue >= 20).toBeFalsy();
  });
});
