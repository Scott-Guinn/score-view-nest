import { Injectable } from '@nestjs/common';
import { AdapterStateModule } from 'src/adapter-state/adapter-state.module';
import { Contest, ContestData } from '../interfaces/contest.interface';

@Injectable()
export class ApiService {
  getCurrentContest(): Contest {
    //   let response: Contest;
    //   if (adapterState.currentContest) {
    //     response = {
    //       ContestID: adapterState.currentContest.ContestID,
    //       MongoServer: adapterState.serverIP,
    //       MongoPort: adapterState.mongoPort,
    //       MongoDB: adapterState.mongoDB
    //     };
    //   } else {
    //     response = { ContestID: null, MongoServer: adapterState.serverIP, MongoPort: adapterState.mongoPort, MongoDB: 'patternscoring' };
    //   }
    //   log.info('currentContest returning ', response);
    //   return response;
  }

  getServerIP(): string {
    return AdapterStateModule.serverIP;
  }

  async getContestData(contestID: string): Promise<ContestData> {
    return await this.contestDataModel.findOne({ contestID: contestID });
  }
}
