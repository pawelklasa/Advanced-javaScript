var car = {
    colour:"red",
    beeping: function () {
        console.log('Beep');
    }
}

console.log(car.colour);
car.beeping();

car.doors = "4";
car.openDours = function () {
    console.log("Doors are now opened");
}

console.log(car.doors);
car.openDours();

console.log(car['doors']);

car['openDours']();

for (const prop in car) {
    let message = "property name"  +prop;

    message += " Value " + car[prop];

    console.log(message);
}

const hasProperty = car.hasOwnProperty('lights');

console.log(hasProperty);


const carCopy = car;

console.log(carCopy);

carCopy.doors = 5;

console.log(carCopy);
console.log(car);

var track = {
    doors: 2,
    openDours: function() {
        return "The " + this.doors + " are opened";
    }
}

console.log(track.doors);
console.log(track.openDours());