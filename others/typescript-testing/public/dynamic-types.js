var sayStuff = {
    sayHi: function (name) {
        return "Hi ".concat(name);
    },
    sayBye: function (name) { return "Bye ".concat(name); },
};
console.log(sayStuff.sayHi("Heisenberg")); // Hi H
console.log(sayStuff.sayBye("Heisenberg")); //Bye H
