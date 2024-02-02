import { Injectable } from '@nestjs/common';
import { mockDB } from '../db/mock-db';

@Injectable()
export class TransactionsService {
  getBalance() {
    return mockDB.balance;
  }

  getTransactions() {
    return mockDB.transactions;
  }

  sendTransaction(amount: number, recipient: string) {
    if (amount <= 0) {
      throw new Error('Amount must be positive');
    }
    if (amount > mockDB.balance) {
      throw new Error('Insufficient balance');
    }
    // Update the balance
    mockDB.balance -= amount;
    // Add to the transaction history
    const transaction = {
      id: mockDB.transactions.length + 1,
      amount,
      recipient,
      date: new Date(),
    };
    mockDB.transactions.push(transaction);
    return transaction;
  }
}
