const smallAdd = document.querySelector(".smallAdd");
const smallSubtract = document.querySelector(".smallSubtract");
const smalltotal = document.querySelector(".smalltotal");
const ShoppingCart = document.querySelector(".ShoppingCart");
const Order1 = document.querySelector(".Order1");
const payment = document.querySelector(".payment");
const mediumAdd = document.querySelector(".mediumAdd");
const mediumSubtract = document.querySelector(".mediumSubtract");
const mediumtotal = document.querySelector(".mediumtotal");

const Order2 = document.querySelector(".Order2");
const buyButton = document.querySelector(".buyButton");
const largeAdd = document.querySelector(".largeAdd");
const largeSubtract = document.querySelector(".largeSubtract");
const largetotal = document.querySelector(".largetotal");

const amount = document.querySelector(".amount");

const Order3 = document.querySelector(".Order3");

const grandTotal = document.querySelector(".grandTotal");

const Check = document.querySelector(".Check");

const Message = document.querySelector(".Message");

var addSmall = 0.00;
var addMedium = 0.00;
var addLarge = 0.00;
var addTotal = 0.00;


function smallad(){
    addSmall += 39.99;
    addTotal += 39.99;
    smalltotal.innerHTML = "R" + addSmall.toFixed(2);
    grandTotal.innerHTML = "R" + addTotal.toFixed(2);
}

function smallsub(){
    addSmall -= 39.99;
    addTotal -= 39.99;
    if (addSmall < 0) {
        addSmall += 39.99;
        addTotal += 39.99;
        return " ";
    }
    smalltotal.innerHTML = "R" + addSmall.toFixed(2);
    grandTotal.innerHTML = "R" + addTotal.toFixed(2);
}

function smallOrder(){
    addSmall += 39.99;
    addTotal += 39.99;
    smalltotal.innerHTML = "R" + addSmall.toFixed(2);
    grandTotal.innerHTML = "R" + addTotal.toFixed(2);

    ShoppingCart.classList.remove("hide");
}

///Medium Pizza
function mediumAd(){
    addMedium += 69.99;
    addTotal += 69.99;
    mediumtotal.innerHTML = "R" + addMedium.toFixed(2);
    grandTotal.innerHTML = "R" + addTotal.toFixed(2);
}

function mediumSub(){
    addMedium -= 69.99;
    addTotal -= 69.99;
    if (addMedium < 0) {
        addMedium += 69.99;
        addTotal += 69.99;
        return;
    }
    mediumtotal.innerHTML = "R" + addMedium.toFixed(2);
    grandTotal.innerHTML = "R" + addTotal.toFixed(2);
}

function mediumOrder(){
    addMedium += 69.99;
    addTotal += 69.99;
    mediumtotal.innerHTML = "R" + addMedium.toFixed(2);
    grandTotal.innerHTML = "R" + addTotal.toFixed(2);

    ShoppingCart.classList.remove("hide");
}

//Large Pizza

function largeAd(){
    addLarge += 119.99;
    addTotal += 119.99;
    largetotal.innerHTML = "R" + addLarge.toFixed(2);
    grandTotal.innerHTML = "R" + addTotal.toFixed(2);
}

function largeSub(){
    addLarge -= 119.99;
    addTotal -= 119.99;
    if (addLarge < 0) {
        addLarge += 119.99;
        addTotal += 119.99;
        return;
    }
    largetotal.innerHTML = "R" + addLarge.toFixed(2);
    grandTotal.innerHTML = "R" + addTotal.toFixed(2);
}

function largeOrder(){
    addLarge += 119.99;
    addTotal += 119.99;
    largetotal.innerHTML = addLarge.toFixed(2);
    grandTotal.innerHTML = addTotal.toFixed(2);

    ShoppingCart.classList.remove("hide");
}

//checkout
function checkOutbut(){
    amount.classList.remove("hide");
    buyButton.classList.remove("hide");
}

function buy(){
    if (addTotal >= payment.value) {
        Message.classList.remove("hide");
        Message.innerHTML = "your budget is not enough";
    }

    else if (addTotal < payment.value) {
        Message.classList.remove("hide");

        Message.innerHTML = "Enjoy your Pizza";
    }

    setTimeout (function(){
        Message.classList.add("hide");        
    }, 2000)
}

smallAdd.addEventListener('click', smallad);
smallSubtract.addEventListener('click', smallsub);
Order1.addEventListener('click', smallOrder);

mediumAdd.addEventListener('click', mediumAd);
mediumSubtract.addEventListener('click', mediumSub);
Order2.addEventListener('click', mediumOrder);

largeAdd.addEventListener('click', largeAd);
largeSubtract.addEventListener('click', largeSub);
Order3.addEventListener('click', largeOrder);

Check.addEventListener('click', checkOutbut);
buyButton.addEventListener('click', buy);

