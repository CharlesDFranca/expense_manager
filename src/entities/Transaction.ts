import { transactionDTO } from "../dtos/transactionDTO";

export default class Transaction {
  constructor(readonly data: transactionDTO) {}
}
