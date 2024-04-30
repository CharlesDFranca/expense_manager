import { test, describe, expect } from "vitest";
import Transaction from "./Transaction";

const data = {
  amount: 20,
  describe: "salario",
  type: "income",
  date: new Date(),
  paymentMethod: "pix",
};

describe("tests with transaction", () => {
  test("create transaction", () => {
    const transaction = new Transaction(data);
    expect(transaction.data.type).toBe("income");
  });
});
