var names = ['John', 'Ruth', 'Peter'];

var datesOfBirth = [23, 35, 40];

var largest = datesOfBirth[0];
var smallest = datesOfBirth[0];

for (var i = 0; i < datesOfBirth.length; i++) {

  if (datesOfBirth[i] > largest) {
      largest = datesOfBirth[i];
    } 
    else if(datesOfBirth[i] < smallest) {
      smallest = datesOfBirth[i];
    }
}

for (var i = 0; i < names.length; i++) {
  console.log(names[i]);
}

console.log(largest);
console.log(smallest);