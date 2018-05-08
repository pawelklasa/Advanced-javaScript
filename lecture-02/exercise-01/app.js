var daysofweek = [ 
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday'
];

listOfDaysOfTheWeek = daysofweek.map(function(day) {
  return '<li>' + day + '</li>';
});

console.log(listOfDaysOfTheWeek);