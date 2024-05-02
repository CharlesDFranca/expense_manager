import { ITransactionDTO } from "../dtos/transactionDTO";

export default class Transaction {
  constructor(readonly data: ITransactionDTO) {}
}
