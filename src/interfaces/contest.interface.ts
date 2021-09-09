export interface Contest {
  ContestID: number;
  MongoServer: string;
  MongoPort: number;
  MongoDB: any;
}

export interface ContestData {
  apiKey: string;
  contestDirector: string;
  contestName: string;
  date: string;
  district: string;
  nsrcaDistrict: string;
  location: string;
  contestID: string;
  classData: [
    {
      code: string;
      name: string;
      contestants: [
        {
          name: string;
          amaNumber: string;
          realAmaNumber: string;
          finalPlacement: number;
          finalScore: number;
          possibleScore: number;
          actualScore: number;
          percentOfPossible: number;
          scoringData: [
            {
              flightNumber: string;
              normalizedScore: number;
              rawScore: number;
              possibleScore: number;
              percentOfPossible: number;
              roundDropped: boolean;
            },
          ];
        },
      ];
    },
  ];
}
