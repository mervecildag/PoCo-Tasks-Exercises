// var billAmount;
// var tipRate;
// var tip;
// var totalAmount;
// var excludeVAT;
// var billAmountExVAT;


document.querySelector("#calculate-button").addEventListener("click", function(){
    var billAmount = parseFloat(Math.ceil(document.getElementById("bill-amount").value*20)/20);
    var tipRate = parseFloat(document.getElementById("tip-rate").value);
    var excludeVAT = parseFloat(document.getElementById("exclude-vat").value);


if(isNaN(billAmount)){
    alert("Please enter a valid bill amount");
    return;
}
if(isNaN(tipRate)){
    alert("Please enter a valid tip rate.")
    return;
}
if(isNaN(excludeVAT)){
    excludeVAT = 0;
}

//debug
console.log(billAmount);
console.log(tipRate);
console.log(excludeVAT);

var billAmountExVAT = billAmount - (billAmount * excludeVAT / 100);
var tip = billAmountExVAT * tipRate / 100;
var totalAmount = (Math.ceil((billAmount + tip) * 20) / 20);

document.getElementById("output").innerHTML = "Your bill amount is CHF " + billAmount.toFixed(2) + "<br>" +
                                                "Your tip rate is " + tipRate.toFixed(2) + "%<br>";

if(excludeVAT > 0){
    billAmountExVAT = billAmount - (billAmount * excludeVAT / 100);
    tip = billAmountExVAT * tipRate / 100;
} else {
    tip = billAmount * tipRate / 100;
}

tip = (Math.ceil(tip*20)/20);
totalAmount = (Math.ceil((billAmount + tip)*20)/20);

//debug
console.log(tip);
console.log(totalAmount);

document.write("Your bill amount is CHF "+billAmount.toFixed(2)+"<br>");
document.write("Your tip rate is "+tipRate.toFixed(2)+"%<br>");
document.write("Your exclude VAT is" + excludeVAT.toFixed(2)+ "%<br>")
document.write("You pay a total of CHF "+totalAmount.toFixed(2)+" with a tip of CHF "+tip.toFixed(2))

if(excludeVAT>0){
    document.getElementById("output").innerHTML += "You want to exclude the VAT of " + excludeVAT.toFixed(2) + "%<br>";
  }

  document.getElementById("output").innerHTML += "You pay a total of CHF " + totalAmount.toFixed(2) + " with a tip of CHF " + tip.toFixed(2);
  
});