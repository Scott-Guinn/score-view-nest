import { Controller, Get } from '@nestjs/common';
import { Contest } from '../types/interfaces';

@Controller('api')
export class ApiController {
  constructor(private readonly apiService: ApiService) {}

  @Get('currentContest')
  getCurrentContest(): Contest {
    // nest will automatically serialize to JSON
    return this.apiService.getCurrentContest();
  }
}
