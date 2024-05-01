import { transactionDTO } from "../dtos/transactionDTO";
import Income from "../entities/Income";

export default interface ITransactionRepository {
  saveIncome(input: transactionDTO): Income[];
}
