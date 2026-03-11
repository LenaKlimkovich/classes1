import Undead from "../Undead";

test('check Undead is created', () => {
const newMg = new Undead('gamer2', 'Undead');
expect(newMg).toEqual(
{
name: 'gamer2',
type: 'Undead',
health: 100,
level: 1,
attack: 25,
defence: 25,
},
);
});
