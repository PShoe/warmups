console.log('working?')

// Print out all the leap years in the last 100 years.

//
for (var year = 1917; year <= 2017; year ++){
    if (year%4===0){
    console.log(year);
    };
}
//
// // For numbers between 0 and 200:
// // a) print out multiples of 7.
// // b) print out every second odd number.
// // c) print out all prime numbers.
//
//
for (var i = 0; i <= 200; i ++){
    if (i%7 === 0){
        console.log(i)
    };
}

for (var i = 1; i <= 200; i= i + 4){
    if (i%2 !== 0){
        console.log(i)
    };
}


//
// //nope--- only divisible by 1 and itself. ie. can't have any other factors (count each?) missing 1 &2



// for (var numerator = 1; numerator <=200; numerator ++){
//     numFactors = 0;
//     for (var factor = 1; factor <= numerator; factor++){
//         if (numerator % factor === 0){
//             numFactors ++;
//         }
//     if (numFactors = 2){
//         console.log(numerator);
//     }
//     }
// }
