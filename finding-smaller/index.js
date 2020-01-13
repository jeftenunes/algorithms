const cars = [
    { name: "golf", price: 92000 },
    { name: "fusca", price: 17000 },
    { name:"Brasilia", price: 16000 },
    { name:"lamborghini", price: 1000000 },
];

let cheaper1 = cars[0];

for (let idx in cars) {
    if(cars[idx].price < cheaper1.price)
        cheaper1 = cars[idx]; 
}

console.log(cheaper1);

//es6 approach
const cheaper2 = cars
    .sort((a, b) => a.price - b.price)
    .slice(0, 1)[0];

console.log(cheaper2);