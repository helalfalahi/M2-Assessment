// src/app.module.ts
import { Module } from '@nestjs/common';
import { TransactionsController } from './controllers/transactions.controller';
import { BalanceController } from './controllers/balance.controller';
import { TransactionsService } from './services/transactions.service';

@Module({
  imports: [],
  controllers: [TransactionsController, BalanceController],
  providers: [TransactionsService],
})
export class AppModule {}
