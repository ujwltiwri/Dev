/* Note (Imp) -> 1) Wherever Possible Data Types Will Be Converted to Complete The Computation 
2) null get implicitly converted to 0 -> 0
*/
var ans = "5" + 1; //51 -> because 5 is a string and 1 is concatenated with it

var ans = 5 + "1"; //51 -> because 5 is a string and 1 is concatenated with it

var ans = 5 - "1"; //4 -> because 5 is a no & we're trying to subtract 1 from 5 & as 1 can also be converted into no -> It'll be converted into no

var ans =
  undefined *
  6; /* NaN (Not a Number) -> when computation is not possible then (NaN) is returned -> and here (undefined * 6) isn't possible, cuz undefined -> value isn't defined
 So Computation of -> (Not defined value * an defined value) is not possible -> NaN is returned 
*/
console.log(undefined * "6"); //NaN (Not a Number) -> when computation is not possible then (NaN) is returned -> and here (undefined * '6') isn't possible, cuz undefined -> value isn't defined

console.log("ten" * 3); //NaN -> cuz we can't multiply str with a no -> it is not computational
console.log("10" * 3); //30 -> str 10 can be converted into number 10 -> 30

console.log(null * 5); //0 -> We know null means empty Value, But whenever null is multipled with something it gives itself the value 0
console.log(null * "5"); //0 -> Same reason as above -> null = 0 & 5 of str is converted into 5 of number -> 0 is returned

console.log(undefined + 8); //NaN -> cuz we can't do addition of undefined and a number
console.log("ten" * "3"); //NaN -> cuz we can't multiply strings

//In case of subtraction it tries to convert operands into numbers
var ans = 5 - "1";
console.log(ans); //4

console.log(undefined - 9); //NaN
console.log(null - 9); // 0-9 -> -9
console.log(true - 9); //1-9 -> -8
console.log(false - "9"); //0 - 9 -> -9
console.log([4] * 2); //8
console.log([4, 5, 6, 8] * 2); //NaN -> If There is Only One No in Array Then It's Converted into No, and if more than 1 then array -> and Array can't be multiplied to a No -> NaN
console.log({ a: 3 } * 2); //NaN
