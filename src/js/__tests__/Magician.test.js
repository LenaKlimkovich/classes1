import Magician from "../Magician";

test('check Magician is created', () => {
const newMg = new Magician('gamer2', 'Magician');
expect(newMg).toEqual(
{
name: 'gamer2',
type: 'Magician',
health: 100,
level: 1,
attack: 10,
defence: 40,
},
);
});
