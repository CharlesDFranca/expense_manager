import { transactionDTO } from "../dtos/transactionDTO";
import Transaction from "./Transaction";

export default class Expense extends Transaction {
  constructor(readonly data: transactionDTO) {
    super(data);
    this.data.type = "expense";
  }
}
