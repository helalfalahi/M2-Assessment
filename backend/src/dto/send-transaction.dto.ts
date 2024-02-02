import { IsString, IsPositive } from 'class-validator';

export class SendTransactionDto {
  @IsPositive()
  amount: number;

  @IsString()
  recipient: string;
}
