import { Module, Global } from '@nestjs/common';
import { ApiController } from 'src/api/api.controller';
import { DeviceController } from 'src/device/device.controller';

@Global()
@Module({
  controllers: [ApiController, DeviceController]
})
export class AdapterStateModule {
  constructor() {
    console.log('Creating new AdapterState');
    this._mongoServer = process.env.MONGOSERVER || 'localhost';
    this._mongoPort = process.env.MONGOPORT || '27017';
    this._mongoDB = process.env.MONGODB || 'patternscoring';
    this._mongoConnectionString =
      process.env.MONGOCONNECTIONSTRING ||
      'mongodb://' +
        this._mongoServer +
        ':' +
        this._mongoPort +
        '/' +
        this._mongoDB;
    this._adapterMode = false;
    this._currentContest = null;
    this._currentContestFile = null;
    this._contestFilePath = null;
    this._importDir = null;
    this._classMap = {};
    this._classNameMap = {};
    this._classToSequenceMap = {};
    this._classNameToIDMap = {};
    this._sequenceManeuverMap = {};
    this._contestClassToClassMap = {};
    this._classRoundCount = {};
    this._classInactive = {};
    this._personMap = {};
    this._contestantNumToContestantId = {};
    this._judgeNumToPersonId = {};
    this._judgeHasContestant = {};
    this._allJudgeNums = [];
    console.log('here is me: ', process.env.ProgramData);
    this._masterScoreDir = process.env.ProgramData + '/MasterScoring';
    this._masterScoreImportDir = this._masterScoreDir + '/TransferIn';
    this._masterScoreImportCopyDir = this._masterScoreDir + '/TransferInCopy';
    this._masterScoringData = process.env.AppData + '/MasterScoring/App.user';
    this._masterScoringPrefsTime = moment();
    this._contestDataTime = moment();
    this._importFilePath = null;
    this._serverIP = 'not set';
    this._io = null;
    this._resultsMTime = moment();
  }

  get mongoServer() {
    return this._mongoServer;
  }

  get mongoPort() {
    return this._mongoPort;
  }

  get mongoDB() {
    return this._mongoDB;
  }

  set mongoDB(value) {
    this._mongoDB = value;
    this._mongoConnectionString =
      'mongodb://' +
      this._mongoServer +
      ':' +
      this._mongoPort +
      '/' +
      this._mongoDB;
    console.log(
      'mongoDB set to %s, connection string=%s',
      this._mongoDB,
      this._mongoConnectionString,
    );
  }

  get mongoConnectionString() {
    return this._mongoConnectionString;
  }

  get adapterMode() {
    return this._adapterMode;
  }

  set adapterMode(value) {
    this._adapterMode = value;
  }

  get currentContest() {
    return this._currentContest;
  }
  set currentContest(value) {
    console.log('setting CurrentContest');
    this._currentContest = value;
  }

  get currentContestFile() {
    return this._currentContestFile;
  }
  set currentContestFile(value) {
    this._currentContestFile = value;
  }

  get contestFilePath() {
    return this._contestFilePath;
  }
  set contestFilePath(value) {
    this._contestFilePath = value;
  }

  get importDir() {
    return this._importDir;
  }
  set importDir(value) {
    this._importDir = value;
  }

  get classMap() {
    return this._classMap;
  }
  get classNameMap() {
    return this._classNameMap;
  }
  get classToSequenceMap() {
    return this._classToSequenceMap;
  }
  get classNameToIDMap() {
    return this._classNameToIDMap;
  }
  get classInactive() {
    return this._classInactive;
  }
  get sequenceManeuverMap() {
    return this._sequenceManeuverMap;
  }
  get contestClassToClassMap() {
    return this._contestClassToClassMap;
  }
  get classRoundCount() {
    return this._classRoundCount;
  }
  get personMap() {
    return this._personMap;
  }
  get contestantNumToContestantId() {
    return this._contestantNumToContestantId;
  }
  get judgeNumToPersonId() {
    return this._judgeNumToPersonId;
  }
  get judgeHasContestant() {
    return this._judgeHasContestant;
  }
  get allJudgeNums() {
    return this._allJudgeNums;
  }
  get masterScoreDir() {
    return this._masterScoreDir;
  }
  get masterScoreImportDir() {
    return this._masterScoreImportDir;
  }
  get masterScoreImportCopyDir() {
    return this._masterScoreImportCopyDir;
  }
  get masterScoringData() {
    return this._masterScoringData;
  }
  get masterScoringPrefsTime() {
    return this._masterScoringPrefsTime;
  }
  set masterScoringPrefsTime(value) {
    this._masterScoringPrefsTime = value;
  }
  get contestDataTime() {
    return this._contestDataTime;
  }
  set contestDataTime(value) {
    this._contestDataTime = value;
  }
  get importFilePath() {
    return this._importFilePath;
  }
  set importFilePath(value) {
    this._importFilePath = value;
  }
  get serverIP() {
    return this._serverIP;
  }
  set serverIP(value) {
    this._serverIP = value;
  }
  get io() {
    return this._io;
  }
  set io(value) {
    this._io = value;
  }
  get resultsMTime() {
    return this._resultsMTime;
  }
  set resultsMTime(value) {
    this._resultsMTime = value;
  }
}
