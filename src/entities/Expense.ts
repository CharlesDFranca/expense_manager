import { ITransactionDTO } from "../dtos/transactionDTO";
import Transaction from "./Transaction";

export default class Expense extends Transaction {
  constructor(readonly data: ITransactionDTO) {
    super(data);
    this.data.type = "expense";
  }
}
