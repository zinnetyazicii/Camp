import _ from "lodash"

const numbers = [11,22,33,44,5];

//numbers.forEach(n=>console.log(n));

// for(number in numbers){
//     console.log(number);
// }

 _.each(numbers,function(number,i){
     console.log(number);
 });