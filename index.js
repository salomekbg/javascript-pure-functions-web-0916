let heroes = [
  { firstName: 'Tony', lastName: 'Stark', heroName: 'Iron Man' },
  { firstName: 'Steve', lastName: 'Rogers', heroName: 'Captain America' },
  { firstName: 'Barry', lastName: 'Allen', heroName: 'The Flash' },
];

const addInitialsToHeroes = heroes => heroes.map(hero => Object.assign({}, hero, {
  initials: hero.firstName.charAt(0) + hero.lastName.charAt(0),
}));

let heroesWithInitials = addInitialsToHeroes(heroes);
