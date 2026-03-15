import { allowedTypes }  from "../Character";
import Character from "../Character";

test('check Character error name', () => {
expect(() => {
const firstCharacter = new Character('gamerhohohohoho', 'Daemon');
}).toThrow('Имя должно быть строкой длиной от 2 до 10 символов');
});


test('check Character error type', () => {
expect(() => {
const secondCharacter = new Character('gamer1', 'Snowman');
}).toThrow(`Необходимо выбрать одного из персонажей: ${allowedTypes.join(', ')}`);
});
