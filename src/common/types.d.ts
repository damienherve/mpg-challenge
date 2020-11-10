interface Player {
  id: string;
  club: string;
  firstname: string;
  lastname: string;
  position: number;
  quotation: number;
  teamId: number;
  ultraPosition: number;
  stats: BasicStats;
}

interface PlayerDetails extends Player {
  active: number;
  availableSeasons: [string];
  birthDate: string;
  calendar: string;
  championship: number;
  jerseyNum: string;
  joinDate: string;
  nbMatch: number;
  twitter: string;
  type: string;
  updatedAt: string;
  stats: Stats;
}

interface BasicStats {
  avgRate: string;
  currentChampionship: number;
  percentageStarter: number;
  sumGoals: number;
}

interface Stats extends BasicStats {
  id: string;
  appearances: Appearances;
  minutesByGoal: number;
  lostBallByMatch: number;
  foulsByMatch: number;
  foulsEnduredByMatch: number;
  goalByMatch: number;
  goalsConcededByMatch: number;
  interceptByMatch: number;
  minutesByMatch: number;
  mistakeByMatch: number;
  percentageAccurateFwdZone: number;
  percentageAccurateLongPass: number;
  percentageAccuratePassBackZone: number;
  percentageCrossSuccess: number;
  percentageGoalByOpportunity: number;
  percentageLostBall: number;
  percentagePenaltiesScored: number;
  percentageShotOnTarget: number;
  percentageSucceedPass: number;
  percentageWonContest: number;
  percentageWonDuel: number;
  percentageSaveShot: number;
  shotByMatch: number;
  shotOnTargetByMatch: number;
  succeedCrossByMatch: number;
  succeedLongPassByMatch: number;
  succeedPassBackZoneByMatch: number;
  succeedPassByMatch: number;
  succeedPassFwdZoneByMatch: number;
  sumBigChanceCreated: number;
  sumBigChanceMissed: number;
  sumCleanSheet: number;
  sumGoalAssist: number;
  sumPenalties: number;
  sumRedCard: number;
  sumYellowCard: number;
  sumSaves: number;
  sumDeflect: number;
  sumPenaltyFaced: number;
  tackleByMatch: number;
  wonContestByMatch: number;
  wonDuelByMatch: number;
}

interface Appearances {
  standBy: number;
  standIn: number;
  starter: number;
  total: number;
}
