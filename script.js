const billPerPerson = document.getElementById("billPerPerson"); 
const totalBill = document.getElementById("totalBill");
const tip = document.getElementById("tip");
const people = document.getElementById("people");

let count = Number(people.innerText);

function calculateBill(){
 const main_bill= Number(totalBill.value);
 const tipAmount = Number(tip.value);
 const total = main_bill + tipAmount;
 const totalAmountPerPerson = (total/Number(people.innerText)).toFixed(2);
 billPerPerson.innerText = totalAmountPerPerson;
 
}

function increasePeople(){
 count++;
 people.innerText= count;
 calculateBill();
}


function decreasePeople(){
if(count>1){
  count--;
  people.innerText= count;
  calculateBill();
}
}