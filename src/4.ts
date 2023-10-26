class Key {
  private signature: number = Math.random();

  getSignature(): number {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key) {}
  getKey(): Key {
    return this.key;
  }
}

abstract class House {
  constructor(
    public key: Key,
    public door: boolean = false,
    public tenants: Person[] = []
  ) {}

  abstract openDoor(keyToCheck: Key): void;
  comeIn(person: Person): void {
    if (this.door) {
      this.tenants.push(person);
      console.log("The door is open");
    } else {
      console.log("The door is closed. Please use a key to open it.");
    }
  }
}

class MyHouse extends House {
  constructor(key: Key) {
    super(key);
  }

  openDoor(keyToCheck: Key): void {
    if (this.key.getSignature() === keyToCheck.getSignature()) {
      this.door = true;
    }
  }
}

const key = new Key();
const person = new Person(key);
const house = new MyHouse(key);

house.openDoor(person.getKey());
house.comeIn(person);

export {};
