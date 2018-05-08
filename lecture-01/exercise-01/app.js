var names = ['John', 'Ruth', 'Peter'];

var datesOfBirth = [23, 35, 40];

for (var i = 0; i < names.length; i++) {
  console.log(names[i]);
}



numbers = [2, 4, 9, 2, 0, 16, 24]

var largest = numbers[0];
var smallest = numbers[0];

for (var i = 1; i < numbers.length; i++) {

    if (numbers[i] > largest) {
        largest = numbers[i];
    }
    else if(numbers[i] < smallest) {
        smallest = numbers[i];
    }

    

}

console.log(largest);
console.log(smallest);