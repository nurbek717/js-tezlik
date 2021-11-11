// var  elForm = document.getElementById("form");
// var elInput = document.getElementById("input");
// var elSelect =document.getElementById("select_currency_type");

// var elTettli = document.getElementById("tettli");




// var result = ""

// elForm.addEventListener("submit",function (evt) {
//   evt.preventDefault();

//   // var inputAmound = elInput.value.trim();
//   // var imputSelect = elSelect.value;

//   // var validation =  inputAmound.toLowerCase() == "MrAbbasov".toLowerCase(); 

//   var validation = inputAmound;
//   if (validation){
//     elTettli.textContent = inputAmound
//     console.log(inputAmound.length);
//   }
// })

// console.log("MrAbbasov".toLowerCase());
// console.log("MrAbbasov".toUpperCase());

// _________________________________________________________________________________________________



var elForm = document.querySelector(".form");
var elRezultWalk = document.querySelector(".result-walk");
var elRezultBike = document.querySelector(".result-bike");
var elRezultCar = document.querySelector(".result-car");
var elRezultPlance = document.querySelector(".result-plance");

var walkSpeed = 3.6;
var bikeSpeed = 20.1;
var carSpeed = 70;
var planeSpeed = 800;

elForm.addEventListener('submit', function(evt){
  evt.preventDefault()
  
  var elDistanceInput = elForm.querySelector(".distance__input").value.trim();
  
  if (elDistanceInput <= 0){
    alert("'Please enter only positive numbers!")
  }else{
    // var byWalk = (elDistanceInput / walkSpeed)  + " h " + Math.floor(elDistanceInput/ walkSpeed)  60 + " mine " ;
    // var byBike = Math.floor(elDistanceInput/ bikeSpeed)  + " h " + Math.floor(elDistanceInput/ bikeSpeed) % 60 + " mine " ;
    // var byCar = Math.floor(elDistanceInput/ carSpeed)+ " h " + Math.floor(elDistanceInput/ carSpeed) % 60 + " mine " ;
    // var byPlane = Math.floor(elDistanceInput/ planeSpeed)  + " h " + Math.floor(elDistanceInput/ planeSpeed) % 60 + " mine " ;
    
    var bayBikeHour = elDistanceInput / bikeSpeed;
    var bayBikeMinut = Math.ceil((bayBikeHour - Math.floor(bayBikeHour))*60 )
    
    var bayWalkeHour = elDistanceInput / walkSpeed;
    var bayWalkeMinut = Math.ceil((bayWalkeHour - Math.floor(bayWalkeHour))*60 )
    
    var bayCarHour = elDistanceInput / carSpeed;
    var bayCarMinut = Math.ceil((bayCarHour - Math.floor(bayCarHour))*60 )
    
    var bayPlaneHour = elDistanceInput / planeSpeed;
    var bayPlaneMinut = Math.ceil((bayPlaneHour - Math.floor(bayPlaneHour))*60 )
    
    
    // bu cosole.log dagi ifodasi :
    
    console.log(Math.floor(bayBikeHour) + " h " ,bayBikeMinut + " min ");
    console.log(Math.floor(bayWalkeHour) + " h " ,bayWalkeMinut + " min ");
    console.log(Math.floor(bayCarHour) + " h " ,bayCarMinut + " min ");
    console.log(Math.floor(bayPlaneHour) + " h " ,bayPlaneMinut + " min ");
    
    // bu text.Content :

    
    elRezultWalk.textContent = Math.floor(bayWalkeHour) + " h  " + bayWalkeMinut + " min ";
    elRezultBike.textContent = Math.floor(bayBikeHour) + " h " + bayBikeMinut + " min " ;
    elRezultCar.textContent = Math.floor(bayCarHour) + " h " + bayCarMinut + " min ";
    elRezultPlance.textContent = Math.floor(bayPlaneHour) + " h " + bayPlaneMinut + " min ";
  }


})