var cars = { 
  name: 'PVD Car Rentals',
  types: ['economy', 'midsize'],
  econCount: 30,
  midCount: 25,
 
};

window.onload = function() {
    document.getElementById('bizName').innerHTML = cars.name;
};

   function clicked_on(){
        
        document.getElementById('econCars').innerHTML = cars.types[0];
        document.getElementById('econCarsAvail').innerHTML = cars.econCount;
        document.getElementById('midCars').innerHTML = cars.types[1];
        document.getElementById('midCarsAvail').innerHTML = cars.midCount;
    };
    
    function midRent() {
        cars.midCount--;
        document.getElementById('midCarsAvail').innerHTML = cars.midCount;
    };
    
    function econRent() {
        cars.econCount--;
        document.getElementById('econCarsAvail').innerHTML = cars.econCount;
    };