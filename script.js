let bill = document.getElementById("text");
let NumberOfPeople = document.getElementById("text1");
let zero = document.querySelector("p");
let tip = document.querySelectorAll(".item");
let TipAmount = document.querySelector(".amount");
let TotalPerson = document.querySelector(".amount1");
let tipValue;
let tipAmounttPerPerson;
let customTip = document.querySelector(".custom");
let AmountPerPerson;
tip.forEach((item) => {
  item.addEventListener("click", function (e) {
    e.preventDefault();
    if (Number(NumberOfPeople.value) === 0) {
      zero.classList.add("active");
    } else {
      zero.classList.remove("active");
      if (item.classList.contains("5%")) {
        tipValue = (5 / 100) * Number(bill.value);
        tipAmounttPerPerson = tipValue / Number(NumberOfPeople.value);
        TipAmount.textContent = tipAmounttPerPerson.toFixed(2);
        AmountPerPerson =
          Number(bill.value) / Number(NumberOfPeople.value) +
          tipAmounttPerPerson;
        TotalPerson.textContent = AmountPerPerson.toFixed(2);
      }
      if (item.classList.contains("10%")) {
        tipValue = (10 / 100) * Number(bill.value);
        tipAmounttPerPerson = tipValue / Number(NumberOfPeople.value);
        TipAmount.textContent = tipAmounttPerPerson.toFixed(2);
        AmountPerPerson =
          Number(bill.value) / Number(NumberOfPeople.value) +
          tipAmounttPerPerson;
        TotalPerson.textContent = AmountPerPerson.toFixed(2);
      }
      if (item.classList.contains("15%")) {
        tipValue = (15 / 100) * Number(bill.value);
        tipAmounttPerPerson = tipValue / Number(NumberOfPeople.value);
        TipAmount.textContent = tipAmounttPerPerson.toFixed(2);
        AmountPerPerson =
          Number(bill.value) / Number(NumberOfPeople.value) +
          tipAmounttPerPerson;
        TotalPerson.textContent = AmountPerPerson.toFixed(2);
      }
      if (item.classList.contains("25%")) {
        tipValue = (25 / 100) * Number(bill.value);
        tipAmounttPerPerson = tipValue / Number(NumberOfPeople.value);
        TipAmount.textContent = tipAmounttPerPerson.toFixed(2);
        AmountPerPerson =
          Number(bill.value) / Number(NumberOfPeople.value) +
          tipAmounttPerPerson;
        TotalPerson.textContent = AmountPerPerson.toFixed(2);
      }
      if (item.classList.contains("50%")) {
        tipValue = (50 / 100) * Number(bill.value);
        tipAmounttPerPerson = tipValue / Number(NumberOfPeople.value);
        TipAmount.textContent = tipAmounttPerPerson.toFixed(2);
        AmountPerPerson =
          Number(bill.value) / Number(NumberOfPeople.value) +
          tipAmounttPerPerson;
        TotalPerson.textContent = AmountPerPerson.toFixed(2);
      }
    }
  });
});
let resetButton = document
  .querySelector(".reset")
  .addEventListener("click", function (e) {
    e.preventDefault();
    TotalPerson.textContent = "0.00";
    TipAmount.textContent = "0.00";
    bill.value = " ";
    NumberOfPeople.value = " ";
    customTip.value = "";
  });
customTip.addEventListener("input", function (e) {
  e.preventDefault();
  tipValue = (Number(customTip.value) / 100) * Number(bill.value);
  tipAmounttPerPerson = tipValue / Number(NumberOfPeople.value);
  TipAmount.textContent = tipAmounttPerPerson.toFixed(2);
  AmountPerPerson =
    Number(bill.value) / Number(NumberOfPeople.value) + tipAmounttPerPerson;
  TotalPerson.textContent = AmountPerPerson.toFixed(2);
});
