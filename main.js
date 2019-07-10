// var name = 'Raymundo';
// console.log(`Hola mi nombre es ${name}`);
// const greet = (name) => {
//     let message = `Hello ${name}`;
//     return message;
// };
// const greeting = greet('Ray');
// const sergioGreeting = greet('Sergio');
// console.log(greeting);
// console.log(sergioGreeting);
// const superheroName = 'The Joker';
// const realName = 'Jack Napier';
// const getName = () => {
//     return `${realName}, ${superheroName}.`;
// };
// console.log(`The superhero name is ${getName()}`);
// let joker = {
//     name: 'Jack',
//     lastName: 'Napier',
//     city: 'Gotham City'
// };
// //Destructuring
// const {name, ... rest} = joker;
// console.log(joker);
// const addition = (a,b) => a + b;
// const substraction = (a,b) => a - b;
// const multiplication = (a,b) => a * b;
// const division = (a,b) => a / b;
// const a = 10;
// const b = 2;
// console.log(`${a} + ${b} = ${addition(a,b)}`);
// console.log(`${a} - ${b} = ${substraction(a,b)}`);
// console.log(`${a} x ${b} = ${multiplication(a,b)}`);
// console.log(`${a} / ${b} = ${division(a,b)}`);

//Leer array, ordenar, determinar mayor, menor, pares e impares
const array = () => {
    let numbers;
    numbers = document.getElementById("number").value;
    numbers = numbers.split(',');
    var odd = '';
    var even = '';
    for (let i = 0; i < numbers.length; i++) {
        console.log(numbers[i]);
        console.log(typeof(numbers[i]));
        if (numbers[i] === undefined || numbers[i] === NaN || /^\s+$/.test(numbers[i]) || /^[a-z]+$/i.test(numbers[i]) || /^[A-Z]+$/i.test(numbers[i])) {
            document.getElementById("solution").innerHTML = `Ingrese solamente valores númericos. Recuerde no dejar espacios en blanco`;
        } else if (/^([0-9])*$/.test(numbers[i])) {
    numbers.sort(comparison = (a,b) => a - b);
    let max = Math.max.apply(null, numbers);
    let min = Math.min.apply(null, numbers);
        if (numbers[i] % 2 === 0) {
            even += `- ${numbers[i]}`;      
        };
        if (numbers[i] % 2 != 0) {
            odd += `- ${numbers[i]}`;
        };
    document.getElementById("solution").innerHTML = `<div>El máximo valor de la lista es ${max}.</div><div>El mínimo valor de la lista es ${min}.</div><div>Los números pares son ${even}.</div>Los números impares son ${odd}.`;
};
};
};