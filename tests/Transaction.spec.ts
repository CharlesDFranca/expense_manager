import { test, describe, expect } from "vitest";
import { transactionDTO } from "../src/dtos/transactionDTO";
import CreateTransaction from "../src/use-case/create-transaction-repository";

const data: transactionDTO = {
  amount: 20,
  description: "salario",
  date: new Date(),
  paymentMethod: "pix",
};

describe("tests with transaction", () => {
  test("create transaction income", () => {
    const createTransaction = new CreateTransaction();
    const transaction = createTransaction.execute(data);
    console.log(transaction);
    expect(transaction.data.description).toBe("salario");
  });
});
