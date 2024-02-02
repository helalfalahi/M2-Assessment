import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { TransactionsService } from '../services/transactions.service';
import { SendTransactionDto } from '../dto/send-transaction.dto';
import { AuthGuard } from '../auth/auth.guard';

@Controller('transactions')
@UseGuards(AuthGuard)
export class TransactionsController {
  constructor(private transactionsService: TransactionsService) {}

  @Post('/send')
  sendTransaction(@Body() body: SendTransactionDto) {
    return this.transactionsService.sendTransaction(
      body.amount,
      body.recipient,
    );
  }

  @Get()
  getTransactions() {
    return this.transactionsService.getTransactions();
  }
}
