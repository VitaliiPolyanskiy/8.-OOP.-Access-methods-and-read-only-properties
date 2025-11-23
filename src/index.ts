class Person {
    // Определение свойств через конструктор
    constructor(readonly id: number, private _name: string, private _surname: string, private _age: number) {
    }
    public set name(name: string) {
        this._name = name;
    }
    public get name(): string {
        return this._name;
    }
    public set surname(surname: string) {
        this._surname = surname;
    }
    public get surname(): string {
        return this._surname;
    }
    public set age(age: number) {
        this._age = age;
    }
    public get age(): number {
        return this._age;
    }

    public print(): void {
        console.log("Имя: " + this._name);
        console.log("Фамилия: " + this._surname);
        console.log("Возраст: " + this._age);
    }
}

let user: Person = new Person(1, "Андрей", "Кузнецов", 30);
user.print();
//user.id = 2; // Ошибка компиляции: свойство доступно только для чтения
user.name = "Петр";
user.surname = "Петров";
user.age = 24;
console.log("Идентификатор: " + user.id);
console.log("Имя: " + user.name);
console.log("Фамилия: " + user.surname);
console.log("Возраст: " + user.age);