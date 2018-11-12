const myQuestion = 'What should I watch on Netflix?';

console.log(myQuestion);

const randomNum = Math.floor(Math.random( ) * 7); // random number betqeen 0-7

let netflix = ' ' // value is undefined

switch (randomNum) { // if random number is...
  case 0:
        netflix = ('Layer Cake');
        break;
    case 1:
        netflix = ('Seven Psychopaths');
        break;
    case 2:
        netflix = ('The Grand Budapest Hotel');
        break;
    case 3:
        netflix = ('Flaked');
        break;
    case 4:
        netflix = ('Rake');
        break;
    case 5:
        netflix = ('Hannibal');
        break;
    case 6:
        netflix = ('Rick and Morty');
        break;
}
