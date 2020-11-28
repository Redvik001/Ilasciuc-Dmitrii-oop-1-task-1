abstract class Product {
    id: number;
    name: string;
    price = 0;
    units: Units = "шт.";
    bought = false;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
        console.log(`Создан продукт ${this.name}.`)
    }

    buy() {
        if (this.bought) return;
        this.bought = true;
        console.log(`Поздравляю, вы только что купили товар "${this.name}" в колличестве 1 ${this.units} за ${this.price} MDL.`);
    };

    abstract return();
}

interface Food {
    expirationDate: Date;
}

export class Fridge extends Product {
    price = 9879;

    repair() {
        if (this.bought) console.log(`Сдать в ремонт холодильник ${this.name}? Ok. Будет работать как часы.`);
    }
    return() {
        console.log(`Жаль, очень жаль, что вы возвращаете нам холодильник ${this.name}.`);
    }
}

export class Sausage extends Product implements Food {
    expirationDate: Date;

    constructor(id: number, name: string) {
        super(id, name);
        this.expirationDate = new Date;
        this.expirationDate.setFullYear(this.expirationDate.getFullYear());
        this.price = 112;
    }

    eat() {
        if (this.bought) console.log(`Купили и решили съесть ${this.name} прямо сдесь? Ладно.`);
        else console.log(`Э-э-э, эту ${this.name} сначала нужно купить!`);
    }

    buy() {
        super.buy();
        console.log(`Колбаса возврату не подлежит, если что.`);
    };

    return() {
        console.log(`Ну вам же говорили, что ${this.name} возврату не подлежит, а половина тем более.`);
    }
}

type Units = "шт." | "кг.";

const sausage1 = new Sausage(1, "Салями 001");
const sausage2 = new Sausage(1, "Салями 002");
const fridge = new Fridge(3, "T-800");


fridge.buy();
sausage1.eat();
sausage1.buy();
sausage1.return();
sausage2.buy();
fridge.repair();
fridge.return();