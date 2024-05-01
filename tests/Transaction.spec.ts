import { test, describe, expect } from "vitest";
import { transactionDTO } from "../src/dtos/transactionDTO";
import Income from "../src/entities/Income";

const data: transactionDTO = {
  amount: 20,
  description: "salario",
  date: new Date(),
  paymentMethod: "pix",
};

describe("tests with transaction", () => {
  test("create transaction income", () => {
    const transaction = new Income(data);
    console.log(transaction);
    expect(transaction.data.description).toBe("salario");
  });
});
