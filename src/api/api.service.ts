import { Injectable } from '@nestjs/common';
import { Contest } from '../types/interfaces';

@Injectable()
export class ApiService {
  getCurrentContest(): Contest {
    let response: Contest;
    if (adapterState.currentContest) {
      response = {
        ContestID: adapterState.currentContest.ContestID,
        MongoServer: adapterState.serverIP,
        MongoPort: adapterState.mongoPort,
        MongoDB: adapterState.mongoDB
      };
    } else {
      response = { ContestID: null, MongoServer: adapterState.serverIP, MongoPort: adapterState.mongoPort, MongoDB: 'patternscoring' };
    }
    log.info('currentContest returning ', response);
    return response;
  }
}
