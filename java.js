const smallAdd = document.querySelector(".smallAdd");
const smallSubtract = document.querySelector(".smallSubtract");
const smalltotal = document.querySelector(".smalltotal");

const Buy1 = document.querySelector(".Buy1");

const mediumAdd = document.querySelector(".mediumAdd");
const mediumSubtract = document.querySelector(".mediumSubtract");
const mediumtotal = document.querySelector(".mediumtotal");

const Buy2 = document.querySelector(".Buy2");

const largeAdd = document.querySelector(".largeAdd");
const largeSubtract = document.querySelector(".largeSubtract");
const largetotal = document.querySelector(".largetotal");

const Buy3 = document.querySelector(".Buy3");

const grandTotal = document.querySelector(".grandTotal");

const Check = document.querySelector(".Check");

//const Amount = document.querySelector(".Amount")

var addSmall = 0.00;
var addMedium = 0.00;
var addLarge = 0.00;
var addTotal = 0.00;

smallAdd.addEventListener('click', function(){
        addSmall += 39.99;
        addTotal += 39.99;
     smalltotal.innerHTML = "R" + addSmall.toFixed(2);
     grandTotal.innerHTML = "R" + addTotal.toFixed(2);
})

smallSubtract.addEventListener('click', function(){
            addSmall -= 39.99;
            addTotal -= 39.99;
            if(addSmall < 0) {
                addSmall += 39.99;
                addTotal += 39.99;
                return;
            }
    smalltotal.innerHTML = "R" + addSmall.toFixed(2);
    grandTotal.innerHTML = "R" + addTotal.toFixed(2);
})

Buy1.addEventListener('click', function(){
    addSmall += 39.99;
    addTotal += 39.99;
 smalltotal.innerHTML = "R" + addSmall.toFixed(2);
 grandTotal.innerHTML = "R" + addTotal.toFixed(2);
})
 ///Medium Pizza
 mediumAdd.addEventListener('click', function(){
    addMedium += 69.99;
    addTotal += 69.99;
 mediumtotal.innerHTML = "R" + addMedium.toFixed(2);
 grandTotal.innerHTML = "R" + addTotal.toFixed(2);
})

mediumSubtract.addEventListener('click', function(){
        addMedium -= 69.99;
        addTotal -= 69.99;
        if(addMedium < 0) {
            addMedium += 69.99;
            addTotal += 69.99;
            return;
        }
 mediumtotal.innerHTML = "R" + addMedium.toFixed(2);
grandTotal.innerHTML = "R" + addTotal.toFixed(2);
})

Buy2.addEventListener('click', function(){
addMedium += 69.99;
addTotal += 69.99;
mediumtotal.innerHTML = "R" + addMedium.toFixed(2);
grandTotal.innerHTML = "R" + addTotal.toFixed(2);
})

//Large Pizza

largeAdd.addEventListener('click', function(){
    addLarge += 119.99;
    addTotal += 119.99;
 largetotal.innerHTML = "R" + addLarge.toFixed(2);
 grandTotal.innerHTML = "R" + addTotal.toFixed(2);
})

largeSubtract.addEventListener('click', function(){
        addLarge -= 119.99;
        addTotal -= 119.99;
        if(addLarge < 0) {
            addLarge += 119.99;
            addTotal += 119.99;
            return;
        }
largetotal.innerHTML = "R" + addLarge.toFixed(2);
grandTotal.innerHTML = "R" + addTotal.toFixed(2);
})

Buy3.addEventListener('click', function(){
addLarge += 119.99;
addTotal += 119.99;
largetotal.innerHTML = addLarge.toFixed(2);
grandTotal.innerHTML = addTotal.toFixed(2);
})

//checkout

Check.addEventListener('click', function(){
    if (addTotal > 39 && addTotal < 499) {
        alert("Enjoy your pizzas");
    }
  else if (addTotal >= 500) {
         alert("you exceeded your budget")
    } 
})
