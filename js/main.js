var  elForm = document.getElementById("form");
var elInput = document.getElementById("input");
var elSelect =document.getElementById("select_currency_type");

var elTettli = document.getElementById("tettli");

var dollor = 12000;
var yevro = 140000;
var rubil = 569;


var result = ""

elForm.addEventListener("submit",function (evt) {
 evt.preventDefault();

 var inputAmound = elInput.value;
 var imputSelect = elSelect.value;

 if (imputSelect == "usd"){
  result = inputAmound / dollor
  elTettli.textContent = result
  console.log(result);
 }
})