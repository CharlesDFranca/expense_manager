import { transactionDTO } from "../dtos/transactionDTO";
import Transaction from "./Transaction";

export default class Income extends Transaction {
  constructor(readonly data: transactionDTO) {
    super(data);
    this.data.type = "income";
  }
}
