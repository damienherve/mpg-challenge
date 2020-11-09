export const positionName = (ultraPoition: number) => {
  switch (ultraPoition) {
    case 10:
      return ['Gardien', 'G'];
    case 20:
      return ['Defenseur', 'D'];
    case 21:
      return ['Lateral', 'L'];
    case 31:
      return ['Milieu Defensif', 'MD'];
    case 32:
      return ['Milieu Offensif', 'MO'];
    case 40:
      return ['Attaquant', 'A'];
    default:
      return ['-', '-'];
  }
};
