

// first function

// function kilometerToMeter(kilometer){
//     var meter= kilometer*1000;
//     return meter;
// }


//  second function


// function budgetCalculator(watch,phone,laptop){
//         var totalWatchPrice = watch * 50;
//         var totalPhonePrice = phone * 100;
//         var totalLaptopPrice = laptop * 500;

//         var total = totalWatchPrice + totalPhonePrice + totalLaptopPrice;

//         return total;
// }
// var result = budgetCalculator(1,1,1);
// console.log(result);

// third function

function hotelCost(days){
        var cost=0;
        if(days <= 10){
            cost=days*100;
        }
        else if(days <= 20){
            var firstTenDays = 10 * 100;
            var remaining = days - 10;
            var extraDays = remaining*80;
            cost = firstTenDays + extraDays;

        }
        else{
           var firstTenDays = 10 * 100;
           var nextTendays = 10* 80;
           var remaining= days-20;

           var extraDays= remaining * 50;
           cost = firstTenDays+nextTendays+extraDays;

        }
        return cost;

}

var result= hotelCost(21);
console.log(result);