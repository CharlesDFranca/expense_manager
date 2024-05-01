import { transactionDTO } from "../dtos/transactionDTO";
import Income from "../entities/Income";

export default interface ITransactionRepository<T extends Income> {
  saveIncome(input: transactionDTO): T[];
}
