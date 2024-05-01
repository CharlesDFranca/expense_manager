import { transactionDTO } from "../dtos/transactionDTO";
import Income from "../entities/Income";

export default class CreateTransaction {
  constructor() {}

  execute(data: transactionDTO): Income {
    const transaction = new Income(data);
    return transaction;
  }
}
