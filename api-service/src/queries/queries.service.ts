import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Query } from './queries.model';
import { fn, col } from 'sequelize';

@Injectable()
export class QueriesService {
  constructor(
    @InjectModel(Query)
    private queryModel: typeof Query,
  ) {}

  async create(query: Query, userId: number) {
    return this.queryModel.create({ ...query, userId });
  }

  async getHistory(userId: number) {
    return this.queryModel.findAll({
      where: { userId },
      order: [['createdAt', 'DESC']],
    });
  }

  async getStats() {
    return this.queryModel.findAll({
      order: [['stock_count', 'DESC']],
      group: ['symbol'],
      attributes: [[fn('COUNT', col('id')), 'stock_count'], 'symbol'],
    });
  }
}
