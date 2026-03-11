import Swordsman from "../Swordsman";

test('check Swordsman is created', () => {
const newMg = new Swordsman('gamer2', 'Swordsman');
expect(newMg).toEqual(
{
name: 'gamer2',
type: 'Swordsman',
health: 100,
level: 1,
attack: 40,
defence: 10,
},
);
});
