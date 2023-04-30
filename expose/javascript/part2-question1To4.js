// Question 1
function discountPrices (prices, discount) {
    var discounted = [ ];
    var finalPrice = 0;

    for (var i = 0; i < prices.length; i++) {
        var discountedPrice = prices[i] * (1 - discount);
        finalPrice = Math.round(discountedPrice * 100) / 100;
        discounted.push(finalPrice);
    }

    // console.log(i);
    // console.log(discountedPrice);
    // console.log(finalPrice);

    //Printing what's inside the discounted array.
    //console.log(discounted)
    //Or
    //for (var j = 0; j < discounted.length; j++){
    //    console.log(discounted[j]);
    //}

    return discounted;
}

discountPrices ([100, 200, 300], 0.5);