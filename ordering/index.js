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