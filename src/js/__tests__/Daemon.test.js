import Daemon from "../Daemon";

test('check Daemon is created', () => {
const newDm = new Daemon('gamer2', 'Daemon');
expect(newDm).toEqual(
{
name: 'gamer2',
type: 'Daemon',
health: 100,
level: 1,
attack: 10,
defence: 40,
},
);
});

