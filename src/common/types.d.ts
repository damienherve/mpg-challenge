interface Player {
  id: string;
  club: string;
  firstname: string;
  lastname: string;
  position: number;
  quotation: number;
  teamId: number;
  ultrPosition: number;
  stats: Stats;
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
}

interface Stats {
  avgRate: string;
  currentChampionship: number;
  percentageStarter: number;
  sumGoals: number;
}
