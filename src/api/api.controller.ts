import { Controller, Get, Param } from '@nestjs/common';
import { Contest, ContestData } from '../interfaces/contest.interface';

@Controller('api')
export class ApiController {
  constructor(private readonly apiService: ApiService) {}

  @Get('currentContest')
  getCurrentContest(): Contest {
    // nest will automatically serialize to JSON
    return this.apiService.getCurrentContest();
  }

  @Get('serverIP')
  getServerIP(): any {
    return { serverIP: this.apiService.getServerIP() };
  }

  @Get('contest/:id')
  async getContestData(@Param('id') id): Promise<ContestData> {
    return this.apiService.getContestData(id);
  }
}
