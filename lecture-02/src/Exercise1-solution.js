var daysofweek = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Monday'
];

// Print my array elements 
console.log(daysofweek);

// Step 1
// get a copy of the days of week with the new format
var daysofweek_as_list_elements = daysofweek.map(function(day){
    return `<li>${day}</li>`
})

console.log(daysofweek_as_list_elements);

// Step 2
// Adding the </ul> at the end of the array
daysofweek_as_list_elements.push('</ul>');

console.log(daysofweek_as_list_elements);

// Step 3
// Adding the <ul> at the beginning of the code 
let beginning = ['<ul>'];

daysofweek_as_list_elements = beginning.concat(daysofweek_as_list_elements);

console.log(daysofweek_as_list_elements);

// Step 4
// Convert daysofweek_as_list_elements to string
let daysofweek_string = daysofweek_as_list_elements.join(" ");

console.log(daysofweek_string);

// Step 5
// Get the element updated on dom
let element = document.getElementById("content");

// Step 6
// Set the element with the values
element.innerHTML = daysofweek_string;