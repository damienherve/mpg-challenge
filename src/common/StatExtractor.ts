export default class StatExtractor {
  static getPassStats(stats: Stats) {
    return [
      {
        label: 'Passes décisives',
        value: stats.sumGoalAssist,
      },
      {
        label: 'Grosses occasions créées',
        value: stats.sumBigChanceCreated,
      },
      {
        label: 'Passes réussies par match',
        value: stats.succeedPassByMatch,
        secondValue: `${stats.percentageSucceedPass}%`,
      },
      {
        label: 'Passes réu. dans camp adv. /m.',
        value: stats.succeedPassFwdZoneByMatch,
        secondValue: `${stats.percentageAccurateFwdZone}%`,
      },
      {
        label: 'Passes réu. dans son camp / m.',
        value: stats.succeedPassBackZoneByMatch,
        secondValue: `${stats.percentageAccuratePassBackZone}%`,
      },
      {
        label: 'Passes longues réussies / m.',
        value: stats.succeedLongPassByMatch,
        secondValue: `${stats.percentageAccurateLongPass}%`,
      },
      {
        label: 'Centres réussis par match',
        value: stats.succeedCrossByMatch,
        secondValue: `${stats.percentageCrossSuccess}%`,
      },
    ];
  }

  static getDefStats(stats: Stats) {
    return [
      {
        label: 'Interceptions par match',
        value: stats.interceptByMatch,
      },
      {
        label: 'Tacles par match',
        value: stats.tackleByMatch,
      },
      {
        label: 'Buts encaissés par match',
        value: stats.goalsConcededByMatch,
      },
    ];
  }

  static getAttackStats(stats: Stats) {
    return [
      {
        label: 'Buts (pén.)',
        value: stats.sumGoals,
        secondValue: `${stats.sumPenalties}`,
      },
      {
        label: 'Fréquence de buts (min.)',
        value: stats.minutesByGoal,
      },
      {
        label: 'Buts par match',
        value: stats.goalByMatch,
      },
      {
        label: 'Tirs par match',
        value: stats.shotByMatch,
      },
      {
        label: 'Grosses occasions ratées',
        value: stats.sumBigChanceMissed,
      },
    ];
  }

  static getEfficiencyStats(stats: Stats, isGoalkeeper = false) {
    return isGoalkeeper
      ? [
          {
            label: 'Buts encaissés par match',
            value: stats.goalsConcededByMatch,
          },
          {
            label: 'Arrêts réalisés',
            value: stats.sumSaves,
          },
          {
            label: 'Parades',
            value: stats.sumDeflect,
          },
          {
            label: 'Pénaltys sauvés',
            value: stats.sumPenaltyFaced,
          },
          {
            label: 'Fautes subies par match',
            value: stats.foulsEnduredByMatch,
          },
        ]
      : [
          {
            label: 'Dribbles réussis par match',
            value: stats.wonContestByMatch,
            secondValue: `${stats.percentageWonContest}%`,
          },
          {
            label: 'Duels remportés par match',
            value: stats.wonDuelByMatch,
            secondValue: `${stats.percentageWonDuel}%`,
          },
          {
            label: 'Pertes de balle par match',
            value: stats.lostBallByMatch,
          },
          {
            label: 'Fautes commises par match',
            value: stats.foulsByMatch,
          },
          {
            label: 'Fautes subies par match',
            value: stats.foulsEnduredByMatch,
          },
          {
            label: 'Tirs cadrés par match',
            value: stats.shotOnTargetByMatch,
            secondValue: `${stats.percentageShotOnTarget}%`,
          },
        ];
  }
}
