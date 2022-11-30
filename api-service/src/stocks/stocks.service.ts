import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { lastValueFrom, map } from 'rxjs';
import { QueriesService } from 'src/queries/queries.service';

@Injectable()
export class StocksService {
  constructor(
    private readonly httpService: HttpService,
    private queriesService: QueriesService,
  ) {}

  async getStock(ticker: string, userId: number) {
    const stockRequest = await this.httpService
      .get(`http://stocks:3001/stocks/${ticker}`)
      .pipe(map((resp) => resp.data));
    const response = await lastValueFrom(stockRequest);
    await this.queriesService.create(response, userId);
    return response;
  }

  getHistory(userId: number) {
    return this.queriesService.getHistory(userId);
  }

  getStats() {
    return this.queriesService.getStats();
  }
}
