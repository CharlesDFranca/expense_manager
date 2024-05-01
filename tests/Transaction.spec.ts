import { test, describe, expect } from "vitest";
import { transactionDTO } from "../src/dtos/transactionDTO";
import CreateTransactionUseCase from "../src/use-case/create-transaction-repository";
import TransactionRepositoryMemory from "../src/repository-memory/transaction-repositpry-memory";

const data: transactionDTO = {
  amount: 20,
  description: "salario",
  date: new Date(),
  paymentMethod: "pix",
};

describe("tests with transaction", () => {
  test("create transaction income", () => {
    const transactionRepository = new TransactionRepositoryMemory();
    const createTransaction = new CreateTransactionUseCase(
      transactionRepository,
    );
    const transaction = createTransaction.execute(data);
    expect(transaction[0].data.paymentMethod).toBe("pix");
  });
});
