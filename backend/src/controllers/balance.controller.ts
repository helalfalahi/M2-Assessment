import { Controller, Get, UseGuards } from '@nestjs/common';
import { TransactionsService } from '../services/transactions.service';
import { AuthGuard } from '../auth/auth.guard';

@Controller('balance')
@UseGuards(AuthGuard)
export class BalanceController {
  constructor(private transactionsService: TransactionsService) {}

  @Get()
  getBalance() {
    return this.transactionsService.getBalance();
  }
}
