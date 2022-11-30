import {
  Controller,
  Get,
  Query,
  Request,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { StocksService } from './stocks.service';

@Controller('')
export class StocksController {
  constructor(private readonly stocksService: StocksService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get('stock')
  getStock(@Request() req, @Query('q') ticker: string) {
    console.log(req.user);
    return this.stocksService.getStock(ticker, req.user.id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('history')
  getHistory(@Request() req) {
    return this.stocksService.getHistory(req.user.id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('stats')
  update(@Request() req) {
    if (req.user.role === 'super_user') {
      return this.stocksService.getStats();
    }
    throw new UnauthorizedException();
  }
}
