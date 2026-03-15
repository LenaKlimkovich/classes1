import Zombie from "../Zombie";

test('check Zombie is created', () => {
const newMg = new Zombie('gamer2', 'Zombie');
expect(newMg).toEqual(
{
name: 'gamer2',
type: 'Zombie',
health: 100,
level: 1,
attack: 40,
defence: 10,
},
);
});
