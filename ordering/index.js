const cars = [
    { name: "gol", price: 44000 },
    { name: "golf", price: 92000 },
    { name: "fusca", price: 17000 },
    { name: "Brasilia", price: 16000 },
    { name: "lamborghini", price: 1000000 },
];

cheaper = (arr) => {
    let cheaperAux = arr[0]; 
    for (let idx in cars) {
        if(cars[idx].price < cheaperAux.price)
            cheaperAux = cars[idx]; 
    }

    return cheaperAux;
}

function order(arr) {
    let ordered = [], length = arr.length;

    while(ordered.length < length) {
        let c = cheaper(arr);
        let idx = arr.indexOf(c);
        ordered.push(c);
        arr.splice(idx, 1);
    }

    return ordered;
}

console.log(cheaper(cars));

console.log(order(cars));