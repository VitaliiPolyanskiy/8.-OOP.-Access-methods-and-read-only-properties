class Person {
    // Визначення властивостей через конструктор
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
        console.log("Ім'я: " + this._name);
        console.log("Прізвище: " + this._surname);
        console.log("Вік: " + this._age);
    }
}

let user: Person = new Person(1, "Андрій", "Кузнєцов", 30);
user.print();
//user.id = 2; // Помилка компіляції: властивість доступна лише для читання
user.name = "Петро";
user.surname = "Петров";
user.age = 24;
console.log("Ідентифікатор: " + user.id);
console.log("Ім'я: " + user.name);
console.log("Прізвище: " + user.surname);
console.log("Вік: " + user.age);