export const allowedTypes = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

export default class Character {
    constructor(name, type){
this.name = name;
this.type = type;
this.health = 100;
this.level = 1;

if (typeof this.name !== 'string' || this.name.length < 2 || this.name.length > 10){
 throw new Error('Имя должно быть строкой длиной от 2 до 10 символов');
}

if(!allowedTypes.includes(this.type)) {
    throw new Error(`Необходимо выбрать одного из персонажей: ${allowedTypes.join(', ')}`);
}
}

}
