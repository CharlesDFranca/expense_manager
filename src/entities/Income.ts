import { ITransactionDTO } from "../dtos/transactionDTO";
import Transaction from "./Transaction";

export default class Income extends Transaction {
  constructor(readonly data: ITransactionDTO) {
    super(data);
    this.data.type = "income";
  }

  updateAmount(amount: number): void {
    this.data.amount = amount;
  }
}
