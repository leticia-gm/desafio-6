import { response } from 'express';
import { getCustomRepository } from 'typeorm';
import AppError from '../errors/AppError';
import Transaction from '../models/Transaction';
import TransactionsRepository from '../repositories/TransactionsRepository';

class DeleteTransactionService {
  public async execute(id: string): Promise<void> {
    const trasactionRepository = getCustomRepository(TransactionsRepository);
    const transactions = await trasactionRepository.findOne(id);
    if (!transactions) {
      throw new AppError('Transaction does not exist');
    }

    const response = await trasactionRepository.remove(transactions);
  }
}

export default DeleteTransactionService;
