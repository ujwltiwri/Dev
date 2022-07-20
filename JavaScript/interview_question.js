let arr = [1, 4, 2, 3, 2, 4, 1, 5, 6, 1, 1];

function newdata(arr, count) {
  if (arr[count]) {
    arr[count] += 1;
  } else {
    arr[count] = 1;
  }
}

let ans = arr.reduce(newdata, {});

console.log(ans);

// var obj = {};
// for (let i = 0; i < arr.length; i++) {
//   if (obj[arr[i]]) {
//     obj[arr[i]] = obj[arr[i]] + 1;
//   } else {
//     obj[arr[i]] = 1;
//   }
// }

// console.log(obj);
