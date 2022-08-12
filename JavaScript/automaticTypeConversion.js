/* Note (Imp) -> Wherever Possible Data Types Will Be Converted to Complete The Comutation */
var ans = "5" + 1; //51 -> because 5 is a string and 1 is concatenated with it

var ans = 5 + "1"; //51 -> because 5 is a string and 1 is concatenated with it

var ans = 5 - "1"; //4 -> because 5 is a no & we're trying to subtract 1 from 5 & as 1 can also be converted into no -> It'll be converted into no

var ans =
  undefined *
  6; /* Nan (Not a Number) -> when computation is not possible then (Nan) is returned -> and here (undefined * 6) isn't possible, cuz undefined -> value isn't defined
 So Computation of -> (Not defined value * an defined value) is not possible -> Nan is returned 
*/
console.log(undefined * "6"); //Nan (Not a Number) -> when computation is not possible then (Nan) is returned -> and here (undefined * '6') isn't possible, cuz undefined -> value isn't defined

console.log("ten" * 3); //Nan -> cuz we can't multiply str with a no -> it is not computational
console.log("10" * 3); //30 -> str 10 can be converted into number 10 -> 30

console.log(null * 5); //0 -> We know null means empty Value, But whenever null is multipled with something it gives itself the value 0
console.log(null * "5"); //0 -> Same reason as above -> null = 0 & 5 of str is converted into 5 of number -> 0 is returned

console.log(undefined + 8); //Nan -> cuz we can't do addition of undefined and a number
console.log("ten" * "3"); //Nan -> cuz we can't multiply strings
