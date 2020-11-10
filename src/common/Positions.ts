interface Position {
  id: number;
  fullname: string;
  acronym: string;
  group?: string;
}

export const Positions: {[key: number]: Position} = {
  10: {id: 10, fullname: 'Gardien', acronym: 'G'},
  20: {
    id: 20,
    fullname: 'Defenseur Central',
    acronym: 'DC',
    group: 'Defenseur',
  },
  21: {
    id: 21,
    fullname: 'Defenseur Lateral',
    acronym: 'DL',
    group: 'Defenseur',
  },
  31: {id: 31, fullname: 'Milieu Defensif', acronym: 'MD', group: 'Milieu'},
  32: {id: 32, fullname: 'Milieu Offensif', acronym: 'MO', group: 'Milieu'},
  40: {id: 40, fullname: 'Attaquant', acronym: 'A'},
};
