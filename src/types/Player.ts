interface Player {
  id: number;
  club: string;
  firstname: string;
  lastname: string;
  position: number;
  quotation: number;
  teamId: number;
  ultrPosition: number;
  stats: Stats;
}

interface Stats {
  avgRate: string;
  currentChampionship: number;
  percentageStarter: number;
  sumGoals: number;
}
