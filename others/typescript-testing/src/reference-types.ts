interface Person {
    name: string;
    location: string;
    isProgrammer: boolean;
};

let person01: Person = {
    name: "Sarah",
    location: "UK",
    isProgrammer: true,
}

let person03: {
    name: string;
    location: string;
    isProgrammer: boolean;
};

person03 = {
    name: "Danny",
    location: "UK",
    isProgrammer: true,
};

console.log(person01);
console.log(person03);