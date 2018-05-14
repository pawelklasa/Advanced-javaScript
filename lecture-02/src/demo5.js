
var California = {
  rooms: "2",
  nights: "13",
  pricePerNight: "20",
  cityCenterDistance: "200"
}

var Holiday = function(
  rooms, nights, pricePerNight, cityCenterDistance
) {
  this.rooms = rooms;
  this.nights = nights;
  this.pricePerNight = pricePerNight;
  this.cityCenterDistance = cityCenterDistance;
  this.calculateTotal = function() {
    console.log(this.nights*this.pricePerNight);
  }
}

var California = new Holiday('2', '13', '20', 200); 

California.calculateTotal();

Holiday.prototype.destination = "USA";

console.log(California.destination);