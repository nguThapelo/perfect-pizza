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

//const Amount = document.querySelector(".Amount")

var addSmall = 0.00;
var addMedium = 0.00;
var addLarge = 0.00;
var addTotal = 0.00;

smallAdd.addEventListener('click', function () {
    addSmall += 39.99;
    addTotal += 39.99;
    smalltotal.innerHTML = "R" + addSmall.toFixed(2);
    grandTotal.innerHTML = "R" + addTotal.toFixed(2);
})




smallSubtract.addEventListener('click', function () {
    addSmall -= 39.99;
    addTotal -= 39.99;
    if (addSmall < 0) {
        addSmall += 39.99;
        addTotal += 39.99;
        return;
    }
    smalltotal.innerHTML = "R" + addSmall.toFixed(2);
    grandTotal.innerHTML = "R" + addTotal.toFixed(2);
})

Order1.addEventListener('click', function () {
    addSmall += 39.99;
    addTotal += 39.99;
    smalltotal.innerHTML = "R" + addSmall.toFixed(2);
    grandTotal.innerHTML = "R" + addTotal.toFixed(2);

    ShoppingCart.classList.remove("hide");

})
///Medium Pizza
mediumAdd.addEventListener('click', function () {
    addMedium += 69.99;
    addTotal += 69.99;
    mediumtotal.innerHTML = "R" + addMedium.toFixed(2);
    grandTotal.innerHTML = "R" + addTotal.toFixed(2);
})

mediumSubtract.addEventListener('click', function () {
    addMedium -= 69.99;
    addTotal -= 69.99;
    if (addMedium < 0) {
        addMedium += 69.99;
        addTotal += 69.99;
        return;
    }
    mediumtotal.innerHTML = "R" + addMedium.toFixed(2);
    grandTotal.innerHTML = "R" + addTotal.toFixed(2);
})

Order2.addEventListener('click', function () {
    addMedium += 69.99;
    addTotal += 69.99;
    mediumtotal.innerHTML = "R" + addMedium.toFixed(2);
    grandTotal.innerHTML = "R" + addTotal.toFixed(2);

    ShoppingCart.classList.remove("hide");

})

//Large Pizza

largeAdd.addEventListener('click', function () {
    addLarge += 119.99;
    addTotal += 119.99;
    largetotal.innerHTML = "R" + addLarge.toFixed(2);
    grandTotal.innerHTML = "R" + addTotal.toFixed(2);
})

largeSubtract.addEventListener('click', function () {
    addLarge -= 119.99;
    addTotal -= 119.99;
    if (addLarge < 0) {
        addLarge += 119.99;
        addTotal += 119.99;
        return;
    }
    largetotal.innerHTML = "R" + addLarge.toFixed(2);
    grandTotal.innerHTML = "R" + addTotal.toFixed(2);
})

Order3.addEventListener('click', function () {

    addLarge += 119.99;
    addTotal += 119.99;
    largetotal.innerHTML = addLarge.toFixed(2);
    grandTotal.innerHTML = addTotal.toFixed(2);

    ShoppingCart.classList.remove("hide");

})

//checkout

Check.addEventListener('click', function () {
    amount.classList.remove("hide");
    buyButton.classList.remove("hide");

})

buyButton.addEventListener('click', function () {

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

    

    
})


