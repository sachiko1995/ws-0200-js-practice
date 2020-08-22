/**
 *  5.1 配列の要素を全て表示するメソッドを実装してください
 *
 */

// function printArray(array) {
//   return array
// }

function printArray(array) {
  for(let i=0; i < array.length; i++) {
    console.log(array[i]);
  }
}

// console.log(printArray(['Daniel', 'Wellington']))

/**
 *  5.2 関数内で全ての曜日を配列として宣言して返却するメソッドを実装してください
 *
 *  example:
 *     [
 *       "Monday",
 *       "Tuesday",
 *       "Wednesday",
 *       "Thursday",
 *       "Friday",
 *       "Saturday",
 *       "Sunday",
 *      ]
 *
 */
// function getDays() {
//   let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

//   return days 
// }

// console.log(getDays())

function getDays() {
  return ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
}

/**
 *  5.3 配列に特定の数があった場合にtrue、そうでない場合にfalseを返す関数を実装してください
 *
 *  example:
 *    [1, 2, 3], 1 => true
 *    [1, 2, 3], 5 => false
 *    [], 5 => false
 *
 */

 //answer

 function findNum(array, num) {
   for(let i=0; i < array.length; i++) {
     if(array[i] === num){
       return true;
     }
   }
   return false;
 }

// function findNum(array, num) {
//   let found = [...array].includes(num)
//   return found
// }

// console.log(findNum([1, 2, 3] , 1))
// console.log(findNum([1, 2, 3] , 4))
// console.log(findNum([], 5))

/**
 *  5.4 配列に重複した要素があれば、true、そうでなければfalseを返す関数を実装してください
 *
 *  example:
 *    [1, 2, 3] => false
 *    [1, 2, 2, 3] => true
 *    [] => false
 *
 */

// answer

function isDuplicate(array) {
  for(let i=0; i < array.length; i++) {
    for(let j=0; j < array.length; j++) {
      if(i !== j && array[i] === array[j]) {
        return true;
      }
    }
  }
  return false;
}

// function isDuplicate(array) {
//   for(let i=0; i < array.length; i++) {
//     if(array.indexOf([i]) == array.indexOf([i+1])) {
//       return true
//     } else {
//       return false
//     }      
// }
// }


// console.log(isDuplicate([1,2,3]))
// console.log(isDuplicate([1,2,2,3]))
// console.log(isDuplicate([]))

module.exports = {
  printArray,
  getDays,
  findNum,
  isDuplicate
}
