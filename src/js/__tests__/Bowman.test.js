import Bowman from "../Bowman";

test('check Bowman is created', () => {
const newBw = new Bowman('gamer', 'Bowman');
expect(newBw).toEqual(
{
name: 'gamer',
type: 'Bowman',
health: 100,
level: 1,
attack: 25,
defence: 25,
},
);
});


